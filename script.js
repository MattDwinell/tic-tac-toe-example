document.addEventListener('DOMContentLoaded', function(){
    console.log('hi');
    gameStart = false;
function startGame(){
    if(gameStart === false) gameStart = true;
    console.log(gameStart);
}
function resetGame(){
    gameStart = false;
    console.log(gameStart);
    choiceArray = ['','','','','','','','', ''];
    document.querySelectorAll('.tile').forEach(tile=>{
        tile.textContent = ' ';
    })
    choicesMade = 0;
}
function tileClickHandler(tile){
    console.log(tile);
    let i = tile.getAttribute("data");
    console.log(i);
    let text = tile.textContent;
    console.log(text);
    if(gameStart && tile.textContent != 'X' && tile.textContent != 'O' ){
        tile.textContent = xOrO;
        xOrO = xOrO == 'X' ? 'O' : 'X';
        choiceArray[i] = tile.textContent;
        choicesMade++;
        gameStatusEvaluator();

    } else {
        console.log('game over or choice already made');
    }
}
function gameStatusEvaluator(){
    console.log(choiceArray);
    let rowOne = [choiceArray[0], choiceArray[1], choiceArray[2]];
    let rowTwo = [choiceArray[3], choiceArray[4], choiceArray[5]];
    let rowThree = [choiceArray[6], choiceArray[7], choiceArray[8]];
    let colOne = [choiceArray[0], choiceArray[3], choiceArray[6]];
    let colTwo = [choiceArray[1], choiceArray[4], choiceArray[7]];
    let colThree = [choiceArray[2], choiceArray[5], choiceArray[8]];
    let diagOne = [choiceArray[0], choiceArray[4], choiceArray[8]];
    let diagTwo = [choiceArray[6], choiceArray[4], choiceArray[2]];
    let possibleCombos = [rowOne, rowTwo, rowThree, colOne, colTwo, colThree, diagOne, diagTwo];
    let gameWinner = '';
    let test = possibleCombos.map((combo)=>{
        console.log(combo);
        if(combo[0] == combo[1] && combo[0] == combo[2] && (combo[0] === 'X' || combo[0] === 'O')){
            gameWinner = combo[0];
        }
        return combo;
    })
    if(gameWinner != ''){
        gameWin(gameWinner);
    } else if(choicesMade >= 9) {
        gameWin('no one');
    }


}
let winner = '';
function gameWin(winner){
if(winner === 'X') xWins++;
else if(winner === 'O') oWins++;
else draws ++
alert(winner + ' has won!');
resetGame();
document.getElementById('xwins').textContent = xWins;
document.getElementById('owins').textContent = oWins;
document.getElementById('draws').textContent = draws;
}
let xWins = 0;
let oWins = 0;
let draws = 0;
let xOrO = 'X';
let tileCounter = 0;
let choicesMade = 0;
var choiceArray = ['','','','','','','','',''];
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
// var tiles = document.getElementsByClassName('tile');
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
var tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
    let index = tileCounter;
    tile.setAttribute('data', tileCounter);
    tileCounter++;
    tile.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        tileClickHandler(tile);
    })
  })








})