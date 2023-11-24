//Inversa de cadenas
//Confeccionar un método recursivo que tome una cadena y ordene de manera
//inversa cada carácter encontrado.


let cadena = "Hola Mundo";
let resultado = invertirCadenaRecursiva(cadena);
function invertirCadenaRecursiva(cadena) {
   
    if (cadena.length <= 1) {
      return cadena;
    } else {
     
      return invertirCadenaRecursiva(cadena.substring(1)) + cadena[0];
    }
  }
  
  

  console.log(resultado); 