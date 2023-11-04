//nota para agregar= un boton de borrar de solo 1, 

// Esto agrega a la pantalla de la calculadora el "valor" que toquemos
function agregar(valorCalculadora){
    document.getElementById("pantalla").value += valorCalculadora
}

// Esto borra todo
function borrar(){
    document.getElementById("pantalla").value = ""
}

// Esto borra de a 1
function borrarUnCaracter() {
    
    let campoDeEntrada = document.getElementById('pantalla');
    let valor = campoDeEntrada.value;
  
    if (valor.length > 0) {
     
      valor = valor.slice(0, -1);
  
      campoDeEntrada.value = valor;
    }
  }

  // Esto da el resultado de la operacion
  function resultado(){
   const valorPantalla = document.getElementById("pantalla").value;
   const resultado = eval(valorPantalla);
   document.getElementById("pantalla").value = resultado
}
  