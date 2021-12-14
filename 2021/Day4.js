const fs = require('fs');
const input = fs.readFileSync('input.txt',{encoding: 'utf-8'}).split('\r\n');
// console.table(input)

function formatBingoBoards(){
    bingo_board_numbers = [...input]

    bingo_board_numbers.shift()
    // console.table(bingo_board_numbers)

    bingo_board_numbers = removeEmptyElements(bingo_board_numbers)
    // console.table(bingo_board_numbers)

    for (let i = 0; i < bingo_board_numbers.length; i++){
        bingo_board_numbers[i] = removeEmptyElements(bingo_board_numbers[i].split(' '))
    }
    // console.table(bingo_board_numbers)

    for (let i = 0; i < bingo_board_numbers.length; i++){
        bingo_board_numbers[i] = bingo_board_numbers[i].map(pad)
    }

    bingo_boards = removeEmptyElements(assignBoards(bingo_board_numbers, []))
    // console.table(bingo_boards)

    for (let i = 0; i < bingo_boards.length; i++){
        bingo_boards[i] = bingo_boards[i].split(',')
    }
    return bingo_boards
}

function pad(element) {
    num_str = element.toString();
    while (num_str.length < 2) num_str = "0" + num_str;
    return num_str;
}

function removeEmptyElements(array) {
    filteredArray = array.filter(element => {
        return element.length > 0
    })
    return filteredArray
}

function assignBoards(oldArray, newArray){
    for (i = 0; i < oldArray.length; i += 5) {
        row = oldArray[i].toString() + ',' + oldArray[i + 1].toString() + ',' + oldArray[i + 2].toString() + ',' + oldArray[i + 3].toString() + ',' + oldArray[i + 4].toString()
        newArray.push(row)
    }
    return newArray
}

function nextNumber() {
    numbersSelected.push(pad(numbersToBeCalled.shift()))
    return numbersSelected[numbersSelected.length-1]
}

function findNumberInCards() {
    let cards = []
    let rows = []
    let columns = []
    for (let i = 0; i < bingo_boards.length; i++){
        for (let j = 0; j < bingo_boards[i].length; j++){
            if (numbersSelected[numbersSelected.length-1] === (bingo_boards[i][j])){
                cards.push(i)
                rows.push(Math.floor(parseInt(j) / 5))
                columns.push(Math.floor(parseInt(j) % 5))
            }
        }
    }
    return [cards, rows, columns]
}

function getRowValues(i){
    row = [];
    for (let j = 0; j < bingo_boards[number_locations[0][i]].length; j++){
        if (Math.floor(parseInt([j]) / 5) === number_locations[1][i]){
            row.push(bingo_boards[number_locations[0][i]][j])
        }
    }
    return row
}

function getColumnValues(i){
    column = [];
    for (let j = 0; j < bingo_boards[number_locations[0][i]].length; j++){
        if (Math.floor(parseInt([j]) % 5) === number_locations[2][i]){
            column.push(bingo_boards[number_locations[0][i]][j])
        }
    }
    return column     
}

function checkBingo(number_locations){
    // iterate through the cards the number is found on
    for (i = 0; i < number_locations[0].length; i++){
        // iterate through the respective row's numbers to check for matches
        row = getRowValues(i)
        numbers_matched = 0
        for(r = 0; r < row.length; r++){
            if (numbersSelected.includes(row[r])){
                numbers_matched++
            }
        }
        // return card # of Bingo winner
        if (numbers_matched === 5){
            return number_locations[0][i]
        }
        // iterate through the respective column's numbers to check for matches
        column = getColumnValues(i)
        numbers_matched = 0
        for(c = 0; c < column.length; c++){
            if (numbersSelected.includes(column[c])){
                numbers_matched++
            }
        }
        // return card # of Bingo winner
        if (numbers_matched === 5){
            return number_locations[0][i]
        }
    }
    return 'not found'
}

function findUnmarked(element){
    return (numbersSelected.includes(element)) ? 0 : parseInt(element)
}

function sum(total, num){
    return total + parseInt(num);
}

function indexOfLastWinningNum(element, index){
    if (parseInt(element) === parseInt(this)){
        return index
    }
}

function reduceNumbersSelected(index) {
    let numbers = []
    for (let i=0; i<=index;i++) {
        numbers.push(numbersSelected[i])
    }
    return numbers
}

let numbersToBeCalled = input[0].split(',');
let numbersSelected = []
bingo_boards = formatBingoBoards()
function answer1(){
    let isBingo = 'not found'
    while (isBingo === 'not found'){
        isBingo = 'not found'
        nextNumber()
        number_locations = findNumberInCards()
        isBingo = checkBingo(number_locations)
    }
    return bingo_boards[isBingo].map(findUnmarked).reduce(sum) * numbersSelected[numbersSelected.length-1]
}
console.log(answer1())


let numbersToBeCalled = input[0].split(',');
let numbersSelected = []
bingo_boards = formatBingoBoards()

function answer2(){
  let winningBoards = []
  let winningNumbers = []
  let isBingo = 'not found'
  while (numbersToBeCalled.length > 0){
    isBingo = 'not found'
    while (isBingo === 'not found'){
        nextNumber()
        number_locations = findNumberInCards()
        isBingo = checkBingo(number_locations)
    }
    if (!winningBoards.includes(isBingo)){
        winningBoards.push(isBingo)
        winningNumbers.push(pad(numbersSelected[numbersSelected.length-1]))
    }
  }
  indexOfLastWinningNumber = numbersSelected.findIndex(indexOfLastWinningNum, winningNumbers[winningNumbers.length-1])
  numbersSelected = reduceNumbersSelected(indexOfLastWinningNumber)
  console.log(winningNumbers)
  console.log(winningBoards)
//   console.log(numbersSelected)
  return parseInt(bingo_boards[winningBoards[winningBoards.length-1]].map(findUnmarked).reduce(sum)) * parseInt(winningNumbers[winningNumbers.length-1])
}
console.log(answer2())