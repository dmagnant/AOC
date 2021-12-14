const fs = require('fs');
let input = fs.readFileSync('input.txt',{encoding: 'utf-8'}).split('\r\n').map((x) => {return x.split('')})
// console.table(input)

function isMatched(sym1, sym2){
    if (sym1 == '('){
        return (sym2 == ')') ? true : false
    }
    else if (sym1 == '['){
        return (sym2 == ']') ? true : false
    }
    else if (sym1 == '{'){
        return (sym2 == '}') ? true : false
    }
    else if (sym1 == '<'){
        return (sym2 == '>') ? true : false
    }
}

function removeSmallChunks(){
    for (i=0;i<input.length;i++){
        for(j=0;j<input[i].length;j++){
            if (isMatched(input[i][j], input[i][j+1])){
                input[i].splice(j, 2)
                j=-1
            }
        }
    }
}

removeSmallChunks()
// console.table(input)

function findFirstIllegalCharacter(){
    for (i=0;i<input.length;i++){
        for(j=0;j<input[i].length;j++){
            if (input[i][j] == ']' || input[i][j] == ')' || input[i][j] == '}' || input[i][j] == '>'){
                if (!isMatched(input[i][j-1], input[i][j])){
                    illegalCharacters.push(input[i][j])
                    illegalRows.push(i)
                    j = input[i].length
                }
            }
        }
    }
}

let illegalCharacters = [];
let illegalRows = []
findFirstIllegalCharacter()
// console.table(illegalCharacters)

function syntaxErrorScore(total, num){
    if (num == ')'){
        return total + 3
    }
    else if (num == ']'){
        return total + 57
    }
    else if (num == '}'){
        return total + 1197
    }
    else if (num == '>'){
        return total + 25137
    }
}
answer1 = illegalCharacters.reduce(syntaxErrorScore, 0)
console.log(answer1)

function answer2(){
    illegalRows.forEach((x) => {input[x] = input[x].map(() => {return '-'})})
    // console.table(input)

    completedLines = []
    for (i=0;i<input.length;i++){
        let completed_line = []
        for (j=input[i].length;j>=0;j--){
            if (input[i][j] == '('){
                completed_line.push(')')
            }
            else if (input[i][j] == '['){
                completed_line.push(']')
            }
            else if (input[i][j] == '{'){
                completed_line.push('}')
            }
            else if (input[i][j] == '<'){
                completed_line.push('>')
            }

        }
        completedLines.push(completed_line)
    }
    // console.table(completedLines)

    autoCompleteScores = []
    function autoCompleteScore(total, num){
        if (num == ')'){
            return total * 5 + 1
        }
        else if (num == ']'){
            return total * 5 + 2
        }
        else if (num == '}'){
            return total * 5 + 3
        }
        else if (num == '>'){
            return total * 5 + 4
        }
    }
    for (let i=0;i<completedLines.length;i++){
        autoCompleteScores.push(completedLines[i].reduce(autoCompleteScore, 0))
    }

    while (autoCompleteScores.indexOf(0) >=0){
        autoCompleteScores.splice(autoCompleteScores.indexOf(0), 1)
    }

    autoCompleteScores.sort((function(a, b){return b-a}))

    while (autoCompleteScores.length > 1){
        autoCompleteScores.shift()
        autoCompleteScores.pop()
    }
    return autoCompleteScores[0]
}
answer2 = answer2()
console.log(answer2)