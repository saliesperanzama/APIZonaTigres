const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const usersRouter = require('./routers/users.router');
const productsRouter = require('./routers/products.router');
const servicesRouter = require('./routers/services.router');
const studentsRouter = require('./routers/students.router');
require('./utils/mongoConnection');
const app = express();
const port = 3003;

//Solicitudes entrantes
app.use(morgan('dev'));

//Lo que aparece en la ruta /
app.get('/', (req, res) => {
  res.send('Bienvenido a Zona Tec API');
});

//Comprimir contenido si se puede
app.use(compression());

//Se permite leer y escribir JSON
app.use(express.json({ limit: '50mb' }));

//Asignar el archivo de rutas
app.use('/users',usersRouter);
app.use('/products',productsRouter);
app.use('/services',servicesRouter);
app.use('/students',studentsRouter);

//Iniciar servidor
app.listen(port, () => {
  console.log("Servidor iniciado en http://localhost:" +port);
});