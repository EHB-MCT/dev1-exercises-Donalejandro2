"use strict";

drawMoreLines();

function drawMoreLines(x, y) {

    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    let canvasWidth = context.canvas.width;

    let margin = 200;

    context.beginPath();
    context.strokeStyle = "black";
    context.moveTo(margin, 50);
    context.lineTo(canvasWidth - margin, 50);
    context.lineTo(margin, 150);
    context.lineTo(canvasWidth - margin, 150);
    context.lineTo(margin, 250);
    context.lineTo(canvasWidth - margin, 250);
    context.lineTo(margin, 350);
    context.lineTo(canvasWidth - margin, 350);
    context.lineTo(margin, 450);
    context.lineTo(canvasWidth - margin, 450);
    context.closePath();
    context.stroke();
}