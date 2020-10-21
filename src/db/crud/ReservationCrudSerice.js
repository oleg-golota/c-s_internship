const { getConnection } = require('typeorm');
const ProductEntity = require('../entities/ProductEntity');
const ProductSampleEntity = require('../entities/ProductSampleEntity');
const ReservationEntity = require('../entities/ReservationEntity');

exports.makeReservation = (reservation) => getConnection()
  .transaction(async (manager) => {
    const samplesIds = reservation.productSamples.map((sample) => sample.id);
    const samples = await manager.createQueryBuilder(ProductSampleEntity, 'sam')
      .innerJoinAndSelect('sam.product', 'prod')
      .where('sam.id IN (:...samplesIds)', { samplesIds }).getMany();
    samples.forEach((sam) => {
      // eslint-disable-next-line no-param-reassign
      sam.amountInStock -= 1;
      // eslint-disable-next-line no-param-reassign
      sam.product.purchaseCounter += 1;
    });
    await manager.save(ProductSampleEntity, samples);
    await manager.save(ProductEntity, samples.map((sam) => sam.product));
    return manager.save(ReservationEntity, reservation);
  });
