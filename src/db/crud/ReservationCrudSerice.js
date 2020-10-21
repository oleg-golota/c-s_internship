const { getRepository } = require('typeorm');
const ReservationEntity = require('../entities/ReservationEntity');

exports.create = (reservation) => getRepository(ReservationEntity).save(reservation);
