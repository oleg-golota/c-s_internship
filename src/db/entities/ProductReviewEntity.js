const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'prev',
  tableName: 'PRODUCTS_REVIEWS',
  columns: {
    id: { type: 'integer', primary: true, generated: true },
    reviewerEmail: { type: 'varchar', length: 48 },
    reviewerName: { type: 'varchar', length: 48 },
    rating: { type: 'smallint' },
    comment: { type: 'text', nullable: true },
    date: { type: 'date' },
  },
  relations: {
    product: {
      type: 'many-to-one', target: 'prod', inverseSide: 'reviews', joinColumn: true, onDelete: 'CASCADE',
    },
  },
});
