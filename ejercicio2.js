let altura = parseInt(prompt(`Escriba su altura en cm`));

if (altura>180){
    console.log("Sos alto che!");
}
else if (altura<=180 && altura>160){
    console.log("Sos normal");
}
else{
    console.log("enana!");
}