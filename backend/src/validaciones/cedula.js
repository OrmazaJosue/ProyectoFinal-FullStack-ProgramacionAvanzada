// validations/cedulaValidation.js

module.exports = {
    validateEcuadorianCedula: function (cedula) {
      // Verifica que la cédula tenga exactamente 10 dígitos
      if (cedula.length !== 10) {
        return false;
      }
  
      // Verifica el código de la región (los primeros dos dígitos)
      const digito_region = parseInt(cedula.substring(0, 2), 10);
      if (digito_region < 1 || digito_region > 24) {
        return false;
      }
  
      // Obtiene el último dígito de la cédula
      const ultimo_digito = parseInt(cedula.substring(9, 10), 10);
  
      // Suma los dígitos en las posiciones pares
      const pares = parseInt(cedula.substring(1, 2), 10) +
                    parseInt(cedula.substring(3, 4), 10) +
                    parseInt(cedula.substring(5, 6), 10) +
                    parseInt(cedula.substring(7, 8), 10);
  
      // Calcula la suma de los dígitos en las posiciones impares
      const getImparesSum = (cedula) => {
        let sum = 0;
        for (let i = 0; i < 9; i += 2) {
          let num = parseInt(cedula.charAt(i), 10) * 2;
          sum += num > 9 ? num - 9 : num;
        }
        return sum;
      };
  
      const impares = getImparesSum(cedula);
  
      // Calcula la suma total
      const suma_total = pares + impares;
  
      // Obtiene el primer dígito de la suma total
      const primer_digito_suma = parseInt(String(suma_total).substring(0, 1), 10);
  
      // Calcula la decena superior más cercana a la suma total
      const decena = (primer_digito_suma + 1) * 10;
  
      // Calcula el dígito validador
      const digito_validador = decena - suma_total === 10 ? 0 : decena - suma_total;
  
      // Verifica si el dígito validador coincide con el último dígito
      return digito_validador === ultimo_digito;
    }
  };