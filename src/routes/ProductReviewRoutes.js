const express = require('express');

module.exports = (prodReviewController) => {
  const router = express.Router();
  router.get('/products/:id/reviews', prodReviewController.loadByProduct.bind(prodReviewController));
  router.post('/products/:id/reviews', prodReviewController.addProductReview.bind(prodReviewController));
  return router;
};
