

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// const user ={
// name:'John',
// surname:'Smith',
// }

// user.name = 'Pete'
// delete user.name 
// console.log(user)



// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// const schedule = {
// name:'jhndsd',
// };

// let num = isEmpty(schedule)
// console.log(num)


// function  isEmpty(obj){

// for(let key in obj){
//     return false
// }
// return true
// }


// У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     Jhon:100,
//     Ann:160,
//     Pete:130,
//     Sahil:100,
// }

   
// let sum = 0
// for(let prop in salaries){

//        sum += salaries[prop]
// }
// console.log(sum)




//  Object.keys(salaries).forEach(key => {
//     let value = salaries[key];
// });

// let array = Object.entries(salaries);
// console.log(array)
// let sum 
// for(i = 0; i < array.length; i++){

// }
// console.log(sum)



// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
    width: 200,
    heigth: 300,
    title:'My menu',

};
multiplyNumeric(menu)


function multiplyNumeric(menu){
    for(let key in menu){
if(typeof menu[key] === 'number'){
    menu[key] *= 2
      
}
    }
}
console.log(menu)

