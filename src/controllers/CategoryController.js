class CategoryController {
  constructor(ctgCrudService) {
    this.ctgCrudService = ctgCrudService;
  }

  loadAll(req, res, next) {
    this.ctgCrudService.loadAll().then((categories) => res.json(categories), next);
  }
}

module.exports = CategoryController;
