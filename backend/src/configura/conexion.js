const { MongoClient } = require('mongodb');

let db;

// Elige la URL correcta según tus necesidades
const mongoUrl = process.env.MONGO_URL_ATLAS || process.env.MONGO_URL_LOCAL;

const conexionBDD = async () => {
  try {
    console.log('Connecting to MongoDB...');
    console.log('MONGO_URL:', mongoUrl); // Verifica que mongoUrl esté obteniendo el valor correcto

    const client = new MongoClient(mongoUrl);

    await client.connect();
    db = client.db();
    console.log('Conexión Exitosa');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { conexionBDD, getDB };
