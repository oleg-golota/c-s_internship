const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'rsvi',
  tableName: 'RESERVATIONS_ITEMS',
  columns: {
    id: { type: 'integer', primary: true, generated: true },
    amount: { type: 'smallint' },
  },
  relations: {
    reservation: {
      type: 'many-to-one',
      target: 'rsv',
      inverseSide: 'items',
      joinColumn: true,
      nullable: false,
      onDelete: 'CASCADE',
    },
    productSample: {
      type: 'many-to-one', target: 'psam', joinColumn: true, nullable: false,
    },
  },
});
