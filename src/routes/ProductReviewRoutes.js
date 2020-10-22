const express = require('express');

module.exports = (prodReviewController) => {
  const router = express.Router();
  router.get('/api/products/:id/reviews', prodReviewController.loadByProduct);
  router.post('/api/products/:id/reviews', prodReviewController.addProductReview);
  return router;
};
