let buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    let display = document.querySelector('h1')
    
    if (button.id === 'equal') {
        button.addEventListener('click', () => calculate(display))
    } else if (button.id === 'clear') {
        button.addEventListener('click', () => clear(display))
    } else {
        button.addEventListener('click', () => show(button, display))
    }
})

function show(btn, dis) {
    // console.log(btn.id)
    let val = btn.textContent;
    if (dis.innerText.includes('Enter')) {
        clear(dis)
        dis.innerText = val
    } else {
        dis.innerText += val
    }

}

function clear(dis) {
    dis.innerText = ''
}

function calculate(dis) {
    console.log('working!')
    console.log(dis.innerText)
    let result = eval(dis.innerText)
    dis.innerText = result

}










//when we add a val, we want it to concatenate with the rest of the vals
// function storeVals(btn) {
//     let val = btn.textContent;
//     let calc;
//     if (btn.className === 'operator' && num1.length < 1) {
//         display.innerText = 'You must enter a number to begin'
//     } else if (btn.className === 'operator' && num1.length >= 1) {
//         operator += val
//         display.innerText += operator
//     } else if (btn.className === 'number' && operator.length < 1) {
//         num1 += val
//         display.innerText = num1
//     } else if (btn.className === 'number' && operator.length >= 1) {
//         num2 += val
//         display.innerText += val
//     } else if (btn.id === 'equal' && num1.length >= 1 && operator.length >= 1 && num2.length >= 1) {
//         calc = new MakeCalculation(num1, operator, num2)
//         console.log(calc)
//         display.innerText = calc.getCalc()
//     }
// }

// class MakeCalculation {
//     constructor(num1, operator, num2) {
//         this.num1 = Number(num1)
//         this.operator = operator
//         this.num2 = Number(num2) 
//     }
//     getCalc() {
//         let calc;
//         if (this.operator === '+') {
//             calc = this.num1 + this.num2
//         } else if (this.operator === '-') {
//             calc = this.num1 - this.num2
//         } else if (this.operator === '/') {
//             calc = this.num1 / this.num2
//         } else if (this.operator === 'x') {
//             calc = this.num1 * this.num2
//         }
//         return calc
//     }
// }

// function storeVals(val) {
//     localStorage.setItem('num', val)
// }

// console.log(document.querySelectorAll('.number'))
// console.log(document.querySelectorAll('.operator'))

