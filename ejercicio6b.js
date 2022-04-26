
let i = 10000;

while (i >= 0){
    let x = i%5;
    let y = i%3;
    let z = i%7;
    if (x===0 && y===0 && z===0) {
        console.log(i);
    }

    i--;   
}