"use strict";
/** @type {CanvasRenderingContext2D} */
let context;
setup();
drawSquare();


function setup() {
    requestAnimationFrame++;
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
};

function drawSquare() {
    drawSquares(0, 800);
    drawSquares(50, 700);
    drawSquares(100, 600);
    drawSquares(150, 500);
    drawSquares(200, 400);
    drawSquares(250, 300);
    drawSquares(300, 200);
    drawSquares(350, 100);
};

function drawSquares(pos, size) {

    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    let canvasWidth = context.canvas.width;

    context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    context.fillRect(100 + pos, 0 + pos, size, size);
};