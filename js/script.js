//Game variables and constants
let direction = {
  x: 0,
  y: 0,
};
const foodSound = new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameover.mp3");
const moveSound = new Audio("../music/move.mp3");
const gameBGSound = new Audio("../music/music.mp3");
let speed = 2;
let lastPrinttime = 0;
let snakeArr = {
  x: 13,
  y: 15,
};
//Game Functions
function main(currentTime) {
  window.requestAnimationFrame(main);
  if ((currentTime - lastPrinttime) / 1000 > 1 / speed) {
    return;
  }
  currentTime = lastPrinttime;
  gameEngine();
}

function gameEngine() {
  //part1:updating the snake array(body of the snake) & food array
  //part2:render/display the snake and food on screen
}

//Game Main Logic starts here
window.requestAnimationFrame(main);
