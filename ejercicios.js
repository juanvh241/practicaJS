//Ingresar dos valores y sumarlos.
let a = 4
let b = 5
console.log(a + b)

//Ingresar tres valores e indicar cual es el mayor y cual el menor.
let num1 = 15   
let num2 = 6
let num3 = 30
if (num1 > num2 && num1 > num3) {
    let mayor = num1
    console.log("El mayor es: " + mayor)
}
else if (num2 > num1 && num2 > num3) {
    let mayor = num2
    console.log("El mayor es: " + mayor)
} else {
    let mayor = num3
    console.log("El mayor es: " + mayor)
}
if (num1 < num2 && num1 < num3) {
    let menor = num1
    console.log("El menor es: " + menor)
}
else if (num2 < num1 && num2 < num3) {
    let menor = num2
    console.log("El menor es: " + menor)
} else {
    let menor = num3
    console.log("El menor es: " + menor)
}

//  Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.
let palabra = "auto";
let contador = 0;

for (let i = 0; palabra[i] !== undefined; i++) {
    contador++;
}

console.log(`${palabra} tiene ${contador} letras.`);

// Ingresar un número e indicar si es par.
let numero = 8;
if (numero % 2 === 0) {
    console.log(`${numero} es par.`);
} else {
    console.log(`${numero} no es par.`);
}

//Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.
let palabrarep = "hola";
let n = 3;

for (let i = 0; i < n; i++) {
    console.log(palabrarep);
}

//Ingresar dos valores enteros y enumerar los elementos que los separan.
let numero1 = 3;
let numero2 = 9;

if (numero1 < numero2) {
    for (let i = numero1 + 1; i < numero2; i++) {
        console.log(i);
    }
} else if (numero1 > numero2) {
    for (let i = numero1 - 1; i > numero2; i--) {
        console.log(i);
    }
}

//Mostrar los multiplos de 2 y 5 menores a 100.
for (let i = 1; i < 100; i++) {
    if (i % 2 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

//Obtener la suma de los elementos de un array. usando reduce
let array = [1, 2, 3, 4, 5];
let suma = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(`La suma de los elementos del array es: ${suma}`);

//Sumar solo los elementos pares de un array. usando filter y reduce
let arrayPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaPares = arrayPares.filter(num => num % 2 === 0).reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(`La suma de los números pares es: ${sumaPares}`);

/* los objetos literales me sirven para asignar atributos a algo que tiene muchas cosas asignadas a el por ejemplo un jugador
tiene armas balas vidas etc.
la estructura es
let jugador = { atributo: valor
color: "blanco"
altura: 5
anchno: 10
}
console.log(jugador.color)
se puede hace un array con objetos literales adentro
let jugadores = [{}, {}, {}]
despues se puede acceder al array y a los objetos dentro del array
*/

// Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal
let palabra2 = "CASA";
let letras = {};

for (let i = 0; i < palabra2.length; i++) {
    let letra = palabra2[i];

    if (letras[letra]) {
        letras[letra]++;
    } else {
        letras[letra] = 1;
    }
}

for (let letra in letras) {
    console.log(`${letra} = ${letras[letra]}`);
}


/* Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista.
Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.
*/

let personas = [
    { nombre: "Ana", sexo: "F", edad: 30 },
    { nombre: "Luis", sexo: "M", edad: 24 },
    { nombre: "María", sexo: "F", edad: 42 },
    { nombre: "Carlos", sexo: "M", edad: 20 },
    { nombre: "Lucía", sexo: "F", edad: 35 }
];

// promedio de edad
function promedioEdad(personas) {
    let suma = 0;
    for (let i = 0; i < personas.length; i++) {
        suma += personas[i].edad;
    }
    return suma / personas.length;
}

// mujer mayor 
function mujerMayorEdad(personas) {
    let mayor = null;

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].sexo === "F") {
            if (mayor === null || personas[i].edad > mayor.edad) {
                mayor = personas[i];
            }
        }
    }

    return mayor ? mayor.nombre : "No hay mujeres";
}

// hombre menor
function hombreMenorEdad(personas) {
    let menor = null;

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].sexo === "M") {
            if (menor === null || personas[i].edad < menor.edad) {
                menor = personas[i];
            }
        }
    }

    return menor ? menor.nombre : "No hay hombres";
}

// promedio de edad de mujeres
function promedioEdadMujeres(personas) {
    let suma = 0;
    let cantidad = 0;

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].sexo === "F") {
            suma += personas[i].edad;
            cantidad++;
        }
    }

    return cantidad > 0 ? suma / cantidad : 0;
}

console.log("Promedio de edad general:", promedioEdad(personas));
console.log("Mujer con mayor edad:", mujerMayorEdad(personas));
console.log("Hombre con menor edad:", hombreMenorEdad(personas));
console.log("Promedio de edad de mujeres:", promedioEdadMujeres(personas));

//Crear una funcion que reciba 3 parametros: minimo, maximo y divisor.
// Devolver una lista con los divisores del numero ingresado.

function obtenerDivisibles(minimo, maximo, divisor) {
    let resultado = [];

    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            resultado.push(i);
        }
    }

    return resultado;
}

// uso de la funcion
let lista = obtenerDivisibles(1, 20, 3);
console.log(lista);

