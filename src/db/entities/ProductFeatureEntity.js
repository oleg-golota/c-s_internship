const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'pfea',
  tableName: 'PRODUCTS_FEATURES',
  columns: {
    id: { type: 'integer', primary: true, generated: true },
    key: { type: 'varchar', length: 100 },
    value: { type: 'varchar', length: 100 },
    searchable: { type: 'boolean' },
    index: { type: 'smallint' },
  },
  relations: {
    product: {
      type: 'many-to-one',
      target: 'prod',
      inverseSide: 'features',
      joinColumn: true,
      nullable: false,
      onDelete: 'CASCADE',
    },
  },
  indices: [
    { name: 'IDX_PRODUCT_FEATURE', columns: ['key', 'value'] },
  ],
});
