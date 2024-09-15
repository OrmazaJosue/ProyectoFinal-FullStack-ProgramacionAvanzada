const { getDB } = require('../config/conexion');
const { ObjectId } = require('mongodb');
const Formulario = require('../documentos/formulario'); // Nota: Usar minúsculas para la extensión del archivo
const generateFormularioExitoEmail = require('../emails/formularioExitoEmail'); // Importar la función del email
const { sendMail } = require('../config/mailConfig'); // Importar la función para enviar correos

exports.createFormulario = async (req, res) => {
  const { nombre, numeroCedula, correoElectronico } = req.body;

  const errors = validateFormulario(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const db = getDB();
    const formulario = new Formulario(req.body);

    // Enviar correo al crear el formulario
    try {
      const emailHTML = generateFormularioExitoEmail(nombre, numeroCedula); // Generar el HTML del correo
      await sendMail(correoElectronico, 'Formulario Enviado con Éxito', '', emailHTML); // Enviar el correo con HTML
    } catch (err) {
      console.error('Error al enviar el correo:', err);
      return res.status(500).send('Error al enviar el correo');
    }

    await db.collection('formulario').insertOne(formulario);
    res.status(201).json(formulario);
  } catch (err) {
    console.error('Error al crear el formulario:', err);
    res.status(500).send('Server Error');
  }
};


exports.getAllFormularios = async (req, res) => {
  try {
    const db = getDB();
    const formularios = await db.collection('formulario').find().toArray();
    res.json(formularios);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getFormularioById = async (req, res) => {
  const { id } = req.params;
  try {
    const db = getDB();
    const formulario = await db.collection('formulario').findOne({ _id: new ObjectId(id) });

    if (!formulario) {
      return res.status(404).json({ msg: 'Formulario not found' });
    }

    res.json(formulario);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.updateFormulario = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, fechaNacimiento, numeroCedula, estadoCivil, coloniaBarrio, ciudad, estadoProvincia, telefono, correoElectronico, documentosAdjuntos, captchaResponse } = req.body;

  try {
    const db = getDB();
    const result = await db.collection('formulario').updateOne(
      { _id: new ObjectId(id) },
      { $set: { nombre, apellido, fechaNacimiento, numeroCedula, estadoCivil, coloniaBarrio, ciudad, estadoProvincia, telefono, correoElectronico, documentosAdjuntos, captchaResponse } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ msg: 'Formulario not found or data is the same' });
    }

    res.json({ msg: 'Formulario updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.deleteFormulario = async (req, res) => {
  const { id } = req.params;

  try {
    const db = getDB();
    const result = await db.collection('formulario').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: 'Formulario not found' });
    }

    res.json({ msg: 'Formulario deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Función de validación del formulario
const validateFormulario = (data) => {
  const errors = [];
  // Aquí puedes agregar tus validaciones
  return errors;
};

// Función de enviar correo
const enviarCorreo = async (numeroCedula, correoElectronico, tipo) => {
  // Implementa la lógica para enviar el correo
};
