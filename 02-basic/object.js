const user = {
    name:'anonymous',
    'fullname':'active-anonymous',
    age:18,
    email:'anonym@gmailcom',
    isLogedIn: false
}

// console.log(user.name); //first method of accessing a key
// console.log(user['fullname']); // 2nd and best method for accesiing a key



// concatonation of objects through spread operators
const obj1 = {
    1: 'a',
    2:'b'
}

const obj2 = {
    3:'c',
    4:'d'
}

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


// accessing keys and values coming from database
// console.log(Object.keys(user));
// console.log(Object.values(user));

let database = Object.keys(user);
console.log(database);



// checking whether the object has the `key or proprty` or not
// console.log(user.hasOwnProperty('email'));



// destructurering an object
const course = {
    coursename : 'javascript',
    price : 'free of cost',
    offeredBy : 'youtube'
}

const {coursename:bestlanguage} = course;
console.log(bestlanguage);

