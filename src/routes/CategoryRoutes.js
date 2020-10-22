const express = require('express');

module.exports = (ctgController) => {
  const router = express.Router();
  router.get('/api/categories', ctgController.loadAll);
  return router;
};
