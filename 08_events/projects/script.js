const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for( let i = 0; i < 6;i++){
        color += hex[Math.floor(Math.random()*16)]
        
    }
    return color;
}

const stopChangingColor = function(){
    clearInterval(intervalId)
}
let intervalId
const startChangingColor = function(){
      const body = document.querySelector('body')
        intervalId = setInterval(function(){
         body.style.backgroundColor = randomColor()
      },500)

}


document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)



