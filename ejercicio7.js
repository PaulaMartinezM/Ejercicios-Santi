let numElegido = parseInt(prompt("Ingrese un número"))
let i = 0;
while (i <= numElegido){
    if (i%10===0){
        console.log("Nueva decena")
        console.log(i);
    }
    else{
        console.log(i);
    }
    i++;
}