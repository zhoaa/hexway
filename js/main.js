//var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value
//
//// Update the current slider value (each time you drag the slider handle)
//slider.oninput = function () {
//    output.innerHTML = this.value;
//}


var isPlay = true;

function start() {
    var startButton = document.getElementById("start-btn");
    console.log(startButton.style.backgroundImage);
    if (isPlay) {
        startButton.style.backgroundImage = "url('../img/pause.png')";
        isPlay = false;
        gamelogic();
    } else {
        startButton.style.backgroundImage = "url('../img/play.png')";
        isPlay = true;
    }

}

function clear() {

}
