// filter method

let myArray = [1,2,3,4,5,6,7,8,9,10];

const newNums = myArray.filter( (item)=>{
    return item >4;
})
// console.log(newNums);

const books = [ {
  name:'Ai',
  edition:2000,
  genre: 'cs' 
},
{
   name:'cyber',
  edition:2000,
  genre: 'security' 
} ];

let user = books.filter( (bk)=>{
    return bk.name == 'Ai'
})
//console.log(user);




// Map method

const nums = [1,2,3,4,5];

const addedValue = nums.map( (num)=>{
    return num + 10;
});
//console.log(addedValue);




// chaining method

const values = [1,2,3,4,5];

const chanValues = values.map( (item) => item *2).map( (item) => item +1).filter((item)=> item >6);

console.log(chanValues);
