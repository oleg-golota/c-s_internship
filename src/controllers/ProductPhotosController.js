const formidable = require('formidable');

class ProductPhotoController {
  constructor(prodPhotoCrudService) {
    this.prodPhotoCrudService = prodPhotoCrudService;
  }

  loadByProduct(req, res, next) {
    this.prodPhotoCrudService.loadByProduct(req.params.id).then((photos) => res.json(photos), next);
  }

  addProductPhoto(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
      } else {
        const fileField = Object.keys(files)[0];
        this.prodPhotoCrudService.addProductPhoto(req.params.id, files[fileField].path)
          .then(() => res.sendStatus(200), next);
      }
    });
  }
}

module.exports = ProductPhotoController;
