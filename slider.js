var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
var dimension = 600;
var sectionLength = dimension/3;
var img = new Image();
var numArraytest = [
  {pieceNum: 0, locationNum: 0},
  {pieceNum: 1, locationNum: 1},
  {pieceNum: 2, locationNum: 2},
  {pieceNum: 3, locationNum: 3},
  {pieceNum: 4, locationNum: 4},
  {pieceNum: 5, locationNum: 5},
  {pieceNum: 6, locationNum: 6},
  {pieceNum: 7, locationNum: 7},
  {pieceNum: 8, locationNum: 8}
];

img.addEventListener("load", function() {
  drawBoard();
}, false);
img.src = "album.jpg";

c.addEventListener('click', function(event) {
  var x = event.pageX - c.offsetLeft;
  var y = event.pageY - c.offsetTop;
  var adjacent = false;

  if (y < 200) {
    if (x < 200) {
      //console.log("SECTION 1");
      adjacent = nextToBlank(0, numArraytest);

      if (adjacent) {
        slideOver(0, numArraytest);
        //context.clearRect(0,0,200,200);
      }
    } else if (x > 200 && x < 400) {
      //console.log("SECTION 2");
      adjacent = nextToBlank(1, numArraytest);

      if (adjacent) {
        slideOver(1, numArraytest);
        //context.clearRect(200,0,200,200);
      }
    } else if (x > 400) {
      //console.log("SECTION 3");
      adjacent = nextToBlank(2, numArraytest);

      if (adjacent) {
        slideOver(2, numArraytest);
        //context.clearRect(400,0,200,200);
      }
    }
  } else if (y > 200 && y < 400) {
    if (x < 200) {
      //console.log("SECTION 4");
      adjacent = nextToBlank(3, numArraytest);

      if (adjacent) {
        slideOver(3, numArraytest);
        //context.clearRect(0,200,200,200);
      }
    } else if (x > 200 && x < 400) {
      //console.log("SECTION 5");
      adjacent = nextToBlank(4, numArraytest);

      if (adjacent) {
        slideOver(4, numArraytest);
        //context.clearRect(200,200,200,200);
      }
    } else if (x > 400) {
      //console.log("SECTION 6");
      adjacent = nextToBlank(5, numArraytest);

      if (adjacent) {
        slideOver(5, numArraytest);
        //context.clearRect(400,200,200,200);
      }
    }
  } else if (y > 400) {
    if (x < 200) {
      //console.log("SECTION 7");
      adjacent = nextToBlank(6, numArraytest);

      if (adjacent) {
        slideOver(6, numArraytest);
        //context.clearRect(0,400,200,200);
      }
    } else if (x > 200 && x < 400) {
      //console.log("SECTION 8");
      adjacent = nextToBlank(7, numArraytest);

      if (adjacent) {
        slideOver(7, numArraytest);
        //context.clearRect(200,400,200,200);
      }
    } else if (x > 400) {
      //console.log("SECTION 9");
      adjacent = nextToBlank(8, numArraytest);

      if (adjacent) {
        slideOver(8, numArraytest);
        //context.clearRect(400,400,200,200);
      }
    }
  }

  hasWon(numArraytest);
  //console.log(adjacent);
}, false);

function drawBoard() {
  context.clearRect(0,0,600,600);
  numArraytest = [
    {pieceNum: 0, locationNum: 0},
    {pieceNum: 1, locationNum: 1},
    {pieceNum: 2, locationNum: 2},
    {pieceNum: 3, locationNum: 3},
    {pieceNum: 4, locationNum: 4},
    {pieceNum: 5, locationNum: 5},
    {pieceNum: 6, locationNum: 6},
    {pieceNum: 7, locationNum: 7},
    {pieceNum: 8, locationNum: 8}
  ];
  shuffle(numArraytest);

  //draw images
  for (var j=0; j<3; j++) {
    for (var k=0; k<3; k++) {
      var sectionNum = j*3 + k;
      var destX = k * sectionLength;
      var destY = j * sectionLength;
      var srcX = getSrcX(numArraytest[sectionNum].pieceNum, sectionLength);
      var srcY = getSrcY(numArraytest[sectionNum].pieceNum, sectionLength);

      context.drawImage(img, srcX, srcY, 200, 200, destX, destY, 200, 200);
    }
  }

  // remove random section for blank
  var blankPos = Math.floor(Math.random() * 8);
  //var blankPos = 8;
  numArraytest[blankPos].pieceNum = 'blank';
  var blankX = getSrcX(blankPos, sectionLength);
  var blankY = getSrcY(blankPos, sectionLength);
  context.clearRect(blankX,blankY,200,200);
}

