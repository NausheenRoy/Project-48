class Game {
    constructor() {

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var countRef = await database.ref('count').once("value");
            if (countRef.exists()) {
                count = countRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();

        }




    }

    play() {

        form.hide();
        background(backgroundimg);
        Player.getPlayerInfo();




        var x = 100;
        var y = 200;
        var index = 0;
        drawSprites();

        if (keyDown(UP_ARROW)) {
            player1.velocitY -= 10
        }
        if (keyDown(UP_ARROW)) {
            player2.velocityY -= 10
        }
        if (keyDown(UP_ARROW)) {
            player3.velocityY -= 10
        }
        if (keyDown(UP_ARROW)) {
            player4.velocityY -= 10
        }
        if (keyDown(UP_ARROW)) {
            player5.velocityY -= 10
        }
        if (keyDown(UP_ARROW)) {
            player6.velocityY -= 10
        }
        for (var plr in allPlayers) {


            index = index + 1;
            x = 500 - allPlayers[plr].distance;
            y = 500;

            players[index - 1].x = x;
            players[index - 1].y = y;

            if (index === player.index) {

                fill("black");
                textSize(25);
                text(allPlayers[plr].name, x - 25, y + 25);
                       
                          


                ball.velocityX = randomNumber(1, 6)
                sling = new Sling;

                if (ball.velocityX < 3 || ball.velocityX > 4) {
                    stone1image.hide()
                    stone2image.hide()
                    stone3image.hide();
                }

                if (ball.velocityX === 4) {
                    stone1image.hide()
                    stone2image.hide()
                    stone3image.hide();
                    stone4image.hide();
                    stone5image.hide();
                    stone6image.hide();
                    stone7image.hide();
                }


            }



        }



    }


}