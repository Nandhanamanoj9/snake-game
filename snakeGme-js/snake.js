// alert("Hello ,JavaScript is ready!");

// 1-  variable declaration



var cvs = document.getElementById("canvas").getContext("2d")
// 👉 This means:
// “Hey browser, give me the 2D drawing tool (context) so I can draw on this canvas.”
// "2d" = we’re using 2D (flat) graphics — not 3D.
var snakeposX = 80;
var snakeposY = 80;
// replaced x value nad y value of snake with a variable
var nPosx = 0;
var nPosy = 0;
// he variables var nPosx = 0; and var nPosy = 0; are essential state variables that store the current X and Y coordinates for a game object.
// To achieve continuous movement,
var fPosx = 140;
var fPosy = 140;
// fruit position x and y
var snakeTail = [];
var snakeSize = 0;
//inorder to control size of snake
var score = 0;
//store and ipdate score
var gameStatus = "ready";







//  2- on load functions:--- window full load aayi kazhinjal maaathre ee function run avullo:---
window.onload = function () {
    document.addEventListener("keydown", inputControl);
    game = setInterval(MainGame, 200);
}







//  3- Main Game Function:
function MainGame() {
    // alert("hello");
        document.getElementById("game-status").innerHTML =gameStatus;

    document.getElementById("score").innerHTML = score;

    //MOVE SNAKE:
    snakeposX = snakeposX + nPosx
    snakeposY = snakeposY + nPosy


    //CONTROLL SNAKE MOEVEMENT
if (snakeposX >= 400) {
    snakeposX = 0; // goes out on right → reappear left
}

if (snakeposX < 0) {
    snakeposX = 400 - 20; // goes out on left → reappear right
}

if (snakeposY >= 400) {
    snakeposY = 0; // goes out bottom → reappear top
}

if (snakeposY < 0) {
    snakeposY = 400 - 20; // goes out top → reappear bottom
}


    //Game area:

    //background colour
    cvs.fillStyle = "black";
    cvs.fillRect(0, 0, 400, 400)
    // cvs.fillRect(0, 0, 400, 400);we are commeting this nad going to give value of array
    cvs.fillStyle = "yellow";
    for (var i = 0; i < snakeTail.length; i++) {
    cvs.fillRect(
        snakeTail[i].x, 
        snakeTail[i].y, 
        20, 
        20
    );
// This IF statement is likely inside a loop that checks every tail segment
if (snakeposX == snakeTail[i].x && snakeposY == snakeTail[i].y && snakeSize > 1) {
    clearInterval(game) // Incomplete: missing the ID
   gameStatus ="Game  Over"
            document.getElementById("game-status").innerHTML = gameStatus
}

}

    // 0,0: The x and y coordinates of the top-left corner (starting at the top-left of the canvas).
    // 400: The width of the rectangle.
    // 400: The height of the rectangle.
    // In effect, this code draws a 400x400 pixel black rectangle starting from the top-left corner, 
    // cvs.moveTo(20,0);
    // cvs.lineTo(20,400);
    // cvs.stroke();  but there we can use a for loop im order to make it much more simple






    //GRIDline

    //Gridline
    for (var cl = 0; cl < 400; cl += 20) {
        cvs.moveTo(cl, 0);
        cvs.lineTo(cl, 400);
    }
    for (var rl = 0; rl < 400; rl += 20) {
        cvs.moveTo(0, rl);
        cvs.lineTo(400, rl);
    }
    cvs.strokeStyle = "gray";
    cvs.stroke();



    //Snake
    cvs.fillStyle = "yellow";
    cvs.fillRect(snakeposX, snakeposY, 20, 20);

    //Fruite
    cvs.fillStyle = "red";
    cvs.fillRect(fPosx, fPosy, 20, 20);

//     IF SNAKE EATS FRUIT

// 🐍 When the Snake Eats a Fruit — What Happens?
// ✅ Here are the three goals clearly listed:
// 1️⃣ Change the fruit’s position randomly when the snake eats it.
//  2️⃣ Increase the snake’s size by one box.
//  3️⃣ Update the score on the screen.

if (snakeposX == fPosx  && snakeposY == fPosy)
{
    snakeSize++;
    score +=10;
  fPosx= Math.floor(Math.random() * 20) * 20;
fPosy = Math.floor(Math.random() * 20) * 20;
//   The code is setting the position of the "Food" or "Target" object (fPosx and fPosy) to a random location on a grid.  
}

// In order to increase the size of the snake, we add one box to its body each time it eats a fruit — so the snake grows longer, box by box, with every fruit it eats
snakeTail.push({x: snakeposX, y: snakeposY});
// “Hey JavaScript, add a new box to the end of the snake’s body at this position —
// where the snake’s head currently is!”

// 🧠 What It Means in the Game:

// Every time the snake moves, we store its new position in the snakeTail array.

// Every time the snake eats a fruit, we add one more position to that array.

// This is how the snake grows longer — by keeping track of more boxes (body parts).

while (snakeTail.length > snakeSize) {
    snakeTail.shift();
}
}




//4. input control function
function inputControl(e) {
    console.log("hello arrow function is working")
    console.log(e.keyCode);
    console.log(e.key);

    switch (e.keyCode) {
        case 38:
            //UP
            nPosy -= 20;
            nPosx = 0;
            break;
        case 40:
            //DOWN
            nPosy += 20;
            nPosx = 0;
            break;
        case 39:
            nPosx += 20;
            nPosy = 0;
            break;
        case 37:
            //LEFT
            nPosx -= 20
            nPosy = 0;
            break;

           

    }
    if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 ){
            gameStatus ="Game  Started"
            document.getElementById("game-status").innerHTML = gameStatus
           }


}
