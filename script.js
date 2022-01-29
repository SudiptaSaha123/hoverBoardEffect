const container = document.getElementById('container')
const colors = ['#00f7ff', '#ffe600', '#3cff00', '#00eeff', '#ff6600', '#00ffaa']

const squaresNumber = 500;

for(let i=0 ;i<squaresNumber; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>setColor(square))
    square.addEventListener('mouseout', () =>removeColor(square))

    container.appendChild(square)
}

function setColor(element){
    const color = getRamdomColor()
    element.style.background = color
    element.style.boxShadow= `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#030222'
    element.style.boxShadow = '0 0 2px #000000'
}

function getRamdomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}