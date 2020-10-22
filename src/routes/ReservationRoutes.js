const express = require('express');

module.exports = (reservationController) => {
  const router = express.Router();
  router.post('/api/reservations', reservationController.create);
  return router;
};
