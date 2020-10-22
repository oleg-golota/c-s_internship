const express = require('express');

module.exports = (ctgController) => {
  const router = express.Router();
  router.get('/categories', ctgController.loadAll.bind(ctgController));
  return router;
};
