const CollectionSearchOptions = require('../helpers/dataFetchOptions/CollectionSearchOptions');

class ProductReviewController {
  constructor(prodReviewCrudService) {
    this.prodReviewCrudService = prodReviewCrudService;
  }

  loadByProduct(req, res, next) {
    this.prodReviewCrudService.loadByProduct(
      req.params.id,
      new CollectionSearchOptions(null, req.query.pageSize, req.query.pageOffset),
    ).then((reviews) => res.json(reviews), next);
  }

  addProductReview(req, res, next) {
    this.prodReviewCrudService.addProductReview(req.params.id, req.body)
      .then(() => res.sendStatus(200), next);
  }
}

module.exports = ProductReviewController;
