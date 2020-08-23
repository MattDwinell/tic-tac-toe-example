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
}
function tileClickHandler(index){
    console.log(index);
}
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const tiles = document.getElementsByClassName('tile');
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
for(let i=0; i< tiles.length; i++){
    tiles[i].addEventListener('click', tileClickHandler(i));
}








})