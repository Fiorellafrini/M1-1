
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); //  8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c; //10
    var x = 5; // 5
  }
  f(a,b,c);
  console.log(b); // 9 ( como se ejecuta fuera de f es el valor original de b que se pasa por parametro al principio en c)
} // termina la ejecucion de c
c(8,9,10);
console.log(b); // 10 ( como al principio antes de la funcion c ) 
console.log(x); // 1
```

```javascript
console.log(bar); // undifine 
console.log(baz); // is not defined ( no accdede porque no esta declarado con var ) 
foo();
function foo() { console.log('Hola!'); } // se ejecuta igual porque la funcion hace hosting ( se pasan enetritas arriba ) se puede llamar antes de definirlas !!!
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); // "Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // "Franco"
   }
})();
console.log(instructor); // "Tony"
```

```javascript
var instructor = "Tony"; 
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // "The Flash";   NO ENTIENDO ( ES POR LET ???)
    console.log(pm); // "Reverse Flash";
}
console.log(instructor); //"The Flash";
console.log(pm); // "Franco"; ( el let tiene un alcance mayory solo existe en el contexto de las llaves , fuerda de eso no existe)
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2 -----> lo convierte a numero y divide 
"2" * "3" // 6 -----> lo convierte a numero para realizar la operacion 
4 + 5 + "px" // 49px ( empieza de izquierda a derecha, y primero hace la suma y despues concatena el string )
"$" + 4 + 5 // $45 ( de izquierda a derecha , concatena todo en string )
"4" - 2 // 2 (convierte el numero en un str)
"4px" - 2 // Nan 
7 / 0 // infinito 
{}[0] // undifine ( esta preguntando por una propiedad que no existe) ( no exite porque no puede ser posicion cero porque no se habla de posiciones en el objeto)
parseInt("09") // 9 ( lo convierte a entero)
5 && 2 // 2 ( comolos dos son true sigue y se queda con el ultimo)
2 && 5 // 5 ( como el anterior , se queda con el ultimo true) (si fuese false el primero no sigue)
5 || 0 // 5 (necesita que uno sea verdadero)
0 || 5 // 5 
[3]+[3]-[10] // 23 ( primero concateno el string 33 y despues paso a numero y resto 10 )
3>2>1 // false 
[] == ![] // true  (typeof([]) // "object" //typeof(![]) // "boolean") ( un array distinto a otro array)
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undifine ( no tiene valor definido porque la llama antes )
   console.log(foo()); // 2 

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa',

var test = obj.prop.getFullname;

console.log(test()); // 'Juan Perez';
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
