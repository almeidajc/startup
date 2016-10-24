//exersise 3
let drop = document.getElementById("drop");

drop.ondragenter = function(event) {
  drop.textContent = "";
  event.stopPropagation();
  event.preventDefault();
}

drop.ondragover = function(event) {
  event.stopPropagation();
  event.preventDefault();
}

drop.ondrop = function(event) {
  event.stopPropagation();
  event.preventDefault();
  dodrop(event);
}

function dodrop(event) {
  let dt = event.dataTransfer;
  let file = dt.files[0];

  let fileReader = new FileReader();
  fileReader.readAsText(file);

  fileReader.onloadend = function() {
    document.getElementById("output").innerHTML = fileReader.result;
    drop.innerHTML = "File " + file.name + " opened";
  };
}


//exersise 4


let wsUri = "ws://echo.websocket.org/";
  let output;

  function init()
  {
    output = document.getElementById("output2");
    testWebSocket();
  }

  function testWebSocket()
  {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  }

  function onOpen(evt)
  {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
  }

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt)
  {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    writeToScreen("SENT: " + message);
    websocket.send(message);
  }

  function writeToScreen(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }

  window.addEventListener("load", init, false);




//exersise 5


window.onload = function(){
let x =  5;
let y = 100;
let speed = 2;

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");


function draw() {
    let canvas  = document.getElementById("myCanvas");


    context.clearRect(0, 0,950, 170);
    context.fillStyle = getRndColor();
    context.fillRect(x, y, 500, 500);

}
 animate();


function getRndColor() {
    let red = 255*Math.random()|0,
        green = 255*Math.random()|0,
        blue = 255*Math.random()|0;
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}



  function animate() {

      reqAnimFrame = window.mozRequestAnimationFrame    ||
                  window.webkitRequestAnimationFrame ||
                  window.msRequestAnimationFrame     ||
                  window.oRequestAnimationFrame
                  ;

      reqAnimFrame(animate);

      x += speed;

      if(x <= 0 || x >= 100){
          speed = -speed;
      }

      draw();
  }
}
