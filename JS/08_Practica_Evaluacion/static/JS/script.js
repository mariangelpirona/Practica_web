/*
Ejercicio 1 

Código:
function contarVocales(texto) {
    let acumulador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (
            texto[i] === "a" ||
            texto[i] === "e" ||
            texto[i] === "i" ||
            texto[i] === "o" ||
            texto[i] === "u"
        ) {
            acumulador++;
        }
    }
    return acumulador;
}

let resultado = contarVocales("javascript");
alert(resultado);




------------------------------------------
Variables   |   Valores                   |
texto       |  “javascript                |
acumulador  |   0, 1, 2, 3                |
i           |   0, 1,2,3,4,5,6,7,8,9,10   |
resultadob  |   3                         |
------------------------------------------
simulación:
texto = javascript
Resultado = 3*/



// Ejercicio 2 
function filtrarMultiples(numeroLimite, numeroMultiplo){
    let resultado = []
    for(let i = 1; i <= numeroLimite ; i++)
    {
        if (i % numeroMultiplo === 0) 
        {
            resultado.push(i);
        }    
    }
    return resultado
}

function multiplos(){
    inputLimite = document.getElementById("input1")
    inputMultiplo = document.getElementById("input2")
    limite = parseInt(inputLimite.value)
    multiplo = parseInt(inputMultiplo.value)

    let numeros = filtrarMultiples(limite, multiplo);

    if (numeros.length === 0) {
        document.getElementById("resultado1").innerText = "No se encontraron múltiplos.";
    } else {
        document.getElementById("resultado1").innerText = "Números encontrados: " + numeros.join(", ");
    }

    inputLimite.value = "";
    inputMultiplo.value = "";
    inputMultiplo.focus()
}

