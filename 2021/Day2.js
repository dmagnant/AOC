const fs = require('fs');
const input = fs.readFileSync('input.txt',{encoding: 'utf-8'}).split('\n');

let horizontal = 0,
    depth = 0;
    aim = 0;
  
function moveSubmarine1(currentValue) {
  const splitMovements = currentValue.split(' ')
  if (splitMovements[0] == 'forward'){
    horizontal = horizontal + parseInt(splitMovements[1])
  }
  else if (splitMovements[0] == 'up'){
    depth = depth - parseInt(splitMovements[1])
  }
  else if (splitMovements[0] == 'down'){
    depth = depth + parseInt(splitMovements[1])
  }
}

function moveSubmarine2(currentValue) {
  const splitMovements = currentValue.split(' ')
  if (splitMovements[0] == 'forward'){
    horizontal = horizontal + parseInt(splitMovements[1])
    depth = depth + (aim * parseInt(splitMovements[1]))
  }
  else if (splitMovements[0] == 'up'){
    aim = aim - parseInt(splitMovements[1])
  }
  else if (splitMovements[0] == 'down'){
    aim = aim + parseInt(splitMovements[1])
  }
}
input.forEach(moveSubmarine1);
console.log(horizontal * depth);

horizontal = 0,
depth = 0;
aim = 0;

input.forEach(moveSubmarine2);
console.log(horizontal * depth);