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
document.getElementById("resultado4").innerHTML =`<p> Primer ELemento Eliminado.<br></br> Nueva Cola: <strong>${cola.join(" , ")}</strong></p>`;
}
else if (cola [0] !== "sinNombre"){
    document.getElementById("resultado4").innerHTML =`<p> Cola Correcta:<strong>${cola.join(" , ")}</strong></p>`;
}
else{
    document.getElementById("resultado3").innerHTML =`<p>El valor  <strong>${tareas.length}</strong> es invalido</p>`;
}
}
