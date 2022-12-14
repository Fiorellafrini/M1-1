'use strict'

function BinarioADecimal(num) {
//   // tu codigo aca
// numero binario ---> 1011  (1x 2** 3) + (0 * 2**2) + ( 1 * 2 ** 1) + (1*2**0)
//                               8      +      0     +       2       +     1   ----> 11
// 2 ** i x el valor pasado por parametro 
// como es string lo que pasan por parametro hay que usar split y reverse para que separe y lo de vuelta para empzar a iterar por la posicion ultima , ya que en la operacion de binario a decimal se requiere empezar con el exponente de mayor a menor 

num = num.split("").reverse()
let suma= 0
for (let i = 0; i < num.length; i++) {
  suma += num[i] * 2 ** i
}
return suma
}

console.log(BinarioADecimal('1011'))














// con for iterando normalmente de adelante hacia el ultimo 
// let suma = 0
// num= num.split("").reverse()

// for (let i = 0; i < num.length; i++) {
//   suma += num[i] * 2 ** i
// }
// return suma
// }





//   let acumulador = 0
//   num = num.split('').reverse()
//   for (let i = 0; i < num.length; i++) {
//     acumulador= acumulador + num[i] * 2 ** i
//   }
//   return acumulador
// }


// // con for para que empiece a iterar de atras para adelante
// let suma = 0
// num= num.split("").reverse()

// for (let i = num.length -1 ; i >= 0 ; i --) {
// suma += num[i] * 2 ** i

// }
// return suma
// }


function DecimalABinario(num) {
  // numero / 2 ----> el resultado lo vuelvo a dividir hasta que me de 0
  //            -----> el resto lo guardo (porque va a formar mi numero binario)
// cuando tenga el resultado lo invierto porque se lee de abajo para arriba 

let resultado = []
while (num > 0){
var modulo = num % 2
num = Math.floor(num / 2)
resultado.push(modulo)
}
return resultado.reverse().join("")
}


//   let binary = []
//    while (num > 0) {
//     let resto = num % 2
//     num = Math.floor(num/2)
//     binary.unshift(resto)
    
//   } 
//    binary= binary.join ('')
//    return binary
  
//  }
 



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}