var life = new Array(55);
var slider = document.getElementById("myRange");
var isPlay = true;
for (var i = 0; i < 55; i++) {
    life[i] = new Array(27);
}
var canvas = document.getElementById('hexmap');
var ctx = canvas.getContext('2d');
var hexHeight,
    hexRadius,
    hexRectangleHeight,
    hexRectangleWidth,
    hexagonAngle = 0.523598776, // 30 degrees in radians
    sideLength = 15,
    boardWidth = 400,
    boardHeight = 400;

var board = [];


//function start() {
//    var startButton = document.getElementById("start-btn");
//    console.log(startButton.style.backgroundImage);
//    if (isPlay) {
//        alert("l");
//        var interval = setInterval(gamelogic, 1000);
//        startButton.style.backgroundImage = "url('../img/pause.png')";
//        isPlay = false;
//    } else {
//        clearInterval(interval);
//        startButton.style.backgroundImage = "url('../img/play.png')";
//        isPlay = true;
//
//    }
//
//}


(function () {
    hexHeight = Math.sin(hexagonAngle) * sideLength;
    hexRadius = Math.cos(hexagonAngle) * sideLength;
    hexRectangleHeight = sideLength + 2 * hexHeight;
    hexRectangleWidth = 2 * hexRadius;

    if (canvas.getContext) {
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#CCCCCC";
        ctx.lineWidth = 2;

        drawBoard(ctx, boardWidth, boardHeight);
        ctx.fillStyle = "#ffffff";

        canvas.addEventListener("click", function (eventInfo) {
            var x,
                y,
                hexX,
                hexY,
                screenX,
                screenY;

            x = eventInfo.offsetX || eventInfo.layerX;
            y = eventInfo.offsetY || eventInfo.layerY;

            hexY = Math.floor(y / (hexHeight + sideLength));
            hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);

            screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
            screenY = hexY * (hexHeight + sideLength);

            if (ctx.fillStyle == "#000000") {
                ctx.fillStyle = "#fff";
                if (screenY / (hexHeight + sideLength) % 2 != 0) {
                    life[(screenX + hexRadius) / hexRectangleWidth][screenY / (hexHeight + sideLength)] = false;
                } else {
                    life[screenX / hexRectangleWidth][screenY / (hexHeight + sideLength)] = false;
                }
            } else {
                ctx.fillStyle = "#000000";
                if (screenY / (hexHeight + sideLength) % 2 != 0) {
  var x=parseInt((screenX + hexRadius) / hexRectangleWidth);
                   var y=parseInt(screenY / (hexHeight + sideLength));
                  life[x][y] = true;
                } else {
                    life[screenX / hexRectangleWidth][screenY / (hexHeight + sideLength)] = true;
                }
            }

            drawHexagon(ctx, screenX, screenY, true);
        });
    }
})();

function drawHexagon(canvasContext, x, y, fill) {
    var fill = fill || false;

    canvasContext.beginPath();
    canvasContext.moveTo(x + hexRadius, y);
    canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
    canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
    canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
    canvasContext.lineTo(x, y + sideLength + hexHeight);
    canvasContext.lineTo(x, y + hexHeight);
    canvasContext.closePath();

    if (fill) {
        canvasContext.fill();
    } else {
        canvasContext.stroke();
    }
}

function drawBoard(canvasContext, width, height) {
    var i, j;

    for (i = 0; i < width; ++i) {
        for (j = 0; j < height; ++j) {
            drawHexagon(
                ctx,
                i * hexRectangleWidth + ((j % 2) * hexRadius),
                j * (sideLength + hexHeight),
                false
            );
        }
    }
}

