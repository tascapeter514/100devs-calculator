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
let num1 = ''
let operator = ''
let num2 = ''


buttons.forEach(button => {
    button.addEventListener('click', () => storeVals(button))
})




//when we add a val, we want it to concatenate with the rest of the vals
function storeVals(btn) {
    let val = btn.textContent;
    let calc;
    if (btn.className === 'operator' && num1.length < 1) {
        document.querySelector('h1').innerText = 'You must enter a number to begin'
    } else if (btn.className === 'operator' && num1.length >= 1) {
        operator += val
        document.querySelector('h1').innerText += operator
    } else if (btn.className === 'number' && operator.length < 1) {
        num1 += val
        document.querySelector('h1').innerText = num1
    } else if (btn.className === 'number' && operator.length >= 1) {
        num2 += val
        document.querySelector('h1').innerText += val
    } else if (btn.id === 'equal' && num1.length >= 1 && operator.length >= 1 && num2.length >= 1) {
        calc = new MakeCalculation(num1, operator, num2)
        console.log(calc)
        document.querySelector('h1').innerText = calc.getCalc()
    }
}

class MakeCalculation {
    constructor(num1, operator, num2) {
        this.num1 = Number(num1)
        this.operator = operator
        this.num2 = Number(num2) 
    }
    getCalc() {
        let calc;
        if (this.operator === '+') {
            calc = this.num1 + this.num2
        } else if (this.operator === '-') {
            calc = this.num1 - this.num2
        } else if (this.operator === '/') {
            calc = this.num1 / this.num2
        } else if (this.operator === 'x') {
            calc = this.num1 * this.num2
        }
        return calc
    }
}

// function storeVals(val) {
//     localStorage.setItem('num', val)
// }

// console.log(document.querySelectorAll('.number'))
// console.log(document.querySelectorAll('.operator'))

