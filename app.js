const resultEl = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const submitBtn = document.getElementById('submit')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplyBtn.onclick = function () {
    action = '*'
}

divideBtn.onclick = function () {
    action = '/'
}

function printResult (result) {
    if (result < 0) {
        result.style.color = "red"
    } else if (result > 0) {
        result.style.color = "green"
    }

    resultEl.textContent = result.value
}

function calc (inp1, inp2, asc) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    if (asc == '+') {
        return num1 + num2
    } else if (asc == '-') {
        return num1 - num2
    } else if (asc == '*') {
        return num1 * num2
    } else if (asc == '/') {
        return num1 / num2
    }

}

submitBtn.onclick = function calcResult () {
    const result = calc (input1, input2, action)
    printResult (resultEl.textContent = result)
}


