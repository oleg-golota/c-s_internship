const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'rsv',
  tableName: 'RESERVATIONS',
  columns: {
    id: { type: 'integer', primary: true, generated: true },
    email: { type: 'varchar', length: 48 },
    firstName: { type: 'varchar', length: 24 },
    lastName: { type: 'varchar', length: 24 },
    phone: { type: 'varchar', length: 16 },
    city: { type: 'varchar', length: 16 },
  },
  relations: {
    productSamples: {
      type: 'many-to-many',
      target: 'psam',
      eager: true,
      joinTable: {
        name: 'RESERVATIONS_PRODUCTS_SAMPLES',
        joinColumn: { name: 'RESERVATION_ID' },
        inverseJoinColumn: { name: 'PROD_SAMPLE_ID' },
      },
    },
  },
});
