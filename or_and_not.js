// let day = 'Воскресенье';

// //Суббота или Воскресенье
// if (day === 'Суббота' || day === 'Воскресенье') {
//     console.log(day + ' - это выходной')
// } else {
//     console.log(day + ' - это точно не выходной')
// }


// let password = '*******';

//Длина больше 3 и меньше 26
// if (password.length > 3 && password.length < 10){
//     console.log('Допустимый пароль');
// }else {
//     console.log('Такой пароль не подходит');
// }

// let x = 8;
// //приоритет сначала &&, потом || 
// if (x === 13 || x > 0 && x < 11) {
//     console.log(` x = ${x} - Число 13 или число от 1 до 10`);
// }


let f = 102; //123

//управление приоритетом с помощью скобок
if((f % 3 === 0 || f % 2 === 0) && f > 100){
    console.log('f делится на 3 или на  2 и f больше 100');
}