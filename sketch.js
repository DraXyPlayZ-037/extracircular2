var splashscreen
var gameState = "wait"
var infobutton, playbutton
var level1img
var player, playerimg

// loading assets like images sound videos etc
function preload() {
    splashscreen = loadImage("splashscreen.gif")
    level1img = loadImage("level1bg.jpg")
    playerimg = loadImage("player.png")


    // load the images of rewards and enemies


}


// setting up the game like creating canvas, sprites, button etc
function setup() {
    createCanvas(windowWidth, windowHeight);

    playbutton = createImg("play.png")
    playbutton.position(0, 150)
    playbutton.size(425, 160)


    infobutton = createImg("info.png")
    infobutton.position(0, 300)
    infobutton.size(200, 200)

    // player sprite
    player = createSprite(150, height - 200)
    player.addImage(playerimg)
    player.visible = false



    //create sprites for  of rewards and enemies







}


// this function runs on every frame till the codes are running
function draw() {

    if (gameState == "wait") {

        background(splashscreen)
        playbutton.show()
        infobutton.show()

    }


    playbutton.mousePressed(() => {
        playbutton.hide()
        infobutton.hide()
        gameState = "level1"
    })

    infobutton.mousePressed(() => {
        playbutton.hide()
        infobutton.hide()
        waitpopup()
    })

    if (gameState == "level1") {
        background(level1img)
        player.visible = true


    }

    drawSprites()


    if (gameState == "level1") {
        fill("navy")
        textSize(50)
        text("Level 1", width / 2, 50)


    }




}


function waitpopup() {
    swal({
            title: "Info !",
            text: "This game is made in a couple of weeks! \n In this game you run forward with a gun,\n shooting all the bad zombies to collect coins, \n and to get meat to revive your health, \nand get more ammo.",
            textAlign: "center",
            imageUrl: "vd4yrq7ofue51.png",
            imageSize: '200x200',
            confirmButtonText: "Back to Dashboard",
            confirmButtonColor: "Navy"
        },

        function() {
            gameState = "wait"
        }
    )


}