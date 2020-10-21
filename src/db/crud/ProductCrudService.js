const { getRepository } = require('typeorm');
const ProductEntity = require('../entities/ProductEntity');
const productSortOptions = require('../../helpers/dataFetchOptions/ProductSortOptions');

exports.loadByCategory = (ctgId, searchOps) => {
  const queryBuilder = getRepository(ProductEntity).createQueryBuilder('prod')
    .leftJoinAndSelect('prod.categories', 'ctg')
    .leftJoinAndSelect('prod.samples', 'sample')
    .where('ctg.id = :id', { id: ctgId });
  if (searchOps.sortOption === productSortOptions.PRICE) {
    queryBuilder.orderBy('sample.price', 'ASC');
  } else if (searchOps.sortOption === productSortOptions.RATING) {
    queryBuilder.orderBy('prod.ratingCounter', 'DESC');
  } else {
    queryBuilder.orderBy('prod.purchaseCounter', 'DESC');
  }
  if (searchOps.pageSize) {
    queryBuilder.take(searchOps.pageSize);
    if (searchOps.pageOffset && searchOps.pageOffset > 1) {
      queryBuilder.skip((searchOps.pageOffset - 1) * searchOps.pageSize);
    }
  }
  return queryBuilder.getMany();
};

exports.read = (id) => getRepository(ProductEntity).findOne({ where: { id } });

exports.save = (prod) => getRepository(ProductEntity).save(prod);

exports.remove = (id) => getRepository(ProductEntity).createQueryBuilder().delete().where('id = :id', { id })
  .execute();

exports.getDescription = (id) => getRepository(ProductEntity).createQueryBuilder().relation('description').of(id)
  .loadOne();

exports.getFeatures = (id) => getRepository(ProductEntity).createQueryBuilder().relation('features').of(id)
  .loadMany();
