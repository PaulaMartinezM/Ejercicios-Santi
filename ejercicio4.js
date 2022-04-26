let a = parseInt(prompt("Ingrese la primer nota: "));
let b = parseInt(prompt("Ingrese la segunda nota: "));
let c = parseInt(prompt("Ingrese la tercera nota: "));
let d = parseInt(prompt("Ingrese la cuarta nota: "));

if (a > 10 || b > 10 || c > 10 || d > 10 || a < 0 || b < 0 || c < 0 || d < 0){
    alert("Las notas deben estar entre 0 y 10");
}
else{
    let promedio = (a+b+c+d)/4;
    
    if (promedio>=8){
        console.log("Muy bien!");
    }
    else if (promedio>6 && promedio<=7){
        console.log("más o menos");
    }
    else{
        console.log("muy flojo...");
    }
}
