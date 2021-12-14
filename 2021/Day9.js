const fs = require('fs');
let input = fs.readFileSync('input.txt',{encoding: 'utf-8'}).split('\r\n').map((element) => {return element.split('')}).map((element) => {return element.map((x) => {return parseInt(x)})})
// console.table(input)

function Answer1(){
    input.forEach( (element,index) => {
        element.forEach( 
            (item,indx) => {
            num = input[index][indx]

            // check left value
            if (input[index][indx-1] !== undefined){
                if (input[index][indx-1] >= num){
                    input[index][indx-1] = input[index][indx-1].toString()
                }
                else{
                    input[index][indx] = input[index][indx].toString()
                }
            }
            // check right value
            if (input[index][indx+1] !== undefined){
                if (input[index][indx+1] >= num){
                    input[index][indx+1] = input[index][indx+1].toString()
                }
                else{
                    input[index][indx] = input[index][indx].toString()
                }
            }
            // check top value
            if (index >=1){
                if (input[index-1][indx] !== undefined){
                    if (input[index-1][indx] >= num){
                        input[index-1][indx] = input[index-1][indx].toString()
                    }
                    else{
                        input[index][indx] = input[index][indx].toString()
                    }
                }
            }
            // check bottom value
            if (index <input.length-1){
                if (input[index+1][indx] !== undefined){
                    if (input[index+1][indx] >= num){
                        input[index+1][indx] = input[index+1][indx].toString()
                    }
                    else{
                        input[index][indx] = input[index][indx].toString()
                    }
                }
            }

        })
    })

    riskLevel = 0
    
    for (i=0;i<input.length;i++){
        for (j=0;j<input[i].length;j++){
            if (typeof input[i][j] == 'number'){
                lowPointCoords.push([i, j])
                riskLevel += (input[i][j] + 1)
            }
        }
    }
    return riskLevel
}

lowPointCoords = []
basins = []
answer1 = Answer1()
console.log(answer1)

function floodFillRec(i, j, boundary) {
    // Check the boundary condition
    if (i < 0 || i >= input.length || j < 0 || j >= input[i].length) return;
    if (input[i][j] == boundary) return;
    basinSize++
    input[i][j] = 9
  
    // Look for neighboring cell
    floodFillRec(i - 1, j, boundary);
    floodFillRec(i + 1, j, boundary);
    floodFillRec(i, j + 1, boundary);
    floodFillRec(i, j - 1, boundary);
  }
  
  function answer2(){
  for (i=0;i<lowPointCoords.length;i++){
    basinSize = 0
    floodFillRec(lowPointCoords[i][0], lowPointCoords[i][1], '9');
    basins.push(basinSize)
  }
    // basins.map((x) => {return parseInt(x)})
    basins.sort(function(a, b){return b - a})
    answer2 = basins[0] * basins[1] * basins [2]
    return answer2
}
console.log(answer2())