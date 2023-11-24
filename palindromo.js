//Palabras palíndromas
//Implementar un método recursivo que determine si una palabra es palíndroma.
//Ayuda: Una palabra es palíndroma si su lectura es similar tanto de
//izquierda a derecha como viceversa.

let palabra = "neuquen";//palabra que quiero ver si es palindromo
let palabraPartida = "";//mitad de la palabra
let palabraPartida2 = "";// segunda mitad de la palabra
function espalindromo(palabra, i1, i2) {
    let medio = palabra.length / 2;
    if(i1 <= medio){
        palabraPartida+=palabra[i1];
        palabraPartida2+=palabra[i2];
        return espalindromo(palabra, i1+1, i2-1);
    }
    if(palabraPartida == palabraPartida2){
        return true;
    } else {
        return false;
    }
}
console.log(espalindromo(palabra, 0, palabra.length-1));