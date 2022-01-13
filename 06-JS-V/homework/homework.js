// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código: ESTO ES METODO CONSTRUCTORA
  class Usuario {  //con mayuscula para que JS entienda que es una fx construcctora
    constructor (opciones) {  //=> esto es un OBJETO asi lo dice el ejercicio ,,,podria ser cualquier cosa pero el ejercicio dice "opciones"
      this.usuario = opciones.usuario;  //een la fx contructora simepre usamos this
      this.nombre = opciones.nombre; //con opciones le decimos que busque en la fx constructora 
      this.email = opciones.email;//le damos el valor de nuestro objeto opciones
      this.password = opciones.password;
    }
      //salis de la funcion constructora 
      //Usuario.prototype.saludar = funcion () {
          //return "Hola, mi nombre es " + this.nombre
  }

  Usuario.prototype.saludar = function () {
    return "Hola, mi nombre es " + this.nombre;
  };
  return Usuario;
}//aqui lo que haces es agregar una funcion a la clase ususario.
//cunado poner function y pones en Mayuscula js interpreta que es una funcion constructora
//function Usuuario (opciones) {
//     this.nombre = opciones.nombre   y asi... 

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function() { 
      return "Hello World!";// esto es una opcion de pero podria ponerlo this.saludar debajo los otros "this"
  };
}
//Contructor (lo que llega coom parametro) es funcion E6, no la creamos desde cero sino que llega como parametro
//opciones es lo que llega por parametro no es la funcion constructora 
//

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  //=>JS ya tiene una funcion constructora strings por eso no la inicializamos 
  //
  String.prototype.reverse = function() {
    let stringinv = ""; //declaramos una variable 
    for(let i = this.length -1 ; i>=0 ; i--) {//nuestra variable i empiece en t.l serian los caracteres de la palabra que quiero invertir
      stringinv = stringinv + this[i];//lo hacemos de atras para adelante. 
    }//string es lo que ya tiene esa variable mas ej. toni tiene longitud de 4, arrancamos en 3, 
    return stringinv;
  }
}
//empieza en la longitud de la string mesnos 1, toni tiene 4, es decir empezamos a 3
//que vaya retrocediendo en 1 
//1° i = 3   seria la I de toni => en la posocion 3 str no es un caracter vacio sino que es la "I"
//2° str ya no es una string vacia ahora tiene la I, en la 2° la N se agrega a la I => IN 
//this toma valores diferentes segun el constexto en el que se ejecuta, en este caso que lo hacemos dentro de un prototype
//en este caso toma el valor que esta siendo analizado.


// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) { /*Escribir los argumentos que recibe el constructor*/
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      this.detalle = function() {//de aqui para abajo es un oobjeto
        return {
          nombre: this.nombre,
          apellido: this.apellido,
          edad: this.edad,
          domicilio: this.domicilio,
        }
      }
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada  si por ejejmplo te olvidas de poner un metodo a la clase le agregas de esta forma
  const persona1 = new Persona("Juan", "Perez", 22, "saavedra 123");
  return persona1
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {
      return this.nombre + ", " + this.edad + " años";
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
