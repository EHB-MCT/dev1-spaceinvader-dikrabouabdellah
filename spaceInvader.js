"use strict";

alert("Draw your space invader here");

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSpaceInvader();

function drawSpaceInvader(){

    //background black box

    context.beginPath();
    context.rect(100,100,300,300)
    context.fill();

    //eyes

    context.fillStyle = "#AAFF00";
    context.beginPath();
    context.rect(175,125,50,100);
    context.fill();

    context.fillStyle = "#AAFF00";
    context.beginPath();
    context.rect(275,125,50,100);
    context.fill();

    //mouth

    context.fillStyle = "#AAFF00";
    context.beginPath();
    context.rect(125,275,50,50);
    context.fill();

    context.fillStyle = "#AAFF00";
    context.beginPath();
    context.rect(175,325,50,50);
    context.fill();

    context.fillStyle = "#AAFF00";
    context.beginPath();
    context.rect(225,275,50,50);
    context.fill();

    context.fillStyle = "#AAFF00";
    context.beginPath();
    context.rect(275,325,50,50);
    context.fill();

    context.fillStyle = "#AAFF00";
    context.beginPath();
    context.rect(325,275,50,50);
    context.fill();

}