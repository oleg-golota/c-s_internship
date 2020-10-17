const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'pdesc',
  tableName: 'PRODUCTS_DESCRIPTIONS',
  columns: {
    id: { type: 'integer', primary: true, generated: true },
    description: { type: 'text' },
  },
  relations: {
    product: {
      type: 'one-to-one', target: 'prod', inverseSide: 'description', joinColumn: true, onDelete: 'CASCADE',
    },
  },
});
