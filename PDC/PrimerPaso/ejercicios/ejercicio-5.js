function realizarOperaciones(num1, num2) {
    const resultado = {};
  
    resultado.suma = num1 + num2;
    resultado.resta = num1 - num2;
    resultado.multiplicacion = num1 * num2;
    resultado.division = num1 / num2;
  
    console.log(resultado);
  }
  
  // Ejemplo de uso
  realizarOperaciones(5, 3);
  