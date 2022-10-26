"use strict";

import context from "../../scripts//context.js";
import * as Utils from "../../scripts/utils.js";

let width = canvas.width;
let height = canvas.height;
draw();

function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    drwaBubbles();
};

function drwaBubbles() {
    for (let i = 0; i < 100; i++) {
        let x = Utils.randomNumber(200, width - 200);
        let y = Utils.randomNumber(200, height - 200);
        let size = Utils.randomNumber(10, 100);
        context.fillStyle = Utils.hsla(Utils.randomNumber(0, 180), 180, 75, 50);
        Utils.fillCircle(x, y, size);
    };
};