let textoIngresado = prompt("Ingrese un texto: ");
let letra = prompt("Ingrese la letra que desea encontrar");
let acc = 0;

for (let i = 0; i < textoIngresado.length; i++){
    if (textoIngresado.charAt(i) === letra){
        acc++;
    }
    
}

console.log(`La letra ingresa se repite ${acc} veces en el texto`);
