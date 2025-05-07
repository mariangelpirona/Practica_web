//Prueba de conexion Js
console.log("Conexion establecida con js");

//Creacion de variables 
let num= 25; // variable numero entero


//Creacion de funcion numeroEntero
function numeroEntero(){
    return "Variable Numerica:" + num;
}

//imprimir en consola
console.log(numeroEntero());// mostrar numero entero

//Creacion de numero decimal

let decimal= 3.14;

function numerodecimal(){
    return "Variable decimal :" + decimal;
}

//Imprimir numero decimal
console.log(numerodecimal())

//creacion de texto

let nombre= "hola mundo";

    function texto() {
        return "Variable texto:" + nombre
    }
    
//Imprimir nombre
console.log(texto())

//creacion de valor booleano

let verdadero = true;
let falso = false;

//imprimir booleano
console.log(verdadero); // Salida: true
console.log(falso);    // Salida: false

//arreglo de numeros
let numeros = [1, 2, 3, 4, 5];

//imprime los numeros
console.log(numeros); // Salida: [ 1, 2, 3, 4, 5 ]

//objeto personas
let objetoPersona = {
    nombre: "Ana",
    edad: 30
};
//imprime vaolres
console.log(objetoPersona);
console.log(objetoPersona.nombre.edad);

//valor indefinido
let valor;

//imprimir valor indefinido
console.log(valor)


//valor null
let valores= null;

//imprimir null
console.log(valores)


//identificador unico

const id = Symbol("id")
function identificadorunico(){
    return id
}

//imprimir identificador unico

console.log(identificadorunico())


//Numero Grande 

let valors = 123456789010
    function numerogrande(){
    return "el numero grande es:" + valors 
}

//imprimir valor grande
console.log(numerogrande())
