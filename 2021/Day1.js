const fs = require('fs');
const input = fs.readFileSync('input.txt',{encoding: 'utf-8'}).split('\n').map(Number);
let increases = 0;
function solution1(currentValue, index, arr){
    if (index > 0){
        if (arr[index-1] < currentValue){
          increases++
        }
    }
}
input.forEach(solution1);
console.log(increases);
function solution2(){
  let windowSums = []
  for (let i = 1; i <= input.length - 2; i++) {
    windowSums.push(input[i-1] + input[i] + input[i+1])
  }
  return windowSums
}
increases = 0;
solution2().forEach(solution1);
console.log(increases);