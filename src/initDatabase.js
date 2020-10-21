const console = require('console');
const { createConnection } = require('typeorm');
const ormconfig = require('./ormconfig');
const CategoryEntity = require('./db/entities/CategoryEntity');
const ProductEntity = require('./db/entities/ProductEntity');
const { categories, products } = require('./ShopData');
const ctgCrudService = require('./db/crud/CategoryCrudService');

async function initDatabase() {
  try {
    const connection = await createConnection(ormconfig);

    await connection.dropDatabase();
    await connection.synchronize();

    await connection.manager.save(CategoryEntity, categories);

    const allCtg = await ctgCrudService.loadAll();
    products[0].categories = [allCtg[0].children[0].children[0]];
    products[1].categories = [allCtg[0].children[0].children[0]];
    products[2].categories = [allCtg[0].children[0].children[0]];
    products[3].categories = [allCtg[0].children[0].children[2], allCtg[0].children[1].children[4]];
    products[4].categories = [allCtg[1].children[0].children[1].children[0].children[4]];

    await connection.manager.save(ProductEntity, products);
  } catch (error) {
    console.log(`Runtime exception: ${error}`);
  }
}

initDatabase();
