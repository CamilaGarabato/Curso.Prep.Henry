const gitRemoteOriginUrl = require("git-remote-origin-url");
const GitUrlParse = require("git-url-parse");
const fs = require('fs');
const os = require('os');
const axios = require('axios');
const path = require('path');

const WINDOWS = 'Windows_NT';
const MACOS = 'Darwin';
const LINUX = 'Linux';
const USERNAME = os.userInfo().username;
const WINDOWS_PATH = `C:\\Users\\${USERNAME}\\.gitconfig`;
const MACOS_PATH = `${os.homedir()}/.gitconfig`;
const LINUX_PATH = `${os.homedir()}/.gitconfig`;
function getGitEmail() {
  switch (os.type()) {
    case WINDOWS:
      return getEmail(WINDOWS_PATH);
    case MACOS:
      return getEmail(MACOS_PATH);
    case LINUX:
      return getEmail(LINUX_PATH);
  }
}
function searchEmail(str) {
  var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.exec(str);
}
function getEmail(PATH) {
	try {
		const email = searchEmail(fs
			.readFileSync(PATH)
      .toString());
		if (email.length > 0) {
			return email[0];
		} else {
			console.log(`
            configura tu cuenta de git por favor!
            https://git-scm.com/book/es/v2/Personalizaci%C3%B3n-de-Git-Configuraci%C3%B3n-de-Git`);
			process.exit()
		}
	} catch (error) {
		console.log(
			`Tienes que instalar git!
        https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git`
		);
		process.exit()
	}
}

function readFile() {
  try{
    const lt = fs.readFileSync('./.reporter/lt.json');
    return JSON.parse(lt);
  } catch (e) {
    return {};
  }
}


module.exports = function report(data) {
  try {
    const lastRun = readFile();
    const username = getGitEmail();
    gitRemoteOriginUrl()
        .then((remote) => {
          const { name: repo, owner: github } = GitUrlParse(remote);
          const pedidos = data.testResults.map(test => {
            if(!lastRun[test.testFilePath]) {
              lastRun[test.testFilePath] = {
                passing: test.numPassingTests,
                tries: 0,
              }
            }
            if(lastRun[test.testFilePath].passing != test.numPassingTests || lastRun[test.testFilePath].tries == 0) {
              const tries = lastRun[test.testFilePath].tries;
              lastRun[test.testFilePath].passing = test.numPassingTests;
              lastRun[test.testFilePath].tries = 1;
              return axios.post('https://proxy.soyhenry.com:3001/m0/grade', {
                "pending": test.numPendingTests,
                "passing": test.numPassingTests,
                "failed": test.numFailingTests,
                "runtime": test.perfStats.runtime,
                "slow": test.perfStats.slow,
                "file": path.basename(test.testFilePath),
                "repo": repo,
                "github": github,
                "username": username,
                "tries": tries
              });
          } else {
              lastRun[test.testFilePath].tries++;
              lastRun[test.testFilePath].passing = test.numPassingTests;
              return Promise.resolve();
          }
          });
          return Promise.all(pedidos);
        })
        .then((results) => {
          fs.writeFileSync('./.reporter/lt.json', JSON.stringify(lastRun));
        })
        .catch((err) => {
          console.log(err);
        });
  } catch (error) {
    console.error(error);
  }
  return data;
};

//AQUI EMPIEZO

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0
  do {
    i++
    numero = numero +5
  } while (i<8)
  return numero;
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí S
  var array = [0];
  for(var i=1 ; i <=10 ; i++) {
    array.push(6*i); //[0, 6, 12, 18...]
  }
  return array;
}
//push agrega elelemtos al final del array [0], [0, 6], [0,6,12]... y asi

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero <2) {
    return false;
  } else if(numero === 2) {
    return true;
  }
  for(var i=2; i<numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
  return true;
}


function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch(color) {
    case "blue":
      return "This is blue";
      break;
    case "red": 
      return "This is red";
      break;
    case "green":
      return "This is green";
      break;
    case "orange":
      return "This is orange";
      break;
    default: 
    return "Color not found";
  }
}

//LECCION 4
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var i = 0; i<numeros.length ; i++) {
    suma = suma + numeros [i];
  } 
  return suma;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10;i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray;
  }
  }

//DIFERENCIA ENTRE CONSLOE.LOG Y RETURN caundo uso una u otro?

var mayor = numeros[0];
for(var i=0 ; i<numeros.length ; i++) {
  if(numeros[i] > mayor) {
    maximo = numeros[i];
  }
}
return maximo;
