'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array= [1]
  var i = 2
  while(num>1)
  if ( num % i === 0){
    array.push(i)
    num = num/i
  }else{
    i++
  }
  return array 
}

 
















//  let  array = [1] // guardamos el 1 porque siempre un numero va a ser divisible por 1
//   let i = 2       //  Por lo tanto hacemosque empiece en 2
//   while( num > 1 ){  // o (num !== 1) o ( num !== 1 > -1) // MIENTRAS EL NUMERO SEA MAYOR A 1
//     if ( num % i === 0 ){   // y que el modulo del numero de de resto 0
//       array.push(i)        // guardamos el divisor en el array
//       num = num/i          // y seguimos diviendo por ese divisor hasta que se pueda
//     }else {                 // si no se puede seguir con ese divisor 
//         i++                 // aumentamos 1
//     }
//   }
//   return array
// }


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Tengo una lista de numeros  => array
  // Recorrer la lista de numeros uno por uno => for 
  // Formo burbujas de un numero con el siguiente y me pregunto si estan ordenadas
  // Si estan ordenadas genial, sino las ordeno
  // Hago esto hasta llegar al final
  // Me fijo si mi lista esta ordenada , sino la sigo ordenando
  // hasta que este totalmente ordenada = mientras este desordenado

 var desordenado = true
  while (desordenado){
  desordenado= false
  for (let i = 0; i < array.length; i++) {
    
    if ( array[i] > array [i+1]){
     var aux = array[i]
     array[i] = array[i+1]
     array[i+1] = aux
     desordenado = true
    }
  }
}
  return array
}
    
 
  console.log(bubbleSort([5,1,7,3,9,2]))
  






















  // let cambio = true

  // while ( cambio){
  //   cambio = false

  //  for (let i = 0; i < array.length; i++){
  //     if (array[i] > array[i + 1] ){
  //       let aux = array[i]
  //       array[i]= array[i + 1]
  //       array[i + 1] = aux
  //       cambio = true
  //     }
      
  //   }
  // }
  //   return array
  // }


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Tengo una lista de numeros 
  //recorro la lista
  //Tenes que sacar vada numero y compararlo con los de atras
  // Si el de atras es mayor , lo empujo hacia adelante
  // Lo soltas cuando llegas al principio de la lista o cuando el valor anterior es mas chico
  // Lo voy tirando hacia atrasmientras no este en el principio ni tenga uno menos atras 
  // Quiero hacer esto una vez por cada numero de la lista
  // (El primer numero no me interesa que viaje )  
  
  for ( let i= 1; i< array.length; i++ ){
    let j = i - 1   // j es la variable que se va a ir moviendo para atras 
    let aux = array[i]   // i es la posicion actual de comparacion

   while ( j >=0 && array [j] > aux){  // array [j] tiene que ser mayor a a array [i] 
     array[j + 1] = array[j]  
       j --                            //   para que se mueva para atras   
   }
  array [j + 1] = aux
}
return array
}
 

console.log(insertionSort([5,1,7,3,9,2]))








  
//   for ( let i= 1; i< array.length; i++ ){
//     let j = i - 1   // j es la variable que se va a ir moviendo para atras 
//     let aux = array[i]   // i es la posicion actual de comparacion

//    while ( j >=0 && array [j] > aux){  // array [j] tiene que ser mayor a a array [i] 
//      array[j + 1] = array[j]  
//        j --                            //   para que se mueva para atras   
//    }
//   array [j + 1] = aux
// }
// return array
// }


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Recorremos toda la lista , vamos guardando el menor de todos los valores que recorrimos
  // Intercambiamos el menor de todos por el primer desordenado 


 for (let i = 0; i < array.length ; i++) {
  let min = i
  for (let j = i + 1; j < array.length; j++) {
   if (array[j] < array[min]) 
   min =j
  }
  if (i !== min ){
    let aux = array [i]
    array[i] = array[min]
    array[min] = aux
  }
}
return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
