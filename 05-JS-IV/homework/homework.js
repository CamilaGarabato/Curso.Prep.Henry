// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  const Objeto = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!"
    }
  }
  return Objeto
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;

  return objeto
}
//dot notation solo acepta variables
//el objeto ya esta creado, par adar el valor null primero tenemos que darle una clase

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]()
}
//diferencia "." y "[]" con "dot" le damos a entender a JS que objeto ya tiene una clave. porque dot
//solo acepta variables, no se le pueden pasar strings
//las funcines para ser invoacdas necesitan llaves
//argumetnos y parametro: diferencia al escribir la Fx adentro le pasamos un ARGUMENTO
//al ejecutar o invocar se le pasa un PARAMETRO.



function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso"(EL argumeto que llega) tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  producto = objetoMisterioso.numeroMisterioso * 5;
  return producto;
}

//no sabemos cual es valor del numero, tampoco nos importa, 
function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código: borramos una propiedad
  delete objeto[unaPropiedad]
  return objeto;
}
//dotnotation solo acepta variables, no podemos acceder a una propiedad con dot
//dot no espera string sino variables. 
//aqui va con corchetes, porque 
//bora dentro de nuestro objeto la clas¿ve
//palabra clave: delete

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
let newobject = {
  nombre : nombre,
  email : email,
  password : password,
}
return newobject
}

//creas el objeto, 
//se puede poner solo nombre email y pas..
function tieneEmail(usuario) {
  // Devuelve "true" si el usuario(obj ya creado) tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if(usuario.email == null) { //le preguntas a js no tenes la propiedad null?
    return false;
  } else {
    return true;
  }
}

//usas dot porque te preguntan la propiedad, da igual dot o brak con break va asi [""]
//ternario, es poner una condicion 
//usuario.email ? true : false   =>aqui estamos preguntando si tiene esta propiedad ¿existe ususario.email?
//lo que esta a la derecha va a poner si es true y lo que esta a la derecha es si la rta es false.
//

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto.hasOwnProperty(propiedad)) {
    return true;
  } else {
    return false;
  }
}
//aqui estas preguntando si el objeto objeto tiene una propiedad llamada
//"properti"

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if(usuario.password === password) {return true}
  else {
    return false
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password =nuevaPassword;
  return usuario
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo)
  return usuario
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for(let i = 0; i<usuarios.length; i++) {
    //me quiero parar en usuario 
    usuarios[i].esPremium = true 
  }

  return usuarios
}


//usuario es un array que tiene muchos 
function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var sumaLikes = 0 //es un acumulador o contadorarranca en 0

  for(let i = 0; i<usuario.posts.length; i++) {
    sumaLikes = sumaLikes + usuario.posts[i].likes
  }
  return sumaLikes
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
//a producto le agregamos un metodo
    producto.calcularPrecioDescuento = function () {
      descuento = this.precio * this.porcentajeDeDescuento
      preciocondescuento = descuento - this.precio
    }
  return producto
}

//prodcuto es 
//la tampita aqui es como aceddo a los objetos de los prodtos, 
//para eso usamos this


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
