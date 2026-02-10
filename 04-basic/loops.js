for (let i = 0; i < 5; i++) {
    // console.log(i); 
}

let arr = ['batman','suprman','flash']

for(let i=0; i<arr.length; i++){
    let result = arr[i];
    //console.log(result);   
}

for (let i = 0; i < 10; i++) {
    if(i == 5){
        //console.log(`${i} detected`);
        continue;
    }
    //console.log(i);
}

let myArray  = ['flash','batman','superman'];
let result = 0;

while (result < myArray.length) {
   //  console.log(`value is ${myArray[result]}`);
    result = result + 1;
}


let num1 =0;
while(num1 <=10){
    //console.log(`value is ${num1}`);
    num1 = num1 +2;
}

let score = 1;
do {
    console.log(`score is ${score}`);
    score++
} while (score <=10);