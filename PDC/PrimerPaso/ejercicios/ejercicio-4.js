function invertirString(cadena) {
    let resultado = "";
    const palabras = cadena.split(" ");
  
    for (let i = palabras.length - 1; i >= 0; i--) {
      const palabraInvertida = palabras[i].split("").reverse().join("");
      resultado += palabraInvertida + " ";
    }
  
    console.log(resultado.trim());
  }
  
  // Ejemplo de uso
  invertirString("Hola mundo");
  