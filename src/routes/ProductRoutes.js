const express = require('express');

module.exports = (productController) => {
  const router = express.Router();
  router.get('/products/category/:ctgId', productController.loadByCategory.bind(productController));
  router.get('/products/:id', productController.read.bind(productController));
  router.put('/products/:id', productController.update.bind(productController));
  router.post('/products', productController.create.bind(productController));
  router.delete('/products/:id', productController.delete.bind(productController));
  router.get('/products/:id/description', productController.getProductDescription.bind(productController));
  router.get('/products/:id/features', productController.getProductFeatures.bind(productController));
  return router;
};
