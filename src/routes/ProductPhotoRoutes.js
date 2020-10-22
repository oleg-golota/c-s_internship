const express = require('express');

module.exports = (prodPhotoController) => {
  const router = express.Router();
  router.get('/api/products/:id/photos', prodPhotoController.loadByProduct);
  router.post('/api/products/:id/photos', prodPhotoController.addProductPhoto);
  return router;
};
