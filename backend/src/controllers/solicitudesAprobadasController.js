const { getDB } = require('../config/conexion');
const { ObjectId } = require('mongodb');

// Crear una solicitud aprobada
exports.createSolicitudAprobada = async (req, res) => {
  const { nombre, apellido, numeroCedula, correoElectronico, fechaNacimiento, estadoCivil, ciudad } = req.body;

  try {
    const db = getDB();
    const solicitudAprobada = {
      nombre,
      apellido,
      numeroCedula,
      correoElectronico,
      fechaNacimiento,
      estadoCivil,
      ciudad,
      estadoRegistro: 'aprobado' // Se establece el estado por defecto
    };

    const result = await db.collection('solicitudesAprobadas').insertOne(solicitudAprobada);
    res.status(201).json(result.ops[0]); // Devolver el documento creado
  } catch (err) {
    console.error('Error al crear la solicitud aprobada:', err);
    res.status(500).send('Server Error');
  }
};

// Obtener todas las solicitudes aprobadas
exports.getAllSolicitudesAprobadas = async (req, res) => {
  try {
    const db = getDB();
    const solicitudesAprobadas = await db.collection('solicitudesAprobadas').find().toArray();
    res.json(solicitudesAprobadas);
  } catch (err) {
    console.error('Error al obtener las solicitudes aprobadas:', err);
    res.status(500).send('Server Error');
  }
};

// Obtener una solicitud aprobada por ID
exports.getSolicitudAprobadaById = async (req, res) => {
  const { id } = req.params;

  try {
    const db = getDB();
    const solicitudAprobada = await db.collection('solicitudesAprobadas').findOne({ _id: new ObjectId(id) });

    if (!solicitudAprobada) {
      return res.status(404).json({ msg: 'Solicitud aprobada no encontrada' });
    }

    res.json(solicitudAprobada);
  } catch (err) {
    console.error('Error al obtener la solicitud aprobada:', err);
    res.status(500).send('Server Error');
  }
};

// Actualizar una solicitud aprobada por ID
exports.updateSolicitudAprobada = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, numeroCedula, correoElectronico, estadoCivil, ciudad } = req.body;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send('ID inválido');
  }

  try {
    const db = getDB();
    const result = await db.collection('solicitudesAprobadas').updateOne(
      { _id: new ObjectId(id) },
      { $set: { nombre, apellido, numeroCedula, correoElectronico, estadoCivil, ciudad } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ msg: 'Solicitud aprobada no encontrada o los datos son los mismos' });
    }

    res.json({ msg: 'Solicitud aprobada actualizada correctamente' });
  } catch (err) {
    console.error('Error al actualizar la solicitud aprobada:', err);
    res.status(500).send('Server Error');
  }
};

// Eliminar una solicitud aprobada por ID
exports.deleteSolicitudAprobada = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send('ID inválido');
  }

  try {
    const db = getDB();
    const result = await db.collection('solicitudesAprobadas').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: 'Solicitud aprobada no encontrada' });
    }

    res.json({ msg: 'Solicitud aprobada eliminada correctamente' });
  } catch (err) {
    console.error('Error al eliminar la solicitud aprobada:', err);
    res.status(500).send('Server Error');
  }
};
