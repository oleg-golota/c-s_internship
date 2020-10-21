const { getRepository } = require('typeorm');
const ProductReviewEntity = require('../entities/ProductReviewEntity');
const ProductEntity = require('../entities/ProductEntity');

exports.loadByProduct = (prodId, searchOps) => {
  const queryBuilder = getRepository(ProductReviewEntity).createQueryBuilder('prev')
    .where('prev.productId = :prodId', { prodId });
  if (searchOps.pageSize) {
    queryBuilder.take(searchOps.pageSize);
    if (searchOps.pageOffset && searchOps.pageOffset > 1) {
      queryBuilder.skip((searchOps.pageOffset - 1) * searchOps.pageSize);
    }
  }
  return queryBuilder.getMany();
};

exports.addProductReview = (prodId, review) => getRepository(ProductEntity).createQueryBuilder()
  .relation('reviews').of(prodId)
  .add(review);
