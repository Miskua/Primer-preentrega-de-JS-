// Lista de opciones de ataque
const opcionesDeAtaque = [
    "Ataque a distancia",
    "Ataque cuerpo a cuerpo"
  ];
  
  // Lista de opciones para ataque a distancia
  const opcionesAtaqueDistancia = [
    "Mago",
    "Brujo"
  ];
  
  // Lista de opciones para ataque cuerpo a cuerpo
  const opcionesAtaqueCuerpoACuerpo = [
    "Paladín",
    "Caballero",
    "Asesino"
  ];
  
  // Función para mostrar la lista de opciones de ataque en un alert y permitir seleccionar una
  function seleccionarTipoDeAtaque() {
    // Crear la lista de opciones de ataque como una cadena
    let lista = "Opciones de Ataque:\n" + opcionesDeAtaque.map((opcion, index) => `${index + 1}. ${opcion}`).join("\n");
  
    // Mostrar la lista en un alert
    alert(lista);
  
    let seleccionValida = false;
    
    while (!seleccionValida) {
      // Pedir al usuario que ingrese el número del tipo de ataque que desea seleccionar
      let seleccion = prompt("Ingrese el número del tipo de ataque que desea seleccionar (o presione cancelar para salir):");
      
      if (seleccion === null) {
        alert("Saliendo...");
        return;
      }
      
      // Convertir la selección a número
      let indice = parseInt(seleccion);
      
      // Utilizar switch para manejar la selección
      switch (indice) {
        case 1:
          // Crear la lista de opciones de ataque a distancia como una cadena
          let listaDistancia = "Opciones de Ataque a Distancia:\n" + opcionesAtaqueDistancia.map((opcion, index) => `${index + 1}. ${opcion}`).join("\n");
          
          // Mostrar la lista en un alert
          alert(listaDistancia);
          
          // Validar la selección para ataque a distancia
          let seleccionDistanciaValida = false;
          while (!seleccionDistanciaValida) {
            let seleccionDistancia = prompt("Ingrese el número del tipo de atacante a distancia que desea seleccionar (o presione cancelar para salir):");
            
            if (seleccionDistancia === null) {
              alert("Saliendo...");
              return;
            }
            
            let indiceDistancia = parseInt(seleccionDistancia);
            
            if (indiceDistancia >= 1 && indiceDistancia <= opcionesAtaqueDistancia.length) {
              let eleccion = opcionesAtaqueDistancia[indiceDistancia - 1];
              let conforme = prompt(`Has seleccionado: ${eleccion}. ¿Estás conforme con tu elección? (sí/no)`);
              if (conforme === null) {
                alert("Saliendo...");
                return;
              } else if (conforme.toLowerCase() === 'sí' || conforme.toLowerCase() === 'si') {
                alert(`Has confirmado tu elección: ${eleccion}`);
                seleccionDistanciaValida = true;
                seleccionValida = true;
              } else {
                alert("Por favor, selecciona nuevamente.");
              }
            } else {
              alert("Selección no válida. Por favor, ingrese un número válido.");
            }
          }
          break;
        case 2:
          // Crear la lista de opciones de ataque cuerpo a cuerpo como una cadena
          let listaCuerpoACuerpo = "Opciones de Ataque Cuerpo a Cuerpo:\n" + opcionesAtaqueCuerpoACuerpo.map((opcion, index) => `${index + 1}. ${opcion}`).join("\n");
          
          // Mostrar la lista en un alert
          alert(listaCuerpoACuerpo);
          
          // Validar la selección para ataque cuerpo a cuerpo
          let seleccionCuerpoACuerpoValida = false;
          while (!seleccionCuerpoACuerpoValida) {
            let seleccionCuerpoACuerpo = prompt("Ingrese el número del tipo de atacante cuerpo a cuerpo que desea seleccionar (o presione cancelar para salir):");
            
            if (seleccionCuerpoACuerpo === null) {
              alert("Saliendo...");
              return;
            }
            
            let indiceCuerpoACuerpo = parseInt(seleccionCuerpoACuerpo);
            
            if (indiceCuerpoACuerpo >= 1 && indiceCuerpoACuerpo <= opcionesAtaqueCuerpoACuerpo.length) {
              let eleccion = opcionesAtaqueCuerpoACuerpo[indiceCuerpoACuerpo - 1];
              let conforme = prompt(`Has seleccionado: ${eleccion}. ¿Estás conforme con tu elección? (sí/no)`);
              if (conforme === null) {
                alert("Saliendo...");
                return;
              } else if (conforme.toLowerCase() === 'sí' || conforme.toLowerCase() === 'si') {
                alert(`Has confirmado tu elección: ${eleccion}`);
                seleccionCuerpoACuerpoValida = true;
                seleccionValida = true;
              } else {
                alert("Por favor, selecciona nuevamente.");
              }
            } else {
              alert("Selección no válida. Por favor, ingrese un número válido.");
            }
          }
          break;
        default:
          alert("Selección no válida. Por favor, ingrese un número válido.");
      }
    }
  }
  seleccionarTipoDeAtaque();
  