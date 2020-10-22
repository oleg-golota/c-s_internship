const express = require('express');

module.exports = (prodPhotoController) => {
  const router = express.Router();
  router.get('/products/:id/photos', prodPhotoController.loadByProduct.bind(prodPhotoController));
  router.post('/products/:id/photos', prodPhotoController.addProductPhoto.bind(prodPhotoController));
  return router;
};
