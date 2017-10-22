

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

(function () {
	hexHeight = Math.sin(hexagonAngle) * sideLength;
	hexRadius = Math.cos(hexagonAngle) * sideLength;
	hexRectangleHeight = sideLength + 2 * hexHeight;
	hexRectangleWidth = 2 * hexRadius;

	if (canvas.getContext) {
		ctx.fillStyle = "#000000";
		ctx.strokeStyle = "#CCCCCC";
		ctx.lineWidth = 1;

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
			
			if(ctx.fillStyle == "#000000") {
				ctx.fillStyle = "#fff";
			} else {
				ctx.fillStyle = "#000000"
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
    
    
}
function clearBoard() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#000";
	drawBoard(ctx, boardWidth, boardHeight);
}
