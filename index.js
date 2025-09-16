// function Name(name) {
//     alert("Your name: ", name);
// }
//
// let name = prompt("What is your name?");
// Name(name);

// 1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
// function MinNumber(number1, number2) {
//     if(number1 > number2) {
//         document.write(number1);
//     } else {
//         document.write(number2);
//     }
// }
// let num1 = parseInt(prompt("Enter a number1"));
// let num2 = parseInt(prompt("Enter a number2"));
// MinNumber(num1, num2);
// 2. Написать функцию, которая возводит переданное число в указанную степень.
// function Pawor(num1, num2) {
//     return num1 ** num2;
// }
// let num1 = parseInt(prompt("Enter num1: "));
// let num2 = parseInt(prompt("Enter num2: "));
// document.write(Pawor(num1, num2));
// 3. Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат.
// function Kalukyletor(num1, num2, znak) {
//     switch(znak) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if(num2 = 0) {
//                 return 1;
//             } else {
//                 return num1 / num2;
//             }
//     }
// }
// let number1 = parseInt(prompt("Enter number1"));
// let number2 = parseInt(prompt("Enter number2"));
// let znac = parseInt(prompt("Enter znac"));
// document.write(Kalukyletor(number1, number2, znac));
// 4. Написать функцию, которая проверяет, является ли переданное ей число простым.
// function SimpleNumber(num) {
//     if(num % num === 0 || num % 1 === 0) {
//         return 0;
//     } else {
//         return 1;
//     }
// }
//
// let number = parseInt(prompt("Enter number: "));
// SimpleNumber(number);
