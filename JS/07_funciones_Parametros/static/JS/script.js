//Ejercicio 1: Repetir una palabra N veces
//Solicita al usuario una palabra y un número usando prompt. Luego, crea una función que reciba ambos valores como parámetros,
//  repita la palabra N veces utilizando un bucle, y retorne el resultado completo como una cadena de texto. Muestra el resultado con alert.

function repetirPalabra(palabra, veces){
    let resultado= "";
    for (let i = 0; i < veces; i++){
        resultado += `${palabra} , `
    }
    return resultado.trim();// trim sirve para  elimina  espacios en el extremo

}
    
function mostrarPalabra(){
    let input01 = document.getElementById("input1");
    let palabra = input01.value;
    let numero = parseInt(prompt("Ingrese Cantidad a repetir"));
    let resultadoFinal =  repetirPalabra(palabra, numero)

    document.getElementById("resultado1").textContent = resultadoFinal;
}




/*Ejercicio 2: Comparar dos números
Usa input para pedir dos números. Crea una función con dos parámetros que compare los valores y retorne un mensaje 
indicando cuál número es mayor, menor o si son iguales. Muestra el mensaje */ 


function compararNumeros (num1, num2){


if (numi > num2) {
return `$(num1) es mayor que $(num2)`;
}else if (num1 < num2){
return `${numl} es menor que ${num2}`;
}
else{
return `${numl} es igual que ${num2}`;
}   
}                               

function mostrarComparacion(){

let inputl= document.getElementById("numComp1");
let input2= document.getElementById("numComp2");
let num1= parseFloat(input1.value);
let num2 =parseFloat(input2.value);

let resultado= compararNumeros (num1, num2);
document.getElementById ("resultado2").textContent = resultado;

if (isNaN(num1) || isNaN = (num2)){
alert("Valor Invalido, Ingrese solo numeros");}


inputl.value = ""; // limpia la caja de texto 
inputl.focus (); // poner foco en elemento 
input2.value= ""; }


