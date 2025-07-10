//Ejercicio 1: Verificar mayoría de edad

function mayoriaEdad(){
    let edad = parseInt(prompt("Ingrese Edad: "))

    if(edad >= 18){
    document.getElementById("resultado").innerHTML= `<p>Es Mayor de Edad: ${edad}</p>`;

    }else if(edad <=17 && edad>=0){
        document.getElementById("resultado").innerHTML= `<p>Es Menor de Edad: ${edad}</p>`;
    }else{
        document.getElementById("resultado").innerHTML= `<p>El valor <strong>${edad}</strong> es invalido.</p>`;
    }
}


//  Ejercicio 2: Añadir producto si no está


function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado2").innerHTML =
        `<p>El producto ingresado es: <strong>${nuevoProducto}</strong>.</p>`;
    } else if(productos[1] == nuevoProducto){
        document.getElementById("resultado2").innerHTML =
        `<p>El producto ingresado es: <strong>${nuevoProducto}</strong>.</p>`;
    } else if(productos[2] == nuevoProducto){
        document.getElementById("resultado2").innerHTML =
        `<p>El producto ingresado es: <strong>${nuevoProducto}</strong>.</p>`;
} else{
        productos.push(nuevoProducto);
        document.getElementById("resultado2").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong>.</p>`;
}
}



//  Ejercicio 3: Control de tareas
    let tareas = ["Lenguaje","POO","Matematicas","Historia","Ciencias","Desarrollo Web","Base de Datos"];
function controlTareas(){
    if(tareas.length > 5){
        tareas.pop();
        document.getElementById("resultado3").innerHTML =`<p>Lista de Tareas Actualizada: <strong>${tareas.join(" , ")}</strong>.</p>`;
    }
    else if(tareas.length <=5){
        document.getElementById("resultado3").innerHTML =`<p>Lista Aceptable: <strong>${tareas.join(" , ")}</strong>.</p>`;
    }
    else{
        document.getElementById("resultado3").innerHTML =`<p>El valor  <strong>${tareas.length}</strong> es invalido</p>`;
    }
}

//  Ejercicio 4: Validar primer elemento


let cola = ["sinNombre", "Pedro", "Lucía"];

function validarCola(){


if (cola[0] === "sinNombre") {
    cola.shift()
document.getElementById("resultado4").innerHTML =`<p> Primer ELemento Eliminado.<br></br> Nueva Lista: <strong>${cola.join(" , ")}</strong></p>`;
}
else if (cola [0] !== "sinNombre"){
    document.getElementById("resultado4").innerHTML =`<p> Cola Correcta:<strong>${cola.join(" , ")}</strong></p>`;
}
else{
    document.getElementById("resultado4").innerHTML =`<p>El valor  <strong>${tareas.length}</strong> es invalido</p>`;
}
}

//  Ejercicio 5: Saludo condicional

function saludoCondicional(){

nombre= prompt("Ingrese su Nombre: ");

if (nombre.trim () !== "" ){
    
let saludos = [];

saludos.push(`Hola, ${nombre}`);
document.getElementById("resultado5").innerHTML =`<p>${saludos[0]}</p>`;

}
else{
    document.getElementById("resultado5").innerHTML =`<p>Nombre no Valido</p>`;
}

}


//  Ejercicio 6: Calificar nota

function calificarNotas(){
    nota=parseFloat(prompt("Ingrese su nota (un valor entre 7.0 y 0.0)"))
    if(nota > 7 || nota < 0){
        document.getElementById("resultado6").innerHTML =`<p><strong>ERROR</strong><br>El valor ingresado como nota no es valido</p>`;
    }
    else if(nota >=6){
        document.getElementById("resultado6").innerHTML =`<p><strong>EXCELENTE</strong></p>`;
    }
    else if (nota >=4){
        document.getElementById("resultado6").innerHTML =`<p><strong>APROBADO</strong></p>`;
    }
    else if(nota < 4){
        document.getElementById("resultado6").innerHTML =`<p><strong>REPROBADO</strong></p>`;
    }
}

// 7 Registro de visitantes
function registroVisitas(){
    let visitas= [];
    nombre = prompt("Ingrese su nombre: ")

    if (nombre != ""){
        visitas.unshift(nombre)
        document.getElementById("resultado7").innerHTML =`<p>La visita: ${visitas.join(" , ")}</p>`;
    }
    else{
        document.getElementById("resultado7").innerHTML =`<p>ERROR NOMBRE VACIO</p>`;
    }

}

//  Ejercicio 8: Control de stock
/* let stock = ["arroz", "fideos"];

Declara la variable productoSolicitado.
Si stock incluye el producto, muestra "Producto disponible".
Si no, agrégalo con push() y muestra "Producto agregado al stock".
 */

function controlStock(){
    let stock = ["arroz", "fideos"];
    productoSolicitado= prompt("Ingrese su producto: ")

    if (stock[0] == productoSolicitado){
        document.getElementById("resultado8").innerHTML =`<p>Producto disponible</p>`;
    }
    else if (stock[1] ==productoSolicitado){
        document.getElementById("resultado8").innerHTML =`<p>Producto disponible</p>`;
    }
    else{
        stock.push(productoSolicitado)
        document.getElementById("resultado8").innerHTML =`<p>Producto agregado al stock ${stock.join(" , ")}</p>`;
    }
}


/* Ejercicio 9: Lista de invitados
js
let invitados = ["Ana", "Luis", "Camila"];

Declara la variable persona.
Si la persona está en el arreglo, muestra "Bienvenido, [nombre]".
 Si no, muestra "No estás en la lista" */







