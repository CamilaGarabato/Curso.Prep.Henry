// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}
//slice "cortar" recibe 2 parametros, el primero indica donde empieza a cortar y el segundo donde se detiene
//si le digo "slice(1)" va a arrancar desde la A en el ejemplo de "mario"
//el segundo parametro se podria no indicar, en ese caso se requiere la palabra hasta el final
//ej "slice(1,3)"=>ari en el ejemplo mario

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2, operacionMatematica)
}
//El CB de aqui podria ser algo asi:
//console.log(operacionMatematica(1,2,function(n1,n2) {
//  return n1*n2  =>2
// }))

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let suma = 0
  for(let i = 0; i<numeros.length; i++) {
    suma = suma + numeros[i];
  }
  cb(suma)
}

//Se puede utilizar la funcion REDUCE ()rediuss
//reduce(acumulador, valornuevo) recibe 2 parametros que pueden tener cualquier nombre
//respetar siempre la posiscion ejemplo:
//array = [1,2,3,4]    =>reduce(a,vn)  =>1° a:1 vn:1
//=>2°  vn:2  a:(1+2=3)
//=>3°  vn:3  a:(1+2+3=6) entonces posicion 2 va tomando valores de los elementos 
//posicion 1: acumula la suma de cada numero que va tomando el valor de posicion2

//let suma = numeros.reduce(function(acumulador, nuevovalor){
//  return acumulador + nuevovalor
//})
//cb(suma)

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for(let i=0 ; i<array.length ; i++)
    cb(array[i]);//en la primera vuelta arrayi va a valer 1, en la segunda 2 y asi si el array fuese asi [1,2,3]
}
//OTRA OPCION 
//  array.forEach(function(e)) {
//    cb(e)
 // }
//foreach recibe una funcicon que es el callback, y recibe un elemento en este caso lo llamamos "e"

//el foreach es lo mismo que el for, itera, va 1 x 1


function map(array, cb) {//  MAP ES OTRO METODO DEL ARRAY
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
//MAP:
  var nuevoArray = array.map(function(e) { //map recibe una funcion y tiene el elemento "e"
   return cb(e) //aqui realizo el cambio de cada elemeto y map devuelve un nuevo array con cada elemeto modificado
  //el ejercicio pide retornarle el callback (funcion), y pasarle el elemento.
  })
  return nuevoArray;           //el elemeto en la 1° vuelta vale 1, en la segunda 2, y asi
}

//  console.log(map([1,2,3]));
//  function filter(array) {
//MAP al igual ed RECIBE, Y FOREACH recibe una funcion, y lo que esta adentro es el elemento

//PARA HACER UN COGO MAS LIMPIO SE PUEDE PROCEDER ASI
//return array.map(function(e) {
//    return cb(e)
//});
//ARON FUNCTION SON ASI
//return array.map(e=>cb(e);  esta es la estructura de una aron function "estructura de flecha"
//no hace falta declarar que es una funcion
//si tiene un solo parametro no hace falta que la envolvamos, pero si tiene mas si por ejemplo
//return array.map((a,e)=> cb(e));
// si tiene UNA LINEA no hace falta poner return, pero si tiene llaves si tenemos que poner return
//return array.map( e=> {return cb(e)});.

//=> arrow function:o funciones flecha
//es una nueva forma de declarar funciones que modifica la sintaxis
//antes declarabas una funccion asi:  "function suma(n1+n2)} return n1+n2
//arrow:const suma = (n1 +n2) => n1 +n2 |no hace falta poner "function"
//aqui esta guardado en una variable, si esta en una sola linea no hace falta poner return ni llaves
//si pongo llaves tengo que poner un return asi: const suma = (n1+n2) => {return n1+n2}
//si tuviese un solo elemto no hace falta poner los parentesis

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter(e=>e[0]==="a")
}
//filter, filtra los elemetos y genera un nuevo array unicamento con los elemetos que coincidan con la condicion que coloco.
//la condicion en este caso se lee asi ""que elemeto en su posicion cero sea = a la letra "a""






//CALLBACK es solo una funcicon que se pasa por parametro
//function operacionMath(n1,n2,cb) {=>recibe 3 parametros, 2 numero y una funcion.
//    return cb(n1,n2)
//console.log(operacionesmath(1,2function(n1,n2){
//   return n1+n2
//}));



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
