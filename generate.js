
const stickSec = document.querySelector('main section')

var rangeInput = document.querySelector('input[name="size"]');
rangeInput.value = 10; // default value at 10

function generateAStick(value, height, width) {
    var stick = document.createElement('div')
    stick.classList.add('stick')
    stick.style.backgroundColor = 'white'
    stick.style.height = height + 'px'
    stick.style.width = width + 'px'
    stick.style.marginLeft = '3.5px' // eventually put different margin depending on the width
    stick.style.textAlign = 'center'

    stickText = document.createElement('p')
    stickText.classList.add('stick-text')
    stickText.textContent = value
    stickText.style.color = 'black'
    stickText.style.fontSize = '15px'
    stickText.style.paddingTop = '3px'

    if (width < 50) {
        stickText.style.display = 'none'
    }

    stick.appendChild(stickText)

    return stick
}

function generateSticks(n) {

    // more sticks we have, less the width of each sticks will be
    var width = 1000 / n

    for (let i = 0; i < n; i++) {

        var value = Math.floor(Math.random() * 200) + 10
        var height = value * 3

        var stick = generateAStick(value, height, width)
        stickSec.appendChild(stick)
    }

}

generateSticks(rangeInput.value) // initial generation

rangeInput.addEventListener('input', (e) => {

    var n = e.target.value
    stickSec.innerHTML = ''

    generateSticks(n)

})
