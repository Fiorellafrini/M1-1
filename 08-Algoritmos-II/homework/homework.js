'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor 
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivot = array [0]
  let right = []
  let left = []
  if (array.length < 2) return array
  for (let i = 1; i < array.length; i++) {
   if ( array[i] <= pivot ){
    left.push(array[i])
   }else{
    if ( array[i] > pivot ){
      right.push(array[i])
    }
  }
}
return quickSort(left).concat(pivot).concat(quickSort(right));
}
console.log(quickSort([5,20,15,7,9,16 ,20]))


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
