const { getRepository } = require('typeorm');
const fs = require('fs');
const ProductPhotoEntity = require('../entities/ProductPhotoEntity');
const ProductEntity = require('../entities/ProductEntity');

exports.loadByProduct = (prodId) => getRepository(ProductPhotoEntity).createQueryBuilder('pph')
  .where('pph.prodId = :prodId', { prodId }).getMany();

exports.addProductPhoto = (prodId, pathToPhoto) => getRepository(ProductPhotoEntity)
  .count({ productId: prodId })
  .then((count) => new Promise((resolve, reject) => {
    fs.readFile(pathToPhoto, 'base64', (err, data) => {
      if (!err) {
        getRepository(ProductEntity).createQueryBuilder().relation('photos').of(prodId)
          .add({ photo: data, isMain: !count })
          .then(resolve);
      } else {
        reject(err.message);
      }
    });
  }));
