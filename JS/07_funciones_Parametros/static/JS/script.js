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



