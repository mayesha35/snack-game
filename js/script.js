//Game variables and constants
let board = document.querySelector("#board");
let direction = {
  x: 0,
  y: 0,
};
const foodSound = new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameover.mp3");
const moveSound = new Audio("../music/move.mp3");
const gameBGSound = new Audio("../music/music.mp3");
let speed = 2;
let lastPrintTime = 0;
let snakeArr = [
  {
    x: 13,
    y: 15,
  },
];
let food = { x: 6, y: 7 };
//Game Functions
function main(currentTime) {
  window.requestAnimationFrame(main);
  if ((currentTime - lastPrintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPrintTime = currentTime;
  gameEngine();
}

function gameEngine() {
  //part1:updating the snake array(body of the snake) & food array
  //part2:render/display the snake and food on screen
  // Display the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

//Game Main Logic starts here
window.requestAnimationFrame(main);
