// let one = document.querySelector('#one')
// let two = document.querySelector('#two')
// let three = document.querySelector('#three')
// let four = document.querySelector('#four')
// let five = document.querySelector('#five')
// let six = document.querySelector('#six')
// let seven = document.querySelector('#seven')
// let eight = document.querySelector('#eight')
// let nine = document.querySelector('#nine')
// let decimalPoint = document.querySelector('#point')
// let equalSign = document.querySelector('#equal')
// let subtract = document.querySelector('#subtract')
// let add = document.querySelector('#add')
// let multiply = document.querySelector('#multiply')
// let divide = document.querySelector('#divide')

let buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', () => displayText(button.textContent))
})


function displayText(val) {
    console.log(val, typeof val)
    let numVals = []
    numVals.push(val)
    // let num = new MakeNum(val)
    // console.log(num)
    document.querySelector('h1').innerText = numVals
}

class MakeNum {
    constructor(...num) {
        this.num = [...num]
    }
    getNumber() {
        this.num.reduce((acc, curr) => acc + curr)
    }
}


