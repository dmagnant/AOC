const fs = require('fs');
let input = fs.readFileSync('input.txt',{encoding: 'utf-8'}).split(',').map((x) => parseInt(x)).sort(function(a, b){return a-b});
// console.table(input)

function fuelUsage1(element){
    fuel = fuel + Math.abs(element - this)
}

function fuelUsage2(element){
  diff = Math.abs(element - this)
  for (let i=diff;i>0;i--){
    fuel = fuel + i
  }
}

function logFuelUsage1(){
    let fuelUsed = []
    for (i=0;i<inputCopy[inputCopy.length-1];i++){
      fuel = 0
        input.forEach(fuelUsage1, i)
        // console.log(fuel)
        fuelUsed.push(fuel)
    }
    return fuelUsed.sort(function(a, b){return a-b})
}

function fuelUsage2(element){
  diff = Math.abs(element - this)
  for (let i=diff;i>0;i--){
    fuel = fuel + i
  }
}

function logFuelUsage2(){
  let fuelUsed = []
  for (i=0;i<inputCopy[inputCopy.length-1];i++){
      fuel = 0
      input.forEach(fuelUsage2, i)
      fuelUsed.push(fuel)
  }
  return fuelUsed.sort(function(a, b){return a-b})
}

inputCopy = [...input]
let fuel = 0
const fuelUsed1 = logFuelUsage1()
console.log(fuelUsed1[0])
const fuelUsed2 = logFuelUsage2()
console.log(fuelUsed2[0])