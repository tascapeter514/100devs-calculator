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

let num1 = ''
let num2 = ''


//when we add a val, we want it to concatenate with the rest of the vals
function displayText(val) {
    console.log(val, typeof val)
    nums += val
    // let num = new MakeNum(val)
    // console.log(num)
    document.querySelector('h1').innerText = nums
}

class MakeNum {
    constructor(operator, ...num1, ...num2) {
        this.num = [...num]
    }
    getNumber() {
        this.num.reduce((acc, curr) => acc + curr)
    }
}

function storeVals(val) {
    localStorage.setItem('num', val)
}

console.log(document.querySelectorAll('.number'))
console.log(document.querySelectorAll('.operator'))

