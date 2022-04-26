let a = parseInt(prompt("Ingrese el primer número: "));
let b = parseInt(prompt("Ingrese el segundo número: "));
let c = parseInt(prompt("Ingrese el tercer número: "));

if (a > b && a > c){
    console.log(`El número mayor es: ${a}`);
}
else if (b > a && b > c){
    console.log(`EL número mayor es: ${b}`);
}
else {
    console.log(`El número mayor es: ${c}`);
}