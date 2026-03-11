// generate a random color

const randomColor = ()=>{
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i=0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let interval;


// start the background color 
const startChangingColor = ()=>{

   interval = setInterval(changeBgColor,1000)

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}


// stop the background color
const stopChangingColor = ()=>{

    clearInterval(interval)
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)