var userImg, bombImg, tankImg;
var user, bomber, tank;
var bg;

function preload() {
    userImg = loadImage("images/user.png");
    bombImg = loadImage("images/user bomb.png");
    tankImg = loadImage("images/user tank.png");
    bg = loadImage("images/bg2.jpg");
}

function setup() {
    var canvas = createCanvas(1400, 700);

    user = new Player();
}

function draw() {
    background(bg);

    user.display();

    user.playerMove();
    user.playerCollide();
}


