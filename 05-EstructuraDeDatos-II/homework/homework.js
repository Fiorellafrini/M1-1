"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/


function LinkedList (){
  this.head = null
}

function Node (value){
  this.value = value
  this.next = null
}

LinkedList.prototype.add = function (value){
const newNode = new Node (value)
let current = this.head
if (!current){
  this.head= newNode
  return value
}
while(current.next){
  current = current.next
}
current.next = newNode
}


LinkedList.prototype.remove = function (value){
  let current=this.head     // ESTO ES SI LA LISTA ESTA VACIA //hago una variable movil que va a llamarse current y la ubico en la cabeza . Si current es null, retorno null 
    if (current === null) 
      return null
      
    if (!current.next){   // ESTO ES SI LA LISTA TIENE SOLO HEAD // Si no tengo nada en el seguiente de current , me creo una variable para guardar el valor de la cabeza y poder borrarla asignandole el valor de null
      let guardo= this.head.value
      this.head = null
      
      return guardo
    
    }
    while (current.next.next){  // ESTO ES SI LA LISTA NO ESTA VACIAY TIENE MAS DE UN NODO // PREGUNTA SI HAY SIGUIETE DEL SIGUIENTE
      current=current.next 
      }  // Y QUE SE PONGA EN EL ANTERIOR DEL SIGUIENTE PARA PODER ELIMINATLO
      let guardo2= current.next.value // GUARDO EL VALOR EN UNA VARIABLE PARA DESPUES SACARLO
      current.next= null
     
      return guardo2
    }

LinkedList.prototype.search = function (arg){

   let current=this.head


    while(current !== null){
    if (typeof arg === "function"){   // SI EL TIPO DE DATO DE PARAMETRO ES UNA FUNCION
      if(arg(current.value))    // ENTONCES ACCEDO AL VALOR DE PARAMETRO EN MI CURRENT
      return current.value
    } else{
      if (arg === current.value)
     return current.value
    }
    current = current.next
  }
  return null;
  }









// function LinkedList() {
//   this.head = null
//   this.size = 0
// }

// function Node(value) {
//   this.value= value
//   this.next= null
// }
// LinkedList.prototype.add = function (value){
//   const nuevoNodo= new Node (value)
//   let current=this.head
//   if (!current){ //  PREGUNTA SI HAY ALGO EN CURRENT
//     this.head=nuevoNodo
//     this.size++
//    return nuevoNodo
//   }


//   while (current.next){ //MIENTRAS TENGA DONDE MOVERSE ME MUEVO
//     current=current.next
//   }
//   current.next=nuevoNodo
//   this.size++
// }
// LinkedList.prototype.remove = function (){
//   let current=this.head
//   if (current === null) 
//     return null
//   if (!current.next){
//     let guardo= this.head.value
//     this.head = null
//     this.size--
//     return guardo
  
//   }
//   while (current.next.next){ // PREGUNTA SI HAY SIGUIETE DEL SIGUIENTE
//     current=current.next 
//     }  // Y QUE SE PONGA EN EL ANTERIOR DEL SIGUIENTE PARA PODER ELIMINATLO
//     let guardo2= current.next.value // GUARDO EL VALOR EN UNA VARIABLE PARA DESPUES SACARLO
//     current.next= null
//     this.size--
//     return guardo2
//   }


// LinkedList.prototype.search = function (parametro){
//   let current=this.head

//   while(current){

//   if (typeof parametro === "function"){   // SI EL TIPO DE DATO DE PARAMETRO ES UNA FUNCION
//     if(parametro(current.value))    // ENTONCES ACCEDO AL VALOR DE PARAMETRO EN MI CURRENT
//     return current.value
//   } else{
//     if (parametro === current.value)
//    return current.value
//   }
//   current = current.next
// }
// return null;
// }


// const nuevoNodo= new LinkedList()

// nuevoNodo.add(10)
// nuevoNodo.add(5)
// nuevoNodo.add(7)
// nuevoNodo.remove()
// nuevoNodo.remove()





/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
}

//       this.tabla = new Array(127);
//       this.tamano = 0;
//     }
  
//     _hash(llave) {
//       let hash = 0;
//       for (let i = 0; i < llave.length; i++) {
//         hash += llave.charCodeAt(i);
//       }
//       return hash % this.tabla.length;
//     }
  
//     set(llave, valor) {
//       const indice = this._hash(llave);
//       this.tabla[indice] = [llave, valor];
//       this.tamano++;
//     }
  
//     get(llave) {
//       const objetivo = this._hash(key);
//       return this.table[objetivo];
//     }
  

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
