let x = 0;

if (Math.random() > 0.5){
    x =10;
} else{
    x = 20;
}


// тоже самое 
x = Math.random() > 0.5 ? 10 : 20; 

// плохой пример

let age = 23;
let isAdult = age > 18 ? true : false;

//нужно так 
let isAdultDoneRight = age > 18;


console.log(`Произвольное число: ${randomNumber}`);

console.log(randomNumber > 20 ? "Число > 20" : "Число <= 20");