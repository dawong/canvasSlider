var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
var dimension = 600;
var sectionLength = dimension/3;
var img = new Image();
var numArray = [1,2,3,4,5,6,7,8,9];

img.addEventListener("load", function() {
  drawBoard();
}, false);
img.src = "album.jpg";

c.addEventListener('click', function(event) {
  var x = event.pageX - c.offsetLeft;
  var y = event.pageY - c.offsetTop;

  if (y < 200) {
    if (x < 200) {
      //console.log("SECTION 1");
      context.clearRect(0,0,200,200);
    } else if (x > 200 && x < 400) {
      //console.log("SECTION 2");
      context.clearRect(200,0,200,200);
    } else if (x > 400) {
      //console.log("SECTION 3");
      context.clearRect(400,0,200,200);
    }
  } else if (y > 200 && y < 400) {
    if (x < 200) {
      //console.log("SECTION 4");
      context.clearRect(0,200,200,200);
    } else if (x > 200 && x < 400) {
      //console.log("SECTION 5");
      context.clearRect(200,200,200,200);
    } else if (x > 400) {
      //console.log("SECTION 6");
      context.clearRect(400,200,200,200);
    }
  } else if (y > 400) {
    if (x < 200) {
      //console.log("SECTION 7");
      context.clearRect(0,400,200,200);
    } else if (x > 200 && x < 400) {
      //console.log("SECTION 8");
      context.clearRect(200,400,200,200);
    } else if (x > 400) {
      //console.log("SECTION 9");
      context.clearRect(400,400,200,200);
    }
  }
}, false);

function drawBoard() {
  shuffle(numArray);

  //draw images
  for (var j=0; j<3; j++) {
    for (var k=0; k<3; k++) {
      var destX = j * sectionLength;
      var destY = k * sectionLength;
      var sectionNum = j*3 + k;
      var srcX = getImgX(numArray[sectionNum], sectionLength);
      var srcY = getImgY(numArray[sectionNum], sectionLength);
      context.drawImage(img, destX, destY, 200, 200, srcX, srcY, 200, 200);
    }
  }

  for (var i=1; i<=2; i++) {
    //draw vertical lines
    context.moveTo(sectionLength*i, 0);
    context.lineTo(sectionLength*i, 600);
    context.stroke();
    
    //draw horizontal lines
    context.moveTo(0, sectionLength*i);
    context.lineTo(600, sectionLength*i);
    context.stroke();
  }
}

function getImgX(num, length) {
  return (num-1) * length % 600;
}
function getImgY(num, length) {
  return Math.floor((num-1)/3) * length;
}
function shuffle(arr) {
  var j, x, i;
  for (var i=arr.length-1; i>=0; i--) {
    j = Math.floor(Math.random() * i);
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
}
