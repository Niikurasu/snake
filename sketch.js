let snake;
let rez = 50;
let food;
let w;
let h;

function setup() {
  createCanvas(600, 600);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
  
}

function touchStarted() {
    if(mouseY < height/4 && snake.getDirY() !== 1) { // up
        snake.setDir(0, -1);
    } else if(mouseY > 3/4*height && snake.getDirY() !== -1) { // down
        snake.setDir(0, 1);
    } else if(mouseX < width/4 && snake.getDirX() !== 1){ // left
        snake.setDir(-1, 0);
    } else if(mouseX > 3/4*width && snake.getDirX() !== -1) { // right
        console.log(snake.getDirX())
        snake.setDir(1, 0);
    }
}

function keyPressed() {
  if(keyCode === LEFT_ARROW&& snake.getDirX() !== 1) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW&&snake.getDirX() !== -1) {
  	snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW&& snake.getDirY() !== -1) {
  	snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW&& snake.getDirY() !== 1) {
  	snake.setDir(0, -1);
  } else if (key == ' ') {
  	snake.grow();
  }

}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
     foodLocation();
  }
  snake.update();
  snake.show();
  
  
  if (snake.endGame()) {
  	print("END GAME");
    background(255, 0, 0);
    noLoop();
  }
  
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
