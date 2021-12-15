const fs = require('fs');
let input = fs.readFileSync('input.txt',{encoding: 'utf-8'}).split('\r\n').map((x) => {return x.split('')}).map((x)=>x.map(Number));
// console.table(input);

function checkFlash(e1,i1){
    e1.forEach((e2,i2)=>{
        if(e2 > 9){
            this.push([i1,i2])
        }
    })
};

function energyTransfer(item){
    const r = item[0];
    const c = item[1];
    // top left
    validateCoords(r-1,c-1);
    // top
    validateCoords(r-1,c);
    // top right
    validateCoords(r-1,c+1);
    // left
    validateCoords(r,c-1);
    // right
    validateCoords(r,c+1);
    // bottom left
    validateCoords(r+1,c-1);
    // bottom
    validateCoords(r+1,c);
    // bottom right
    validateCoords(r+1,c+1);
};

function validateCoords(row, col){
    if (row >= 0 && col >= 0 && row < input.length && col < input[row].length){
        input[row][col] +=1
    }
};

function compareFlashPoints(checkPoints, stepPoints){
    for (i=0;i<checkPoints.length;i++){
        let matched = false;
        for (j=0;j<stepPoints.length;j++){
            if (checkPoints[i][0] == stepPoints[j][0] && checkPoints[i][1] == stepPoints[j][1]){
                matched = true;
                checkPoints.splice(i, 1)
                i--
                break
            }
        }
        if (!matched){
            stepPoints.push([checkPoints[i][0], checkPoints[i][1]])
            totalFlashes++
        }
        else {
            continue
        }
    }
}

let stepPoints = [];
let checkPoints = [];
let totalFlashes = 0;
let allFlash = 0
// count the steps
for (let step=1;step<=500;step++){
    stepPoints = []
    checkPoints = []
    // increase all by one
    input = input.map((x)=>x.map((n)=>n+1))
    let newflashes = true
    let flashes = checkPoints.length;
    while (newflashes) {
        checkPoints = []
        // check for flash
        input.forEach(checkFlash, checkPoints);
        if (checkPoints.length > 0){
            compareFlashPoints(checkPoints, stepPoints)
            if (stepPoints.length > flashes){
                // transfer Energy
                checkPoints.forEach(energyTransfer);
                flashes = stepPoints.length;
            }
            else {
                newflashes = false
            }
        }
        else {
            newflashes = false
        }
    }
    // reduce FlashPoints to Zero
    input = input.map((x)=>x.map((n)=>{return (n > 9) ? 0 : n}))

    // count zeros
    let zeros = 0;
    for (let i=0;i<input.length;i++){
        for(let j=0;j<input[i].length;j++){
            if (input[i][j] == 0){
                zeros++
            }
            else{
                break
            }
        }
    }
    if (zeros == 100){
        allFlash = step
        break
    }
}
// answer 1
console.log(totalFlashes)
// answer 2
console.log(allFlash)