function gamelogic() {

    var life1 = new Array(55);
    for (var i = 0; i < 55; i++) {
        life1[i] = new Array(27);
    }
    for (var i = 0; i < 53; i++) {
        for (var j = 0; j < 25; j++) {
            var count = 0;
            if (j == 0 && i == 0) {
                if (life[i + 1][j] == true) {
                    count++;
                }
                if (life[i + 1][j + 1] == true) {
                    count++;
                }
                if (life[i][j + 1] == true) {
                    count++;
                }
            } else if (j == 0) {
                if (life[i + 1][j] == true) {
                    count++;
                }
                if (life[i - 1][j] == true) {
                    count++;
                }
                if (life[i + 1][j + 1] == true) {
                    count++;
                }
                if (life[i][j + 1] == true) {
                    count++;
                }
            } else if (i == 0) {
                if(j%2==0){
                   if (life[i][j - 1] == true) {
                    count++;
                }
                if (life[i][j+1] == true) {
                    count++;
                }
                if (life[i+1][j - 1] == true) {
                    count++;
                }
                    if (life[i+1][j] == true) {
                    count++;
                }
                if (life[i + 1][j] == true) {
                    count++;
                }
                }
                else{
                if (life[i][j - 1] == true) {
                    count++;
                }
                if (life[i + 1][j] == true) {
                    count++;
                }
                if (life[i][j + 1] == true) {
                    count++;
                }
                }
            } else {
                if (j % 2 == 0) {
                    if (life[i + 1][j - 1] == true) {
                        count++;
                    }
                    if (life[i][j - 1] == true) {
                        count++;
                    }
                    if (life[i - 1][j] == true) {
                        count++;
                    }
                    if (life[i][j + 1] == true) {
                        count++;
                    }
                    if (life[i + 1][j + 1] == true) {
                        count++;
                    }
                    if (life[i + 1][j] == true) {
                        count++;
                    }
                } else {
                    if (life[i][j - 1] == true) {
                        count++;
                    }
                    if (life[i - 1][j - 1] == true) {
                        count++;
                    }
                    if (life[i - 1][j] == true) {
                        count++;
                    }
                    if (life[i - 1][j + 1] == true) {
                        count++;
                    }
                    if (life[i][j + 1] == true) {
                        count++;
                    }
                    if (life[i + 1][j] == true) {
                        count++;
                    }
                }
            }
            if (count >= 2 && count <= 4) {
                if (j % 2 != 0) {
                    ctx.fillStyle = getRandomColor();
                    drawHexagon(ctx, i * hexRectangleWidth - hexRadius, j * (hexHeight + sideLength), true);
                    life1[i][j] = true;
                } else {
                    ctx.fillStyle = getRandomColor();
                    drawHexagon(ctx, i * hexRectangleWidth, j * (hexHeight + sideLength), true);
                    life1[i][j] = true;
                }
            } else {
                if (j % 2 != 0) {
                    ctx.fillStyle = "#FFFFFF";
                    drawHexagon(ctx, i * hexRectangleWidth - hexRadius, j * (hexHeight + sideLength), true);
                    drawHexagon(ctx, i * hexRectangleWidth - hexRadius, j * (hexHeight + sideLength), false);
                    life1[i][j] = false;
                } else {
                    ctx.fillStyle = "#FFFFFF";
                    drawHexagon(ctx, i * hexRectangleWidth, j * (hexHeight + sideLength), true);
                    drawHexagon(ctx, i * hexRectangleWidth, j * (hexHeight + sideLength), false);
                    life1[i][j] = false;
                }
            }
        }
    }
    for (var i = 0; i < 53; i++) {
        for (var j = 0; j < 25; j++) {
            life[i][j] = life1[i][j];
        }
    }


}


function clearBoard() {


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    drawBoard(ctx, boardWidth, boardHeight);



    for (var i = 0; i < 55; i++) {
        for (var j = 0; j < 27; j++) {
            life[i][j] = false;
        }
    }



}
function getRandomColor() {
 var letters = '0123456789ABCDEF';
 var color = '#';
 for (var i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}




function setRandomColor() {
 $("#colorpad").css("background-color", getRandomColor());
}