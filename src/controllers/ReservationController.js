class ReservationController {
  constructor(reservationCrudService) {
    this.reservationCrudService = reservationCrudService;
  }

  create(req, res, next) {
    this.reservationCrudService.makeReservation(req.body).then((rsv) => res.json(rsv.id), next);
  }
}

module.exports = ReservationController;
