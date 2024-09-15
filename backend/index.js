require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const cors = require('cors');
const { conexionBDD } = require('./src/config/conexion');
const Rutas = require('./src/routes/Rutas');
const cargar = require('./src/routes/cargarRuta');
const AppEnv = require('./src/config/appEnv');

const appEnv = new AppEnv();

const app = express();

// Aumentar el límite del tamaño del payload
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());  // Asegúrate de que CORS esté habilitado

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = appEnv.get('PORT') || 3001;

// Depuración de variables de entorno
console.log('MONGO_URL_ATLAS:', process.env.MONGO_URL_ATLAS);
console.log('MONGO_URL_LOCAL:', process.env.MONGO_URL_LOCAL);

// Conectar a la base de datos
conexionBDD().then(() => {
  // Definir las rutas
  app.use('/api/formulario', Rutas);
  app.use('/api/cargar', cargar);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});