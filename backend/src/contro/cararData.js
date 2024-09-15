const { getDB } = require('../configura/conexion');
const { ObjectId } = require('mongodb');

exports.getAllSolicitantes = async (req, res) => {
  try {
    const db = getDB();
    const solicitantes = await db.collection('Solicitante').find().toArray();
    res.json(solicitantes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getSolicitanteById = async (req, res) => {
  const { id } = req.params;
  try {
    const db = getDB();
    const solicitante = await db.collection('Solicitante').findOne({ _id: new ObjectId(id) });

    if (!solicitante) {
      return res.status(404).json({ msg: 'Solicitante not found' });
    }

    res.json(solicitante);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getSolicitantesByEstado = async (req, res) => {
  const { estado } = req.params;
  try {
    const db = getDB();
    const solicitantes = await db.collection('Solicitante').find({ status: estado }).toArray();

    if (solicitantes.length === 0) {
      return res.status(404).json({ msg: 'No solicitantes found for the given status' });
    }

    res.json(solicitantes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.updateSolicitanteStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const db = getDB();
    const result = await db.collection('Solicitante').updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: status } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ msg: 'Solicitante not found or status is the same' });
    }

    res.json({ msg: 'Solicitante status updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
