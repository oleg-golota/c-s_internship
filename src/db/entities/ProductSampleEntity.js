const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'psam',
  tableName: 'PRODUCTS_SAMPLES',
  columns: {
    id: { type: 'integer', primary: true, generated: true },
    stockCode: { type: 'varchar', length: 24, unique: true },
    variationPropValue: { type: 'varchar', length: 24, nullable: true },
    price: { type: 'numeric', precision: 10, scale: 2 },
    amountInStock: { type: 'smallint' },
    index: { type: 'smallint' },
  },
  relations: {
    product: {
      type: 'many-to-one',
      target: 'prod',
      inverseSide: 'samples',
      joinColumn: true,
      nullable: false,
      onDelete: 'CASCADE',
    },
  },
});
