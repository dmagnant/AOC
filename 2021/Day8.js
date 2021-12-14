const fs = require('fs');
let input = fs.readFileSync('input.txt',{encoding: 'utf-8'}).split('\r')
// console.table(input)

function formatArr(arr){
    for (i=0;i<arr.length;i++){
        arr[i] = arr[i].split(' ')
        for (j=0;j<arr[i].length;j++){
            arr[i][j] = arr[i][j].split('').sort().join('');
        }
    }
}

function countUniqueValues1(element){
    if (uniqueLengths.includes(element.length)){
        uniqueValues++
    }
}

function countUniqueValues2(element, index){
    if (element.length == 2){
        digitValues[index] = 1
    }
    else if (element.length == 4){
        digitValues[index] = 4  
    }
    else if (element.length == 3){
        digitValues[index] = 7
    }
    else if (element.length == 7){
        digitValues[index] = 8
    }
}

function getDifference(a, b)
{
    var i = 0;
    var j = 0;
    var result = "";

    while (j < b.length)
    {
     if (a[i] != b[j] || i == a.length)
         result += b[j];
     else
         i++;
     j++;
    }
    return result;
}

function find3(element, index){
    if (element.length == 5 && element.includes((uniqueSignals[this][digitValues.indexOf(1)])[0]) && element.includes((uniqueSignals[this][digitValues.indexOf(1)])[1])){
            digitValues[index] = 3
        }
}

function find5and2(element, index){
    if (element.length == 5 && digitValues[index] == undefined){
        digitValues[index] = element.includes(configuration[1]) ? 5 : 2
        }
    }

function find6(element, index){
    if (element.length == 6){
        if (!element.includes((uniqueSignals[this][digitValues.indexOf(1)])[0]) || !element.includes((uniqueSignals[this][digitValues.indexOf(1)])[1])){
                digitValues[index] = 6
        }
    }   
}

function find9and0(element, index){
    if (element.length == 6 && digitValues[index] == undefined){
        digitValues[index] = element.includes(configuration[4]) ? 0 : 9
        }
    }

function getOutput(element){
    uniqueSignals[this].forEach((item, index) => {
        if (item == element){
            value = digitValues[index]
        }
    })
    return value
}

let inputCopy = [...input]
    uniqueSignals = []
    outputValues = []
    uniqueValues = 0

const uniqueLengths = [2, 4, 3, 7]

while (inputCopy.length > 0){
    uniqueSignals.push(inputCopy.shift().replace('| ','').trim())
}
formatArr(uniqueSignals)

for (i=0;i<uniqueSignals.length;i++){
    outputValues.push(uniqueSignals[i].splice(10, 4))
}

function computeAnswer1(){
    outputValues.forEach(function (item) {item.forEach(countUniqueValues1)});
    return uniqueValues
}
answer1 = computeAnswer1()
console.log(answer1)

function computeAnswer2(){
    answer2 = 0
    for (i=0;i<uniqueSignals.length;i++){
        digitValues = new Array(10)
        configuration = new Array(7)
        uniqueSignals[i].forEach(countUniqueValues2);
        configuration[0] = getDifference(uniqueSignals[i][digitValues.indexOf(1)], uniqueSignals[i][digitValues.indexOf(7)])
        uniqueSignals[i].forEach(find3, i)
        config1 = getDifference(uniqueSignals[i][digitValues.indexOf(1)], uniqueSignals[i][digitValues.indexOf(4)]).split('')
        configuration[1] = uniqueSignals[i][digitValues.indexOf(3)].includes(config1[0]) ? config1[1] : config1[0]
        uniqueSignals[i].forEach(find5and2)
        uniqueSignals[i].forEach(find6, i)
        configuration[4] = getDifference(uniqueSignals[i][digitValues.indexOf(5)], uniqueSignals[i][digitValues.indexOf(6)])
        uniqueSignals[i].forEach(find9and0)
        answer2 += parseInt(outputValues[i].map(getOutput, i).join(''))
    }
    return answer2
}
answer2 = computeAnswer2()
console.log(answer2)