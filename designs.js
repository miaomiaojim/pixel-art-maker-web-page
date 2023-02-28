const canvas = document.querySelector('#pixelCanvas');
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const inputCubeSize = document.querySelector('#inputCubeSize')
let heightValue = inputHeight.value;
let widthValue = inputWidth.value;
let cubeValue = inputCubeSize.value;
const colorModule = document.querySelector('#colorModule');
const colorCanvas = document.querySelector('#colorCanvas')
let colorCanvasValue = colorCanvas.value;
const resetButton = document.querySelector('#reset');
const formSizeCanvas = document.querySelector('#formSizeCanvas')

let draw = false;

/**
 * @description Set the layout of Canvas and the responce of little squares to action "click" of mouse
 * @param {*} heightSize - the height of the canvas
 * @param {*} widthSize - the width of the canvas
 * @param {*} cubeSize - the size of the cubes in the canvas
 * @param {*} colorCanvasValue - the initial background color of the canvas
 */
function cite(heightSize, widthSize, cubeSize, colorCanvasValue) {
    canvas.style.setProperty('--heightSize', heightSize)
    canvas.style.setProperty('--widthSize', widthSize)
    for (let numberHeight = 1; numberHeight <= heightSize; numberHeight++) {
        for (let numberWidth = 1; numberWidth <= widthSize; numberWidth++) {
            let cube = document.createElement('div');
            canvas.appendChild(cube);
            cube.style.backgroundColor = colorCanvasValue
            cube.classList.add('pixel');
            cube.style.setProperty('--cubeSize', cubeSize)
            cube.addEventListener('mouseover', function () {
                if (!draw) return
                cube.style.backgroundColor = colorModule.value
            })
            cube.addEventListener('mousedown', function () {
                cube.style.backgroundColor = colorModule.value
            })
        }
    }
}

window.addEventListener('mousedown', function () {
    draw = true
})
window.addEventListener('mouseup', function () {
    draw = false
})

function reset() {
    canvas.innerHTML = '';
    cite(heightValue, widthValue, cubeValue, colorCanvasValue)
}

resetButton.addEventListener('click', reset)

/** 
 * replace and refresh height, width, cube size and canvas color after click "submit" button 
*/
formSizeCanvas.addEventListener('submit', function (e) {
    e.preventDefault();
    heightValue = inputHeight.value;
    widthValue = inputWidth.value;
    cubeValue = inputCubeSize.value;
    colorCanvasValue = colorCanvas.value;
    reset();
})

cite(heightValue, widthValue, cubeValue, colorCanvasValue)