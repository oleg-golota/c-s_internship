const { getConnection } = require('typeorm');
const buildHierarchy = require('../helpers/buildHierarchy');

function categoryHierarchyQuery(moveUp, condition) {
  return `WITH RECURSIVE ctg_it AS (
    SELECT id, name, "parentId", 1 AS depth 
    FROM "CATEGORIES" WHERE ${condition}
    UNION ALL
    SELECT ctg.id, ctg.name, ctg."parentId", ctg_it.depth + 1 AS depth
    FROM "CATEGORIES" ctg 
    JOIN ctg_it ON ${!moveUp ? 'ctg."parentId" = ctg_it.id' : 'ctg.id = ctg_it."parentId"'}
  ) select * from ctg_it `;
}

exports.loadAll = async () => {
  const flatSet = await getConnection().query(categoryHierarchyQuery(false, '"parentId" IS NULL'));
  return buildHierarchy(flatSet);
};

exports.getAncestors = async (id) => {
  const flatSet = await getConnection().query(categoryHierarchyQuery(true, `id = ${id}`));
  const rvFlatSet = flatSet.reverse().map((item, i) => ({ ...item, depth: i + 1 }));
  buildHierarchy(rvFlatSet);
  return rvFlatSet[rvFlatSet.length - 1];
};

exports.getDescendants = async (id) => {
  const flatSet = await getConnection().query(categoryHierarchyQuery(false, `id = ${id}`));
  return buildHierarchy(flatSet)[0];
};
