const { getConnection } = require('typeorm');
const ProductEntity = require('../entities/ProductEntity');
const ProductSampleEntity = require('../entities/ProductSampleEntity');
const ReservationEntity = require('../entities/ReservationEntity');

exports.makeReservation = (reservation) => getConnection()
  .transaction(async (manager) => {
    const samplesIds = reservation.items.map((item) => item.productSample.id);
    const samples = await manager.createQueryBuilder(ProductSampleEntity, 'sam')
      .innerJoinAndSelect('sam.product', 'prod')
      .where('sam.id IN (:...samplesIds)', { samplesIds }).getMany();
    samples.forEach((sam) => {
      const itemsAmount = reservation.items.find((item) => item.productSample.id === sam.id).amount;
      // eslint-disable-next-line no-param-reassign
      sam.amountInStock -= itemsAmount;
      // eslint-disable-next-line no-param-reassign
      sam.product.purchaseCounter += itemsAmount;
    });
    await manager.save(ProductSampleEntity, samples);
    await manager.save(ProductEntity, samples.map((sam) => sam.product));
    return manager.save(ReservationEntity, reservation);
  });
