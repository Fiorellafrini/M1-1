"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

  BinarySearchTree.prototype.insert = function(value){
    let nodo= new BinarySearchTree (value)
  if (value < this.value){
  if(this.left){
   this.left.insert(value)
      
    }else{
      return this.left = nodo
      // this.left=new BinarySearchTree (value)
      // return value
    }
  }
  if (value > this.value){
      if(this.right){
        return this.right.insert(value)
        
      }else{
        return this.right = nodo
        // this.right = new BinarySearchTree (value)
        // return value
      }
    }
  return false; 
}

const miArbol = new BinarySearchTree(7)
console.log(miArbol)
miArbol.insert(5)
miArbol.insert(10)
console.log(miArbol)
miArbol.insert(10)




BinarySearchTree.prototype.size = function(){
let contador = 0
contador ++

if (this.left) {
contador += this.left.size()
}
if (this.right) {
 contador += this.right.size()
}
return contador
}


// - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol


BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) return true;

  if (this.left){
    if (this.left.contains (value)) return true;
  }
 
  if (this.right){
    if (this.right.contains (value)) return true;

  }
  return false;
}

// if (this.value === value) return true;

//   if (value < this.value && this.left){
//     if (this.left.contains (value)) return true;
//   }
 
//   if (value > this.value && this.right){
//     if (this.right.contains (value)) return true;

//   }
//   return false;
// }


// - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.



BinarySearchTree.prototype.depthFirstForEach = function(cb,type){
switch (type) {
  case "post-order":
    if (this.left) this.left.depthFirstForEach(cb,type)
    if (this.right) this.right.depthFirstForEach(cb,type)
    cb (this.value) 
    
  
    break;

  case "pre-order":
    cb (this.value)
    if (this.left) this.left.depthFirstForEach(cb,type)
    if (this.right) this.right.depthFirstForEach(cb,type)
    
    break;

  default: 
  if (this.left) this.left.depthFirstForEach(cb,type)
  cb (this.value) 
  if (this.right) this.right.depthFirstForEach(cb,type)

    break;
}
  
 
}









// switch (type) {
//   case "pre-order":
//     cb(this.value)
//     if(this.left) this.left.depthFirstForEach (cb,type)
//     if(this.right) this.right.depthFirstForEach (cb,type)
//     break;
//     case "post-order":
//       if(this.left) this.left.depthFirstForEach (cb,type)
//     if(this.right) this.right.depthFirstForEach (cb,type)
//     cb(this.value)
//     break;

//   default:
//     if(this.left) this.left.depthFirstForEach (cb,type)
//     cb(this.value)
//     if(this.right) this.right.depthFirstForEach (cb,type)
//     break;
// }
// }
  

BinarySearchTree.prototype.breadthFirstForEach = function(cb, hijos){


  if (! hijos)
  var hijos = []

  cb(this.value)

  if(this.left)
   hijos.push (this.left)

   if(this.right)
   hijos.push(this.right)

   if (hijos.length)
   hijos.shift().breadthFirstForEach(cb, hijos)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
