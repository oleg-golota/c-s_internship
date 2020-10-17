const console = require('console');
const { createConnection } = require('typeorm');
const ormconfig = require('./ormconfig');
const CategoryEntity = require('./db/entities/CategoryEntity');
const ProductEntity = require('./db/entities/ProductEntity');
const { categories, products } = require('./ShopDbData');

async function initDatabase() {
  try {
    const connection = await createConnection(ormconfig);

    await connection.dropDatabase();
    await connection.synchronize();

    await connection.manager.save(CategoryEntity, categories);
    await connection.manager.save(ProductEntity, products);
  } catch (error) {
    console.log(`Runtime exception: ${error}`);
  }
}

initDatabase();
