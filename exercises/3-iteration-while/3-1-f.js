"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 0;
    while (i <= 6) {
        let x1 = 75 + i * 25;
        let y1 = 75 + i * 25;
        let x2 = 100;
        let y2 = 100;
        context.strokeRect(x1, y1, x2, y2);
        i++;
    }
}