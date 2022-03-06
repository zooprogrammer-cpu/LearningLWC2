import {multiplynow as multiplyFile,dividenow as divideFile,SERVER_IP} from './modules/modules.js'
let a = 5;
let b = 7;
console.log(`Multiplication:`,multiplyFile(a,b))
console.log(`Division:`, parseFloat(divideFile(a,b).toFixed(2)))
console.log(`The server IP is:`, SERVER_IP)