const express = require('express');

module.exports = (reservationController) => {
  const router = express.Router();
  router.post('/reservations', reservationController.create.bind(reservationController));
  return router;
};
