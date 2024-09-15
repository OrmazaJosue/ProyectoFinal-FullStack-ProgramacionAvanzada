class Formulario {
  constructor(
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
    captchaResponse = null // Valor por defecto de null
  ) {
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
  }
}

// Exportar la clase para que pueda ser utilizada en otros módulos
module.exports = Formulario;
