// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
    if(x == y){
        return x}
    else if (x > y) {
        return x
    }
    else{
        return y
    }
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
}

function mayoriaDeEdad(edad) {
    if (edad>= 18){
        return "Allowed"
    }
    else{
        return "Not allowed"
    }
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
    if (status == 1){
        return "Online"
    }
    else if (status == 2){
        return "Away"
    }
    else{
        return "Offline"
    }
}


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
    if (idioma == "aleman"){
        return "Guten Tag!"
    }
    else if (idioma=="mandarin"){
        return "Ni Hao!"
    }
    else if (idioma=="ingles"){
        return "Hello!"
    }    
    else{
        return "Hola!"
    }

}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
    if(color == "blue"){
        return "This is blue"}
    else if(color == "red"){
        return "This is red"

    }
    else if(color == "green"){
        return "This is green"
    }
    else if(color == "orange"){
        return "This is orange"
    }
    else {
        return "Color not found"
    }
}

function esDiezOCinco(numero) {
    if ([10,5].includes(numero)){
        return true
    }
    else{
        return false
    }

  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(20 < numero & numero < 50 ){
      return true
  }
  else{
      return false
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (Math.floor(numero)==numero){
      return true
  }
  else{
      return false
  }
}

function fizzBuzz(numero) {
    if (numero % 3 === 0  & numero % 5 === 0){
        return "fizzbuzz"
    }
    else if (numero % 3 === 0){
        return "fizz"
    }
    else if (numero % 5 === 0){
        return "buzz"
    } 
    else {return numero}   
    
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if([num1,num2,num3].includes(0)){
    return "Error";
  }
  else if(Math.min(num1,num2,num3 < 0)){
    return "Hay negativos";
  }
  else if (num1 > Math.max(num2,num3) && num1 > 0){
    return "Número 1 es mayor y positivo";
  }

  else if (num3 > Math.max(num1 , num2)){ 
    num3 += 1 ;
    return num3 ;
  }
  else{
    return false ;
  }
}

function esPrimo(numero) {
    if( numero < 2) {
        return false;
    } 
    else if(numero === 2) {
        return true;
    }
    N = Math.sqrt(numero)
    for (var index = 2; index <= N ; index++) {
        if(numero % index === 0){ 
            return false;
        };
    };
  return true  ; 
  
  
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
    switch (valor) {
        case true:
            return "Soy verdadero";
        case false:
            return "Soy falso";
    }
}

function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    let Z6 = []
    for (let i = 0; i <= 60 ; i=i+6) {
        Z6.push(i)
    };
    return Z6;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
    const N = numero / 100;
  if (1<= N &&  N < 10 ) {
      return true ;
  } 
  else{
      return false ;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let cont = 0;
  do { 
    cont += 1;
    numero += 5;
  } while (cont < 8);
  
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
