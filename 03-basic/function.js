// function calculateprice(num1){
//     return num1;
// }
// console.log(calculateprice(200,300,400));


// passing multiple values in function
function calculateprice(...num1){
    return num1;
}
//  console.log(calculateprice(200,300,400));



// handling an object in function//
const user = {
    name : 'shahan',
    classCode : 1234
}

function handleObjct(anyobject){
    // console.log(`username is ${anyobject.name} and classcode is ${anyobject.classCode}`);
    
}

handleObjct(user)

// 2nd method and directly pass the object without declaring it

function handlenewobject(obj){
    // console.log(`firstname is ${obj.firstname} and lastName is ${obj.lastname}`);
}

handlenewobject({
    firstname:'shahan',
    lastname:'alam'
});



// handling an array in function//

const newArray = [100,200,300];
const myArray = ['shahan','shayan'];

function getSecondValue(getArray){
    return getArray[1];
}
// console.log(getSecondValue(newArray));
// console.log(getSecondValue(myArray));

// dirct handling

// console.log(getSecondValue(['hello','world']));






