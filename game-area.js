'use strict';

function GameArea(width, height) {
    this.gameObjects = [];
    this.width = width || 640;
    this.height = height || 480;
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext('2d');
}

GameArea.prototype.addGameObject = function(gameObject){
    this.gameObjects.push(gameObject);
}

GameArea.prototype.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

GameArea.prototype.draw = function(){
    this.clear();

    for(var i = 0; i < this.gameObjects.length; i++)
        this.gameObjects[i].draw();
}

GameArea.prototype.update = function(){
    for(var i = 0; i < this.gameObjects.length; i++)
        this.gameObjects[i].update();
}