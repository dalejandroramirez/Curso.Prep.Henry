

function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    let mySet = new Set (arreglo);
    console.log(mySet.size);
    if (mySet.length === 1){
      return true;
    }
    else{
      return false;
    }
  } 

  console.log(todosIguales([20,20,20,20]));
  