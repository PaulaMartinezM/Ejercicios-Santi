let textoElegido = prompt("Ingrese un texto");
let a = prompt("Ingrese la letra que desea encontrar");

let b = textoElegido.indexOf(a);

if (b===-1){
    alert(`La letra ${a} no está en el texto ${textoElegido}`);
}
else{
    alert(`La letra ${a} aparece en el texto ${textoElegido}`);
}