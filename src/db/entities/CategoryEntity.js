const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'ctg',
  tableName: 'CATEGORIES',
  columns: {
    id: { type: 'integer', primary: true, generated: true },
    name: { type: 'varchar', length: 100 },
  },
  relations: {
    parent: {
      type: 'many-to-one',
      target: 'ctg',
      inverseSide: 'children',
      joinColumn: true,
      nullable: true,
      onDelete: 'CASCADE',
    },
    children: {
      type: 'one-to-many', target: 'ctg', inverseSide: 'parent', cascade: true,
    },
  },
});
