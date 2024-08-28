   
   
   // creando la funcion encriptar
   function encriptar() {
    
   
    let texto1 = document.getElementById("texto").value;
    let MensajeParaTitulo = document.getElementById("titulo-mensaje");
    let escribirparrafo = document.getElementById("parrafo");
    let ilustrarcion = document.getElementById("muñeco");
    

    /*encirptador de las 
    vocacles a,e,i,o,u
    */
    let textoCifrado = texto1
      .replace(/e/gi, "jvr")
      .replace(/i/gi, "dfe")
      .replace(/a/gi, "xf")
      .replace(/o/gi, "otha")
      .replace(/u/gi, "uhk");
  
      //condicion de  de texto encriptado si introduce un texto
    if (texto1.length != 0) {

      document.getElementById("texto").value = textoCifrado;
      MensajeParaTitulo.textContent = "Felicidaes texto encriptado éxitosamente";
      escribirparrafo.textContent = "";
      ilustrarcion .src = "./imagenes/pngegg.png";
      //De lo contrario aparece el mensaje "Porfavor ingresa el texto que deseas encriptar"
    } else {
        ilustrarcion .src = "./imagenes/pngwing.com(3).png";
      MensajeParaTitulo.textContent = "Ningún mensaje fue encontrado";
      escribirparrafo.textContent = "Porfavor ingresa el texto que deseas encriptar";
      alert("Ooops! ingrese un texto por favor");
    }
  }
  //creando la funcion desencriptar
  function desencriptar() {
    let texto1 = document.getElementById("texto").value;
    let MensajeParaTitulo = document.getElementById("titulo-mensaje");
    let escribirparrafo = document.getElementById("parrafo");
    let ilustrarcion  = document.getElementById("muñeco");
  
    //Desepcritacion de las volaes a,e,i,o,u
    
    let textoCifrado = texto1
      .replace(/jvr/gi, "e")
      .replace(/dfe/gi, "i")
      .replace(/xf/gi, "a")
      .replace(/otha/gi, "o")
      .replace(/uhk/gi, "u");
     
      //condicon de mensaje desemcriptado
     //si  se encuentra texto entoces desemcripta
      if (texto1.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        MensajeParaTitulo.textContent = "Felicidades texto desencriptado éxitosamente";
        escribirparrafo.textContent = "";
        ilustrarcion .src = "./imagenes/pngwing.com(2).png";
        //De lo contrairo aparecera el mensaje
        //"Porfavor ingresa el texto que deseas desencriptar"
      } else {
        ilustrarcion .src = "./imagenes/pngwing.com(3).png";
        MensajeParaTitulo.textContent = "Ningún mensaje fue encontrado";
        escribirparrafo.textContent = "Porfavor ingresa el texto que deseas desencriptar";
        alert("Ooops! debes de ingresar un texto por favor");
      }
  }