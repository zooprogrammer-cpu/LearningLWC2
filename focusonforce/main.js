import {multiply,divide,SERVER_IP} from './modules/modules.js'
let a = 5;
let b = 7;
console.log(`Multiplication:`,multiply(a,b))
console.log(`Division:`, parseFloat(divide(a,b).toFixed(2)))
console.log(`The server IP is:`, SERVER_IP)