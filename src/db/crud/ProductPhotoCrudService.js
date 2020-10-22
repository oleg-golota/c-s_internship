const { getRepository } = require('typeorm');
const fs = require('fs');
const ProductPhotoEntity = require('../entities/ProductPhotoEntity');

exports.loadByProduct = (prodId) => getRepository(ProductPhotoEntity).createQueryBuilder('pph')
  .where('pph.prodId = :prodId', { prodId }).getMany();

exports.addProductPhoto = async (prodId, pathToPhoto) => {
  const shalowProduct = { id: prodId };
  const photoCounter = await getRepository(ProductPhotoEntity).count({ product: shalowProduct });
  return new Promise((resolve, reject) => {
    fs.readFile(pathToPhoto, 'base64', (err, data) => {
      if (!err) {
        getRepository(ProductPhotoEntity)
          .save({ photo: data, isMain: !photoCounter, product: shalowProduct })
          .then(resolve, reject);
      } else {
        reject(err.message);
      }
    });
  });
};
