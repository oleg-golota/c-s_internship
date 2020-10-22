const console = require('console');
const { createConnection } = require('typeorm');
const express = require('express');
const http = require('http');
const ormconfig = require('./config/ormconfig');

const categoryCrudService = require('./db/crud/CategoryCrudService');
const productCrudService = require('./db/crud/ProductCrudService');
const productPhotoCrudService = require('./db/crud/ProductPhotoCrudService');
const productReviewCrudService = require('./db/crud/ProductReviewCrudService');
const reservationCrudService = require('./db/crud/ReservationCrudService');

const CategoryController = require('./controllers/CategoryController');
const ProductController = require('./controllers/ProductController');
const ProductPhotoController = require('./controllers/ProductPhotosController');
const ProductReviewController = require('./controllers/ProductReviewsController');
const ReservationController = require('./controllers/ReservationController');

const categoryRoutes = require('./routes/CategoryRoutes');
const productRoutes = require('./routes/ProductRoutes');
const productPhotoRoutes = require('./routes/ProductPhotoRoutes');
const productReviewRoutes = require('./routes/ProductReviewRoutes');
const reservationRoutes = require('./routes/ReservationRoutes');

async function runApp() {
  await createConnection(ormconfig);

  const app = express();
  app.use((req, res, next) => {
    console.log(`${req.ip}${req.url} ${req.method}`);
    next();
  });
  app.use(express.json());
  app.use('/api', categoryRoutes(new CategoryController(categoryCrudService)));
  app.use('/api', productRoutes(new ProductController(productCrudService)));
  app.use('/api', productPhotoRoutes(new ProductPhotoController(productPhotoCrudService)));
  app.use('/api', productReviewRoutes(new ProductReviewController(productReviewCrudService)));
  app.use('/api', reservationRoutes(new ReservationController(reservationCrudService)));
  http.createServer(app).listen(3001, () => console.log('Running...'));
}

runApp();
