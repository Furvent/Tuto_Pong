<!DOCTYPE html>
<html lang="en">
    <head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    </head>
    <body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script>

var canvas;
var canvasContext;
var ballX = 0;

window.onload = function() {
    console.log("Hello planet !");
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
}

function drawEverything() {
    drawBackground();
    drawWhiteCircle();
}

function moveEverything() {
    ballX +=2;
    console.log("ballX is now : " + ballX);
}

function drawBackground() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function drawWhiteCircle() {
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(75, 75, 10, 0, Math.PI*2, true);
    canvasContext.fill();
}
</script>

</body>
</html>