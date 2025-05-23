console.log()


function ConstruirFrases(){
    let sujeto = ["El perro", "El gato"];
    let acciones = [
    ["ladra", "corre"],
    ["duerme", "salta"]

    ];
    let frase = sujeto[1] + " " + acciones[1][0] + ".";
    alert(frase)

}