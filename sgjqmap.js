//ctx.globalCompositeOperation="destination-over";
function drawRect(x, y, offsetX, offsetY) {
    // x=1,y=1:0-0-40-20 (x-1)-(y-1)-40-20 x=2,y=1:60-0-40-20
    // (40+20)*(x-1)-(20+20)*(y-1) x=1,y=2:
    ctx.strokeStyle = "orange";
    ctx.strokeRect(60 * (x - 1) + offsetX, 40 * (y - 1) + offsetY, 40, 20);
}
function drawCircle(x, y, offsetX, offsetY) {
    // x=1,y=1:20-10-10-0-2pi x=2,y=1:80-10-10-0-2pi 20+60*(x-1)
    // x=1,y=2:20-50-10-0-2pi 10+40*(y-1)
    ctx.strokeStyle = "red";
    var linearGradient = ctx.createLinearGradient(10 + 60 * (x - 1) + offsetX, 10 + 40 * (y - 1) + offsetY, 30 + 60 * (x - 1) + offsetX, 10 + 40 * (y - 1) + offsetY);
    linearGradient.addColorStop(0, "#FF9800");
    linearGradient.addColorStop(1, "#CDDC39");
    ctx.fillStyle = linearGradient;
    ctx.beginPath();
    ctx.arc(20 + 60 * (x - 1) + offsetX, 10 + 40 * (y - 1) + offsetY, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}
function drawHorizontalLine(x, y, offsetX, offsetY) {
    //x=1,y=1:40-10-60-10 x=2,y=1:100-10-120-10 x=1,y=2:40-50-60-50
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(60 * x - 20 + offsetX, 10 + 40 * (y - 1) + offsetY);
    ctx.lineTo(60 * x + offsetX, 10 + 40 * (y - 1) + offsetY);
    ctx.closePath();
    ctx.stroke();
}
function drawVerticalLine(x, y, offsetX, offsetY) {
    //x=1,y=1:20-20-20-40 x=2,y=1:80-20-80-40 x=1,y=2:20-60-20-80
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(20 + 60 * (x - 1) + offsetX, 40 * y - 20 + offsetY);
    ctx.lineTo(20 + 60 * (x - 1) + offsetX, 40 * y + offsetY);
    ctx.closePath();
    ctx.stroke();
}
function drawOneLRObliqueLine(offsetX, offsetY) {
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(40 + offsetX, 20 + offsetY);
    ctx.lineTo(60 + offsetX, 40 + offsetY);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100 + offsetX, 60 + offsetY);
    ctx.lineTo(120 + offsetX, 80 + offsetY);
    ctx.closePath();
    ctx.stroke();
}
function drawOneRLObliqueLine(offsetX, offsetY) {
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(120 + offsetX, 20 + offsetY);
    ctx.lineTo(100 + offsetX, 40 + offsetY);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(60 + offsetX, 60 + offsetY);
    ctx.lineTo(40 + offsetX, 80 + offsetY);
    ctx.closePath();
    ctx.stroke();
}
function drawObliqueLine(offsetX, offsetY) {
    drawOneLRObliqueLine(offsetX, offsetY);
    drawOneRLObliqueLine(offsetX, offsetY);
    ctx.translate(120, 0);
    drawOneLRObliqueLine(offsetX, offsetY);
    drawOneRLObliqueLine(offsetX, offsetY);
    ctx.translate(0, 80);
    drawOneLRObliqueLine(offsetX, offsetY);
    drawOneRLObliqueLine(offsetX, offsetY);
    ctx.translate(-120, 0);
    drawOneLRObliqueLine(offsetX, offsetY);
    drawOneRLObliqueLine(offsetX, offsetY);
    ctx.translate(0, -80);
}
function drawPrivateMap(offsetX, offsetY) {
    for (var y = 1; y <= 6; y++) {
        for (var x = 1; x <= 5; x++) {
            if ((x % 2 == 0 && y % 2 == 0) || (x == 3 && y == 3)) {
                drawCircle(x, y, offsetX, offsetY);
            }
            drawRect(x, y, offsetX, offsetY);
        }
    }

    for (var j = 1; j <= 6; j++) {
        for (var i = 1; i <= 4; i++) {
            drawHorizontalLine(i, j, offsetX, offsetY);
        }
    }

    for (var n = 1; n <= 5; n++) {
        for (var m = 1; m <= 5; m++) {
            drawVerticalLine(m, n, offsetX, offsetY);
        }
    }

    drawObliqueLine(offsetX, offsetY);
}
function drawAllPrivateMap() {
    //trying to adjust the position
    drawPrivateMap(360, 620);
    ctx.rotate(90 * Math.PI / 180);
    drawPrivateMap(300, -320);
    ctx.rotate(90 * Math.PI / 180);
    drawPrivateMap(-640, -260);
    ctx.rotate(90 * Math.PI / 180);
    drawPrivateMap(-580, 680);
    ctx.rotate(90 * Math.PI / 180);
}
function drawPublicLine() {
    ctx.strokeStyle = "green";
    for (var i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(320, 320 + i * 120);
        ctx.lineTo(680, 320 + i * 120);
        ctx.closePath();
        ctx.stroke();
    }
    for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        ctx.moveTo(380 + j * 120, 260);
        ctx.lineTo(380 + j * 120, 620);
        ctx.closePath();
        ctx.stroke();
    }
}
function drawPublicCircle() {
    ctx.strokeStyle = "blue";
    var img = new Image();
    img.src = "1.png";
    img.onload = function () {
        for (var y = 0; y < 3; y++) {
            for (var x = 0; x < 3; x++) {
                if (x != 1 && y != 1) {
                    var radialGradient = ctx.createRadialGradient(380 + x * 120, 320 + y * 120, 10, 380 + x * 120, 320 + y * 120, 20);
                    radialGradient.addColorStop(0, "#673AB7");
                    radialGradient.addColorStop(1, "#607D8B");
                    ctx.fillStyle = radialGradient;
                    ctx.beginPath();
                    ctx.arc(380 + x * 120, 320 + y * 120, 20, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fill();
                } else if (x == 1 && y == 1) {
                    taijiCanvas.initial("background-map", [[20, 500, 440, 0]]);
                } else {
                    // ctx.drawImage(img, 0, 0, 500, 500, 100, 100, 100, 100);
                    var pattern = ctx.createPattern(img, "no-repeat");
                    ctx.fillStyle = pattern;
                    ctx.save();
                    ctx.translate(360 + x * 120, 300 + y * 120);
                    ctx.beginPath();
                    ctx.arc(20, 20, 20, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            }
        }
    }
}
function drawPublicArc() {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc(320, 260, 60, 0, Math.PI / 2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(680, 260, 60, Math.PI / 2, Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(320, 620, 60, 3 * Math.PI / 2, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(680, 620, 60, Math.PI, 3 * Math.PI / 2);
    ctx.stroke();
    ctx.closePath();
}
function drawAllPublicMap() {
    drawPublicLine();
    drawPublicCircle();
    drawPublicArc();
}
function drawMap() {
    drawAllPrivateMap();
    drawAllPublicMap();
}