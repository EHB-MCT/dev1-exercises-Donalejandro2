"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


drawBackground();

function drawBackground() {
    context.fillStyle = "orange";
    context.fillRect(50, 50, 200, 200);

    context.fillStyle = "blue";
    context.fillRect(50, 170, 200, 80);
};

drawCircle();

function drawCircle() {
    context.beginPath();
    context.ellipse(150, 450, 100, 200, 0, Math.PI, 0);
    context.fill();
};