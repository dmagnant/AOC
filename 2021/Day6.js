const fs = require('fs');
let input = fs.readFileSync('report.txt',{encoding: 'utf-8'}).split(',')

function timer(element){
    if (element == 0){
        newfish++
        // console.log('newfish: ', newfish)
        return 6
    }
    else {
        return (parseInt(element) - 1)    
    }
}

function newDay(prevDay){
    nextDay = prevDay.map(timer)
    for (newfish;newfish>0;newfish--){
        nextDay.push(8)
    }
    // console.log('day: ', day++)
    // console.table(nextDay)
    return nextDay.length
}

let prevDay = [...input]
let newfish = 0
let nextDay = []
for (i=1;i<=18;i++){
    fish = newDay(prevDay)
    prevDay = [...nextDay]
}
console.log(fish)