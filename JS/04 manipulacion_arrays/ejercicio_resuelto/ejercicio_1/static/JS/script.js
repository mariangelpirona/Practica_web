// Ejercicio 1
let compras=[];  // arreglo vacio

function ListasCompras(){
    compras.push("pan","leche","huevos");
    alert(`Lista de Compras: ${compras.join(", ")}`)
}

// Ejercicio 2

function EliminarElemento(){

let  basurero = compras.pop();
alert(`EL Producto eliminado: ${basurero}`)

}

// Ejercicio 3

let colores=["rojo", "azul"];

function AgregarElemento(){
 // Agregar al inicio
let entrada = prompt ("Agregar un Color: " ) // es un input que puede revisir un dato (input de javascript)
colores.unshift (entrada);
console.log(colores)
}

// Ejercicio 4
// eliminar el primer elemento
function EliminarPrimer(){

let basurero = colores.shift();

alert(`Elemento eliminado: ${basurero}`);

}

// Ejercicio 5

let numeros=[10,20,30];

function AgregarNumero(){
// Agregar al final
let entreda = prompt ("Agregar numero 40: " )
numeros.push (entreda);
console.log(numeros)
}

//------------------------------------------------------------------

function QuitarNumero(){

let basurero= numeros.shift();
console.log(basurero)
}

//------------------------------------------------------------------

function NuevoNumero(){
 // Agregar al inicio
let entreda = prompt ("Agrega el numero 5: " ) // es un input que puede revisir un dato (input de javascript)
numeros.unshift (entreda);
console.log(entreda)

}

//------------------------------------------------------------------

function EliminarUltimo(){

let  basurero = numeros.pop();
console.log(numeros)
}

//------------------------------------------------------------------
// Ejercicio 6
let orden = [];

function listaNumeros(){
    orden.unshift(1)
    orden.unshift(2)
    orden.unshift(3)
    console.log(orden)
}

//------------------------------------------------------------------
// Ejercicio 7

let historial= [];

function AgrgarMensaje(){
historial.push("Buenos")
historial.push(" Dias")
historial.push(" Hola")
let mensajeEliminado = historial.pop();
alert("El mensaje es: " + historial);
alert("Mensaje eliminado:"+ mensajeEliminado);
}

//------------------------------------------------------------------
// Ejercicio 8
cola = ["Cliente1", "Cliente2", "Cliente3"];

function ColaAtencion(){
let basurero = cola.shift();
alert(`El Cliente eliminado es: ${basurero}`);
let entrada = prompt ("Agregar cliente: " )
cola.push ("Cliente 4");
alert("El nuevo cliente es: " + cola.join(" - "))

}

//------------------------------------------------------------------
// Ejercicio 9

let nombres = ["Pedro", "Juan", "Luis"];
function ordenarNombres(){
    let basurero = nombres.pop();

alert(`El nombre eliminado es : ${basurero}`);

let entrada = prompt ("Agregue un Nombre: " ) // es un input que puede revisir un dato (input de javascript)
nombres.unshift ("Mateo");
alert("El nuevo nombre es: " + nombres.join(" - "))

let entreda = prompt ("Agregue un nombre: " )
nombres.push ("Ana");
alert("Actualiazcion de la Lista de Nombres es: " + nombres.join(" - "))

}

//------------------------------------------------------------------
// Ejercicio 10


let pila= [];

function PilasColas(){
    pila.push(1)
    pila.push(2)
    pila.push(3)

let elementoQuitado1 = pila.pop();
let elementoQuitado2 = pila.pop();
alert("Elementos quitados de la pila:\n" + elementoQuitado1 + "\n" + elementoQuitado2);


let cola = [];
cola.push("A");
cola.push("B");
cola.push("C");


let atendido1 = cola.shift();
let atendido2 = cola.shift();
alert("Elementos quitados de la cola:\n" + atendido1 + "\n" + atendido2);


}


