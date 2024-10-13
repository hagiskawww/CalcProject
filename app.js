// let num = 42
// let firstName = 'Vlad'
// const isProgrammer = true
//
// /* Can Do
//  let $ = 'test'
//  let $num = 42
//  let num$ = 42
//  let _ = 49
//  let _num = 12
//  let num_ = 12
//  let first_name = 'Elena' // bad
//  let myNum = 34 // good
//  let num42 = 10
//
//  firstName = 'Max'
//  isProgrammer = false // error because of const *
//
// // Restricted
// // let 42num = '11'
// // let ny-num = 18
// // let false = 23
// // alert(firstName)
// // console.log( 'Test:', firstName, isProgrammer, num)
// // console.log(num + 10)
// // console.log(num - 10)
// // console.log(num * 10)
// // console.log(num / 10)
// // console.log(num)
// //
// // let num2 = num + 10
// // console.log(num)
// // console.log(num2)
// // num = num2 - num
// // console.log(num, num2)
// //
// // let num3 = (num + 10) * 2 / (5 - 1)
// //  console.log(num3) */
//
// // const fullName = firstName + ' Zhuravitsky'
// // const fullName = firstName + ' ' + 'Zhuravitsky'
// // console.log(fullName)
//
// const resultElement = document.getElementById('result')
// const input1 = document.getElementById('input1')
// const input2 = document.getElementById('input2')
// const submitButton = document.getElementById('submit')
// const submitPlus = document.getElementById('plus')
// const submitMinus = document.getElementById('minus')
// let action = '+'
//
//
// // console.log(resultElement.textContent)
// // resultElement.textContent = 42
//
// // console.log(sum)
//
// submitPlus.onclick = function () {
//     action = '+'
// }
//
// submitMinus.onclick = function () {
//     action = '-'
// }
//
// function printResult (result) {
//     if (result < 0) {
//         resultElement.style.backgroundColor = "red"
//     } else if (result > 0) {
//         resultElement.style.backgroundColor = "green"
//     }
//     resultElement.textContent = result
// }
//
// function computeNumbersWithAction (inp1, inp2, actionSymbol) {
//     const num1 = Number(inp1.value)
//     const num2 = Number(inp2.value)
//
//     // if (actionSymbol == '+') {
//     //     return num1 + num2
//     // } else if (actionSymbol == '-') {
//     //     return num1 - num2
//     // }
//
//     return actionSymbol == '+' ? num1 + num2 : num1 - num2
// }
//
// submitButton.onclick = function () {
//     const result = computeNumbersWithAction(input1, input2, action)
//     printResult(result)
//     // if (action == '+') {
//     //     const sum = Number(input1.value) + Number(input2.value)
//     //     printResult(sum)
//     // } else if (action == '-') {
//     //     const sum = Number(input1.value) - Number(input2.value)
//     //     printResult(sum)
//     // }
//
// }

