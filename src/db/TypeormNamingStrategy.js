const { DefaultNamingStrategy, Table } = require('typeorm');

function getTableName(tableOrName) {
  return (tableOrName instanceof Table) ? tableOrName.name : tableOrName;
}
function shrinkAlias(alias) {
  // return alias.replace('division', 'd').replace('services', 's')
  //   .replace('paymentDestinationKeys', 'dk')
  //   .replace('paymentAttributes', 'ar')
  //   .replace('attributes', 'a');
  return alias;
}

class TypeormNamingStrategy extends DefaultNamingStrategy {}

TypeormNamingStrategy.prototype.primaryKeyName = function primaryKeyName(tableOrName) {
  return `PK_${getTableName(tableOrName)}`;
};

TypeormNamingStrategy.prototype.foreignKeyName = function foreignKeyName(tableOrName, columnNames) {
  return `FK_${getTableName(tableOrName)}_${columnNames[0]}`;
};

TypeormNamingStrategy.prototype.indexName = function indexName(tableOrName, columnNames) {
  return `IDX_${getTableName(tableOrName)}_${columnNames[0]}`;
};

TypeormNamingStrategy.prototype.uniqueConstraintName = function
uniqueConstraintName(tableOrName, columnNames) {
  return `UQ_${getTableName(tableOrName)}_${columnNames[0]}`;
};

TypeormNamingStrategy.prototype.eagerJoinRelationAlias = function
eagerJoinRelationAlias(alias, propertyPath) {
  return `${shrinkAlias(alias)}_${shrinkAlias(propertyPath).replace('.', '_')}`;
};

module.exports = TypeormNamingStrategy;
