'use strict';

function GameObject(width, height, x, y, color, context, step) {
    this.speed = 100;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.step = step;
    this.context = context;
    this.color = color;

    this.controls = {
        left: false,
        right: false,
        up: false,
        down: false
    };
}

GameObject.prototype.draw = function () {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
}

GameObject.prototype.update = function () {
    if (this.controls.left)
        this.x -= this.speed * this.step;
    if (this.controls.up)
        this.y -= this.speed * this.step;
    if (this.controls.right)
        this.x += this.speed * this.step;
    if (this.controls.down)
        this.y += this.speed * this.step;
}

GameObject.prototype.crashWith = function (otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
        crash = false;
    }
    return crash;
}