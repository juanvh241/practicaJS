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

//Obtener la suma de los elementos de un array.
let numerosarray = [5, 8, 12, 3, 7];
let suma = 0;

for (let i = 0; i < numerosarray.length; i++) {
    suma += numerosarray[i];
}

console.log(`la suma de los elementos es: ${suma}`);

//Sumar solo los elementos pares de un array.
let arraypares = [4, 7, 10, 3, 6, 9];
let sumaPares = 0;

for (let i = 0; i < arraypares.length; i++)
    if (arraypares[i] % 2 === 0) {
        sumaPares += arraypares[i];
}

console.log(`La suma de los números pares es: ${sumaPares}`);

//Ingresar una palabra e identificar la letras distintas y sus repeticiones. Utilizar un objeto literal
let palabraB = "CASA";
let letras = {};

for (let i = 0; i < palabraB.length; i++) {
    let letra = palabraB[i];

    if (letras[letra]) {
        letras[letra]++;
    } else {
        letras[letra] = 1;
    }
}
for (let letra in letras) {
    console.log(`${letra} = ${letras[letra]}`);
}


