const { getConnection, getRepository } = require('typeorm');
const ProductReviewEntity = require('../entities/ProductReviewEntity');
const ProductEntity = require('../entities/ProductEntity');

exports.loadByProduct = (prodId, searchOps) => {
  const queryBuilder = getRepository(ProductReviewEntity).createQueryBuilder('prev')
    .where('prev.productId = :prodId', { prodId })
    .orderBy('prev.date', 'DESC');
  if (searchOps.pageSize) {
    queryBuilder.take(searchOps.pageSize);
    if (searchOps.pageOffset && searchOps.pageOffset > 1) {
      queryBuilder.skip((searchOps.pageOffset - 1) * searchOps.pageSize);
    }
  }
  return queryBuilder.getMany();
};

exports.addProductReview = (prodId, review) => getConnection()
  .transaction(async (manager) => {
    const product = await manager.createQueryBuilder(ProductEntity, 'prod')
      .where('prod.id = :prodId', { prodId }).getOne();
    product.rating = product.reviewCounter === 0
      ? review.rating : (product.rating + review.rating) / 2;
    product.reviewCounter += 1;
    await manager.save(ProductEntity, product);
    // eslint-disable-next-line no-param-reassign
    review.product = product;
    return manager.save(ProductReviewEntity, review);
  });
