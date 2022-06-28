// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
    return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const n = array.length;
  return array[n-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
  array[i] += 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let caracter = "";
  N = palabras.length;
  for (let id_palabra = 0; id_palabra < N-1; id_palabra++) {
	caracter = caracter + palabras[id_palabra]+" ";
  }
  caracter = caracter + palabras[N-1];
  return caracter
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)){
	  return true;
  }
  else{
	  return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sum = 0;
  for (let index = 0; index < numeros.length; index++) {
     sum += numeros[index];
  }
  return sum
  
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let N = resultadosTest.length;
  return agregarNumeros(resultadosTest)/N;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let maximo = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > maximo){
      maximo = numeros[i];
    }
  }
  return maximo;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments[0] == undefined){
    return 0;
  }
  else if (arguments[1] == undefined) {
    return arguments[0];
  } 
  else {
    let r = arguments[0];
    let i = 0;
    while (arguments[i+1] !== undefined) {
      i += 1;
      r = r*arguments[i];
    }
    return r
    }
  }




function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cont = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > 18){
      cont += 1;
    }
  }
  return cont
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if ([2,3,4,5,6].includes(numeroDeDia)) {
    return "Es dia Laboral"
  }
  else{
    return "Es fin de semana"
  }
} 

function empiezaConNueve2(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString()
  if(num.charAt(0) === "9"){
    return true
  }
  return false
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  dig = 1;
  while ((n / dig) >=1){
    dig *= 10;
  }
  dig = dig/10;
  if (Math.trunc(n / dig) == 9){
      return true;
  }
  else{
    return false;
  }
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let mySet = new Set (arreglo);
  if (mySet.size === 1){
    return true;
  }
  else{
    return false;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevo_array = [];
  let meses = ["Enero","Marzo","Noviembre"];
  for(let i = 0 ; i < array.length ; i++){
    if (meses.includes(array[i]) && !nuevo_array.includes(array[i])){
      nuevo_array.push(array[i]); 
    }
  }
  if (nuevo_array.length !== 3 ){
    return("No se encontraron los meses pedidos");
  }
  else{
    return nuevo_array;
  }
}


function mayorACien(array) {
  let newList = array.filter(function index(i) {
    return i>100;
  })
  return newList;
 //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array=[];
  for (let i = 0; i < 10; i++) {
      numero += 2;
      array.push(numero)
      if( i+1 === agregarNumeros(array)){
        break;
      }
      if (i === 9){
        return array;
      }
  } 
  return "Se interrumpió la ejecución"
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array=[];
  for (let i = 0; i < 10; i++) {
      if( i+1 === 5){
        continue;
      }
      numero += 2;
      array.push(numero);
      if (i === 9){
        return array;
      }
  } 
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