function getSrcX(num, length) {
  return (num) * length % 600;
}
function getSrcY(num, length) {
  return Math.floor((num)/3) * length;
}
function shuffle(arr) {
  var j, x, i;
  for (var i=0; i<arr.length; i++) {
    j = Math.floor(Math.random() * i);
    x = arr[i];
    
    arr[i] = arr[j];
    arr[i].locationNum = i;

    arr[j] = x;
    arr[j].locationNum = j;
  }
}
function nextToBlank(section, arr) {
  var blankPos;
  var isNextTo = false;

  for (var i=0; i<arr.length; i++) {
    if (arr[i].pieceNum == 'blank') {
      blankPos = arr[i].locationNum;
    }
  }

  switch (blankPos) {
    case 0:
      if (section === 1 || section === 3) {
        isNextTo = true;
      }
      break;
    case 1:
      if (section === 0 || section === 2 || section === 4) {
        isNextTo = true;
      }
      break;
    case 2:
      if (section === 1 || section === 5) {
        isNextTo = true;
      }
      break;
    case 3:
      if (section === 0 || section === 4 || section === 6) {
        isNextTo = true;
      }
      break;
    case 4:
      if (section === 1 || section === 3 || section === 5 || section === 7) {
        isNextTo = true;
      }
      break;
    case 5:
      if (section === 2 || section === 4 || section === 8) {
        isNextTo = true;
      }
      break;
    case 6:
      if (section === 3 || section === 7) {
        isNextTo = true;
      }
      break;
    case 7:
      if (section === 4 || section === 6 || section === 8) {
        isNextTo = true;
      }
      break;
    case 8:
      if (section === 5 || section === 7) {
        isNextTo = true;
      }
      break;
    default:
      break;
  }

  return isNextTo;
}
function slideOver(section, arr) {
  var blankPos;

  for (var i=0; i<arr.length; i++) {
    if (arr[i].pieceNum == 'blank') {
      blankPos = arr[i].locationNum;
      break;
    }
  }
  for (var j=0; j<arr.length; j++) {
    if (arr[j].locationNum == section) {
      break;
    }
  }

  switch (section) {
    case 0:
      var imgData = context.getImageData(0,0,200,200);
      if (blankPos === 1) {
        context.putImageData(imgData,200,0);

        arr[i].locationNum = 0;
        arr[j].locationNum = 1;
      } else if (blankPos === 3) {
        context.putImageData(imgData,0,200);

        arr[i].locationNum = 0;
        arr[j].locationNum = 3;
      }
      context.clearRect(0,0,200,200);
      break;
    case 1:
      var imgData = context.getImageData(200,0,200,200);
      if (blankPos === 0) {
        context.putImageData(imgData,0,0);

        arr[i].locationNum = 1;
        arr[j].locationNum = 0;
      } else if (blankPos === 2) {
        context.putImageData(imgData,400,0);

        arr[i].locationNum = 1;
        arr[j].locationNum = 2;
      } else if (blankPos === 4) {
        context.putImageData(imgData,200,200);

        arr[i].locationNum = 1;
        arr[j].locationNum = 4;
      }
      context.clearRect(200,0,200,200);
      break;
    case 2:
      var imgData = context.getImageData(400,0,200,200);
      if (blankPos === 1) {
        context.putImageData(imgData,200,0);

        arr[i].locationNum = 2;
        arr[j].locationNum = 1;
      } else if (blankPos === 5) {
        context.putImageData(imgData,400,200);

        arr[i].locationNum = 2;
        arr[j].locationNum = 5;
      }
      context.clearRect(400,0,200,200);
      break;
    case 3:
      var imgData = context.getImageData(0,200,200,200);
      if (blankPos === 0) {
        context.putImageData(imgData,0,0);

        arr[i].locationNum = 3;
        arr[j].locationNum = 0;
      } else if (blankPos === 4) {
        context.putImageData(imgData,200,200);

        arr[i].locationNum = 3;
        arr[j].locationNum = 4;
      } else if (blankPos === 6) {
        context.putImageData(imgData,0,400);

        arr[i].locationNum = 3;
        arr[j].locationNum = 6;
      }
      context.clearRect(0,200,200,200);
      break;
    case 4:
      var imgData = context.getImageData(200,200,200,200);
      if (blankPos === 1) {
        context.putImageData(imgData,200,0);

        arr[i].locationNum = 4;
        arr[j].locationNum = 1;
      } else if (blankPos === 3) {
        context.putImageData(imgData,0,200);

        arr[i].locationNum = 4;
        arr[j].locationNum = 3;
      } else if (blankPos === 5) {
        context.putImageData(imgData,400,200);

        arr[i].locationNum = 4;
        arr[j].locationNum = 5;
      } else if (blankPos === 7) {
        context.putImageData(imgData,200,400);

        arr[i].locationNum = 4;
        arr[j].locationNum = 7;
      }
      context.clearRect(200,200,200,200);
      break;
    case 5:
      var imgData = context.getImageData(400,200,200,200);
      if (blankPos === 2) {
        context.putImageData(imgData,400,0);

        arr[i].locationNum = 5;
        arr[j].locationNum = 2;
      } else if (blankPos === 4) {
        context.putImageData(imgData,200,200);

        arr[i].locationNum = 5;
        arr[j].locationNum = 4;
      } else if (blankPos === 8) {
        context.putImageData(imgData,400,400);

        arr[i].locationNum = 5;
        arr[j].locationNum = 8;
      }
      context.clearRect(400,200,200,200);
      break;
    case 6:
      var imgData = context.getImageData(0,400,200,200);
      if (blankPos === 3) {
        context.putImageData(imgData,0,200);

        arr[i].locationNum = 6;
        arr[j].locationNum = 3;
      } else if (blankPos === 7) {
        context.putImageData(imgData,200,400);

        arr[i].locationNum = 6;
        arr[j].locationNum = 7;
      }
      context.clearRect(0,400,200,200);
      break;
    case 7:
      var imgData = context.getImageData(200,400,200,200);
      if (blankPos === 4) {
        context.putImageData(imgData,200,200);

        arr[i].locationNum = 7;
        arr[j].locationNum = 4;
      } else if (blankPos === 6) {
        context.putImageData(imgData,0,400);

        arr[i].locationNum = 7;
        arr[j].locationNum = 6;
      } else if (blankPos === 8) {
        context.putImageData(imgData,400,400);

        arr[i].locationNum = 7;
        arr[j].locationNum = 8;
      }
      context.clearRect(200,400,200,200);
      break;
    case 8:
      var imgData = context.getImageData(400,400,200,200);
      if (blankPos === 5) {
        context.putImageData(imgData,400,200);

        arr[i].locationNum = 8;
        arr[j].locationNum = 5;
      } else if (blankPos === 7) {
        context.putImageData(imgData,200,400);

        arr[i].locationNum = 8;
        arr[j].locationNum = 7;
      }
      context.clearRect(400,400,200,200);
      break;
    default:
      break;
  }
}

function hasWon(arr) {
  var won = false;
  for (var i=0; i<arr.length; i++) {
    var piece = arr[i];
    if (piece.pieceNum != 'blank') {
      if (piece.pieceNum != piece.locationNum) {
        won = false;
        break;
      } else {
        won = true;
      }
    }
  }
  if (won) {
    alert("YOU DID IT DAWG");
  }
  return;
}