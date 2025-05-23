console.log()

function SumaDeValores(){
    let datos = [
[1, 2, 3, 4],
[5, 6, [7, 8, [9, 10]]]
];

let Num1 = datos[0][1];
let Num2 = datos[1][0];
let suma = Num1 + Num2;
alert(suma);
}