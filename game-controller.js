'use strict';

function GameController() {
    this.FPS = 60;
    this.INTERVAL = 1000 / this.FPS;
    this.STEP = this.INTERVAL / 1000;
}

GameController.prototype.start = function () {
    var gameArea = new GameArea();

    var gameObject = new GameObject(50, 50, 0, 0, "blue", gameArea.context, this.STEP);

    this.setupControls(gameObject);

    gameArea.addGameObject(gameObject);

    document.body.insertBefore(gameArea.canvas, document.body.childNodes[0]);

    setInterval(function () {
        gameArea.draw();
        gameArea.update();
    }, this.INTERVAL);
}


GameController.prototype.setupControls = function (gameObject) {
    window.addEventListener("keydown", function (event) {
        switch (event.keyCode) {
            case 37: 
                gameObject.controls.left = true;
                break;
            case 38: 
                gameObject.controls.up = true;
                break;
            case 39: 
                gameObject.controls.right = true;
                break;
            case 40: 
                gameObject.controls.down = true;
                break;
        }
    });

    window.addEventListener("keyup", function (event) {
        switch (event.keyCode) {
            case 37: 
                gameObject.controls.left = false;
                break;
            case 38: 
                gameObject.controls.up = false;
                break;
            case 39: 
                gameObject.controls.right = false;
                break;
            case 40: 
                gameObject.controls.down = false;
                break;
        }
    }, false);
}