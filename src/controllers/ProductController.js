const CollectionSearchOptions = require('../helpers/dataFetchOptions/CollectionSearchOptions');
const productSortOptions = require('../helpers/dataFetchOptions/ProductSortOptions');

class ProductController {
  constructor(productCrudService) {
    this.productCrudService = productCrudService;
  }

  loadByCategory(req, res, next) {
    const sortBy = productSortOptions.parseSortOption(req.query.sortBy);
    this.productCrudService.loadByCategory(
      req.params.ctgId,
      new CollectionSearchOptions(sortBy, req.query.pageSize, req.query.pageOffset),
    ).then((products) => res.json(products), next);
  }

  read(req, res, next) {
    this.productCrudService.read(req.params.id).then((product) => res.json(product), next);
  }

  save(req, res, next) {
    this.productCrudService.save(req.body).then((product) => res.json(product.id), next);
  }

  create(req, res, next) {
    this.save(req, res, next);
  }

  update(req, res, next) {
    if (+req.body.id !== +req.params.id) {
      next(new Error('Inconsistent product Id'));
    } else {
      this.save(req, res, next);
    }
  }

  delete(req, res, next) {
    this.productCrudService.delete(req.params.id).then(() => res.sendStatus(200), next);
  }

  getProductDescription(req, res, next) {
    this.productCrudService.getDescription(req.params.id).then((descr) => res.json(descr), next);
  }

  getProductFeatures(req, res, next) {
    this.productCrudService.getFeatures(req.params.id).then((fea) => res.json(fea), next);
  }
}

module.exports = ProductController;
