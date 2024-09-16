class Formulario {
  constructor({
    nombre,
    apellido,
    fechaNacimiento,
    numeroCedula,
    estadoCivil,
    coloniaBarrio,
    ciudad,
    estadoProvincia,
    telefono,
    correoElectronico,
    documentosAdjuntos,
    captchaResponse,
    estadoRegistro = 'pendiente' // Valor por defecto "pendiente"
  }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.numeroCedula = numeroCedula;
    this.estadoCivil = estadoCivil;
    this.coloniaBarrio = coloniaBarrio;
    this.ciudad = ciudad;
    this.estadoProvincia = estadoProvincia;
    this.telefono = telefono;
    this.correoElectronico = correoElectronico;
    this.documentosAdjuntos = documentosAdjuntos;
    this.captchaResponse = captchaResponse;
    this.estadoRegistro = estadoRegistro; // Campo de estado del registro
  }
}

module.exports = Formulario;
