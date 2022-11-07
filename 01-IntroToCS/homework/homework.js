'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // sum = 0
  // var numReverse = num.split('').reverse().join('')


  // for (i = 0; i < numReverse.length; i++) {
  //   sum = sum + numReverse[i] * 2 ** numReverse.length - 1;
  // }
  // return sum;

  let sum = 0;
  var numReverse = num.split('').reverse().join('')

  for (let i = 0; i < numReverse.length; i++) {
     sum = sum +numReverse[i] * 2 ** i;
  }
  return sum;
  
}


function DecimalABinario(num) {
  // tu codigo aca
  let binary = []

  while (num > 0) {
    let resto = num % 2
    binary.unshift(resto)
    num = Math.floor(num/2)
    
  } 
  binary= binary.join ('');
  return binary
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}