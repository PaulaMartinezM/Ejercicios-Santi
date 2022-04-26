let textoIngresado = prompt("Ingrese un texto");
let esPal = false;

for (let i = 0; i < textoIngresado.length; i++){
    
    let letraIni = textoIngresado.charAt(i);
    let z = textoIngresado.length - 1 - i;
    let letraFin = textoIngresado.charAt(z);
        
        if (letraIni === letraFin){
            esPal = true;
        }
        else{
            console.log(`El texto ingresado no es palíndromo`);
            esPal = false;
            break;
        }
    }

if (esPal ===true){
    console.log(`El texto es palíndromo`);
}

