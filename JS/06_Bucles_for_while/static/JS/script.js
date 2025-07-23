/* Ejercicio 1: Contador del 1 al N
Pide al usuario un número con prompt() y usa un for para mostrar los números del 1 hasta ese número*/

function contarHastaN(){
    let n = parseInt(prompt("Ingresa el numero hasta donde quieres contar!"));

    let numeros = [];

    for (let i = 1; i <= n; i++){
        numeros.push(i);
    }

    document.getElementById("resultado").innerHTML= `<p>El conteo  de 1 hasta ${n} es el siguiente:</p><br> <strong>${numeros.join(" - ")}</strong>`;
}

/*Ejercicio 2: Suma de 5 números
Con un while, pide 5 números al usuario
(uno por uno con prompt()) y muestra la suma
total en pantalla.
 */
function sumarNumeros(){
    let suma = 0, i = 0, arr = [];
    while (i < 5) {
        let num = parseFloat(prompt(`Numero ${i + 1}:`));
        arr.push(num);
        if (!isNaN(num)) {
            suma += num;
            i++;
        }
    }
    document.getElementById("resultado2").innerHTML =`<div class="resultado"><p>La suma de: ${arr.join(" + ")} es: <strong>${suma}</strong></p></div>`;
}

// Ejercicio 3: Mostrar solo los pares entre 1 y 20
// Usa un for para mostrar en pantalla solo los números pares del 1 al 20.


numerosPares = [];
function pares(){
    numerosPares = [] // Reinicia el array
    for (let i = 1; i <= 20; i++){
        if (i % 2 === 0){
            numerosPares.push(i)
        }
    }
    document.getElementById("resultado3").innerHTML =`<div class="resultado"><p>Número pares del 1 al 20: <strong>{${numerosPares.join(", ")}}</strong></p></div>`;
}

// Ejercicio 4: Contador regresivo con condición
// Pide un número al usuario y, usando un while, cuenta
// regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".
let lista = []
function contadorRegresivo() {
    let numero = parseInt(prompt("Ingrese un numero para la cuenta regresiva: "));
    if (numero === 0) {
        alert("Numero no valido");
    }
    while (numero >= 0) {
        // alert(numero);
        lista.push(numero);
        numero--;
    };
    document.getElementById("resultado4").innerHTML = `<p>${lista.join("- ")}</p>`;

};

// Ejercicio 5: Mostrar la tabla de multiplicar de un número
//Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10.

function mostrarTablaMultiplicar(){
    let numero = parseInt(prompt("Que tabla de multiplicar desea conocer: "))

    for (let i = 1; i<=10; i++){
        let mult = numero * i;
        resultado += `<p>${numero} x ${i} = ${mult}</p>`;
    console.log(resultado)
    }
    document.getElementById("resultado5").innerHTML= resultado
}


//Ejercicio 6: Sumar hasta que se ingrese cero
//Con while, sigue pidiendo números con prompt() y súmalos, hasta que el usuario escriba 0. Muestra el total acumulado.


let sumaAcumulada = [];
function sumarHastaCero(){
    let suma = 0;
    let numero=0;
    sumaAcumulada = [];
    document.getElementById("resultado6").innerHTML = "";
    while (true) {
        numero = parseFloat(prompt("Introduce un número para sumar (0 para terminar)"));
        if (isNaN(numero)){
            document.getElementById("resultado6").innerHTML =
            "<p>Por favor, introduce un número valido.</p>"
            return
        }
        if (numero === 0){
            break
        }
        suma += numero
        sumaAcumulada.push(numero)
    }
    document.getElementById("resultado6").innerHTML =
    `<p>Números sumados: <strong>${sumaAcumulada.join(", ")}
    </strong><br>Total acumulado: <strong>${suma}</strong></p>`
}



// ✅ Ejercicio 7: Mostrar letras de una palabra
// Pide al usuario una palabra y usa un for para mostrar cada letra por separado en el HTML.
function mostrarLetras() {
    let palabra = prompt("Ingrese una palabra:");
    let resultado = "";
    if (palabra) {
        for (let i = 0; i < palabra.length; i++) {
            alert(`Letra ${i + 1}: ${palabra[i]}`);
            resultado += `<p>${palabra[i]}</p>`;
        }
    }
    document.getElementById("mostrarLetras").innerHTML = "resultado7";
}


// ✅ Ejercicio 8: Validar contraseña
// Pide una contraseña al usuario y sigue pidiendo con while hasta que escriba "admin123". Luego, muestra "Acceso concedido".

function validarContrasena() {
    let contrasena = prompt("Ingrese la contraseña:");
    while (contrasena !== "admin123") {
        contrasena = prompt("Contraseña incorrecta. Intente nuevamente:");
    }
    alert("Acceso concedido");
    document.getElementById("resultado8").innerHTML = "<p>Acceso concedido</p>";
}

// ✅ Ejercicio 9: Promedio de notas
//Pide con prompt() cuántas notas va a ingresar. Usa un for para pedir cada nota, calcula el promedio y lo muestra.

function promedioNotas() {
    let cantidad = parseInt(prompt("¿Cuántas notas ingresará?"));
    let notas = [];
    let suma = 0;

    for (let i = 0; i < cantidad; i++) {
        let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ":"));
        notas.push(nota);
        suma += nota;
    }

    let promedio = suma / cantidad;
    alert("El promedio es: " + promedio);
    document.getElementById("ej9").innerHTML =
        `<p>Notas: ${notas.join(" - ")}</p><p>Promedio: ${promedio}</p>`;
}



//✅ Ejercicio 10: Contar cuántos son mayores de edad
//Pide con prompt() cuántas personas vas a ingresar. Por cada persona, pide la edad y muestra al final cuántas son mayores de edad (18+).

function contarMayoresEdad() {
    let cantidad = parseInt(prompt("¿Cuántas personas va a ingresar?"));
    let edades = [];
    let mayores = 0;

    for (let i = 0; i < cantidad; i++) {
        let edad = parseInt(prompt("Edad de la persona " + (i + 1) + ":"));
        edades.push(edad);
        if (edad >= 18) {
            mayores++;
        }
    }

    alert("Cantidad de mayores de edad: " + mayores);
    document.getElementById("ej10").innerHTML =
        `<p>Edades: ${edades.join(" - ")}</p><p>Mayores de edad: ${mayores}</p>`;
}




