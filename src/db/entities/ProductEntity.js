const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'prod',
  tableName: 'PRODUCTS',
  columns: {
    id: { type: 'integer', primary: true, generated: true },
    name: { type: 'text' },
    brand: { type: 'varchar', length: 24 },
    samplesVariationProp: { type: 'varchar', length: 24, nullable: true },
    rating: { type: 'smallint' }, // value * 100
    reviewCounter: { type: 'smallint' },
    purchaseCounter: { type: 'smallint' },
  },
  relations: {
    samples: {
      type: 'one-to-many', target: 'psam', inverseSide: 'product', eager: true, cascade: true,
    },
    description: {
      type: 'one-to-one', target: 'pdesc', inverseSide: 'product', cascade: true,
    },
    features: {
      type: 'one-to-many', target: 'pfea', inverseSide: 'product', cascade: true,
    },
    photos: {
      type: 'one-to-many', target: 'pph', inverseSide: 'product',
    },
    reviews: {
      type: 'one-to-many', target: 'prev', inverseSide: 'product', cascade: true,
    },
    categories: {
      type: 'many-to-many',
      target: 'ctg',
      eager: true,
      joinTable: {
        name: 'PRODUCTS_CATEGORIES',
        joinColumn: { name: 'PRODUCT_ID' },
        inverseJoinColumn: { name: 'CATEGORY_ID' },
      },
    },
  },
  indices: [
    // actually index for name column is the most important for shop application,
    // but this task is not trivial and requires serious development.
    // Because usual index won't work with checking for arbitrary substring in name column.
    // It could be more specific fulltext search index
    // or maybe name column should have additionally be splitted to words
    // to store in dedicated table with B-tree index
    { name: 'IDX_PRODUCT_BRAND', columns: ['brand'] },
  ],
});
