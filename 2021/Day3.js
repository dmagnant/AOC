const fs = require('fs');
const input = fs.readFileSync('input.txt',{encoding: 'utf-8'}).split('\n');

let zeros = 0;
let ones = 0;

function constructBitArray1(value){
  return value[this]
}

function countBits(value){
  (parseInt(value[0]) === 0) ? zeros++ : ones++
}

function getPowerConsumption(){
  let gammaArray = [];
  let epsilonArray = [];
  for (let i = 0; i < input[1].length - 1; i++) {
    zeros = 0;
    ones = 0;
    input.map(constructBitArray1, i).forEach(countBits);
    (zeros > ones) ? gammaArray.push(0) : gammaArray.push(1);
    (zeros > ones) ? epsilonArray.push(1) : epsilonArray.push(0);
  }
const gammaDecimal = parseInt(gammaArray.join(''), 2);
const epsilonDecimal = parseInt(epsilonArray.join(''), 2);
const powerConsumption = gammaDecimal * epsilonDecimal;
return powerConsumption;
}
console.log(getPowerConsumption());

function constructBitArray2(value){
  if (parseInt(value[this[0]]) === parseInt(this[1])) {
    this[2].push(value)
  }
}

function getOxygenRating(originalArray) {
  let index = 0;
  let newArray = [];
  while (originalArray.length > 1){
    newArray = [];
    zeros = 0;
    ones = 0;
    originalArray.map(constructBitArray1, index).forEach(countBits);
    (ones >= zeros) ? originalArray.forEach(constructBitArray2, [index, 1, newArray]) : originalArray.forEach(constructBitArray2, [index, 0, newArray]);
    originalArray = newArray.map((x) => x);
    index++
  }
  return newArray
}

function getCO2Rating(originalArray) {
  let index = 0;
  let newArray = [];
  while (originalArray.length > 1){
    newArray = [];
    zeros = 0;
    ones = 0;
    originalArray.map(constructBitArray1, index).forEach(countBits);
    (zeros <= ones) ? originalArray.forEach(constructBitArray2, [index, 0, newArray]) : originalArray.forEach(constructBitArray2, [index, 1, newArray]);
    originalArray = newArray.map((x) => x);
  index++
  }
  return newArray
}
function getLifeSupportRating(){
  const oxygenRating = parseInt(getOxygenRating(input).join(''), 2);
  const co2Rating = parseInt(getCO2Rating(input).join(''), 2);
  const lifesupport = oxygenRating * co2Rating;
  return lifesupport
}

console.log(getLifeSupportRating());