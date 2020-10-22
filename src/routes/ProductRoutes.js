const express = require('express');

module.exports = (productController) => {
  const router = express.Router();
  router.get('/api/products/category/:ctgId', productController.loadByCategory);
  router.get('/api/products/:id', productController.read);
  router.put('/api/products/:id', productController.update);
  router.post('/api/products', productController.create);
  router.delete('/api/products/:id', productController.delete);
  router.get('/api/products/:id/description', productController.getProductDescription);
  router.get('/api/products/:id/features', productController.getProductFeatures);
  return router;
};
