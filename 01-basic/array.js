let marvelHros = ['spiderman','batman','superman'];
let superHeros = ['Thor','ironman','hulk'];

// 1st method concatenation
// let allheros = marvelHros.concat(superHeros);
// console.log(allheros);

//2nd method spread operator
let allheros = [...marvelHros, ...superHeros]
console.log(allheros);


// creates an array from any object
let score1 = 100;
let score2 = 200;
let score3 = 300;

let arr = Array.of(score1,score2,score3);
console.log(arr);
 

