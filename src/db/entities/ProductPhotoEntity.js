const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'pph',
  tableName: 'PRODUCTS_PHOTOS',
  columns: {
    id: { type: 'integer', primary: true, generated: true },
    photo: { type: 'text' },
    isMain: { type: 'boolean' },
  },
  relations: {
    product: {
      type: 'many-to-one', target: 'prod', inverseSide: 'photos', joinColumn: true, onDelete: 'CASCADE',
    },
  },
});
