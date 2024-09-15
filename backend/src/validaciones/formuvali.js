const validator = require('validator');

module.exports = {
  validateFormulario: function(data) {
    const errors = [];

    // Validación del nombre
    if (!data.nombre || !/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{3,50}$/.test(data.nombre)) {
      errors.push('El nombre debe contener solo letras, acentos y espacios, y tener entre 3 y 50 caracteres.');
    }

    // Validación del apellido
    if (!data.apellido || !/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{3,50}$/.test(data.apellido)) {
      errors.push('El apellido debe contener solo letras, acentos y espacios, y tener entre 3 y 50 caracteres.');
    }

    // Validación del email
    if (!data.correoElectronico || !validator.isEmail(data.correoElectronico)) {
      errors.push('Debe ser un correo electrónico válido.');
    }

    // Validación del teléfono
    if (!data.telefono || !/^\d{10}$/.test(data.telefono)) {
      errors.push('El teléfono debe contener exactamente 10 dígitos.');
    }

    // Validación de cédula
    if (!data.numeroCedula || !validateEcuadorianCedula(data.numeroCedula)) {
      errors.push('La cédula ecuatoriana es inválida.');
    }

    // Validación de fecha de nacimiento
    if (!data.fechaNacimiento || isNaN(Date.parse(data.fechaNacimiento))) {
      errors.push('La fecha de nacimiento debe ser una fecha válida.');
    }

    // Validación del estado civil
    if (!data.estadoCivil) {
      errors.push('El estado civil es un campo requerido.');
    }

    // Validación de colonia/barrio
    if (!data.coloniaBarrio) {
      errors.push('La colonia o barrio es un campo requerido.');
    }

    // Validación de ciudad
    if (!data.ciudad) {
      errors.push('La ciudad es un campo requerido.');
    }

    // Validación de estado/provincia
    if (!data.estadoProvincia) {
      errors.push('El estado o provincia es un campo requerido.');
    }

    // Validación de documentos adjuntos
    if (!data.documentosAdjuntos) {
      errors.push('Los documentos adjuntos son un campo requerido.');
    }

    return errors;
  }
};
