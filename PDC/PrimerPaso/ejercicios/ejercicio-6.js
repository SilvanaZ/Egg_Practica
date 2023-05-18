const personas = [
    {
      nombre: "Nelida",
      edad: 75,
      ciudad: "San Cayetano"
    },
    {
      nombre: "Damian",
      edad: 32,
      ciudad: "Jose C. Paz"
    },
    {
      nombre: "Javier",
      edad: 45,
      ciudad: "Barracas"
    },
    {
        nombre: "Silvana",
        edad:34,
        ciudad: "Guernica",
    }
  ];
  
  function crearMensajesDePresentacion(personas) {
    const mensajes = [];
  
    personas.forEach(persona => {
      const mensaje = `Mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`;
      mensajes.push(mensaje);
    });
  
    return mensajes;
  }
  
  const mensajesDePresentacion = crearMensajesDePresentacion(personas);
  
  mensajesDePresentacion.forEach(mensaje => {
    console.log(mensaje);
  });
  