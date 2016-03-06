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

      context.clearRect(0,0,200,200);
    } else if (x > 200 && x < 400) {
      //console.log("SECTION 2");
      adjacent = nextToBlank(1, numArraytest);

      context.clearRect(200,0,200,200);
    } else if (x > 400) {
      //console.log("SECTION 3");
      adjacent = nextToBlank(2, numArraytest);

      context.clearRect(400,0,200,200);
    }
  } else if (y > 200 && y < 400) {
    if (x < 200) {
      //console.log("SECTION 4");
      adjacent = nextToBlank(3, numArraytest);

      context.clearRect(0,200,200,200);
    } else if (x > 200 && x < 400) {
      //console.log("SECTION 5");
      adjacent = nextToBlank(4, numArraytest);

      context.clearRect(200,200,200,200);
    } else if (x > 400) {
      //console.log("SECTION 6");
      adjacent = nextToBlank(5, numArraytest);

      context.clearRect(400,200,200,200);
    }
  } else if (y > 400) {
    if (x < 200) {
      //console.log("SECTION 7");
      adjacent = nextToBlank(6, numArraytest);

      context.clearRect(0,400,200,200);
    } else if (x > 200 && x < 400) {
      //console.log("SECTION 8");
      adjacent = nextToBlank(7, numArraytest);

      context.clearRect(200,400,200,200);
    } else if (x > 400) {
      //console.log("SECTION 9");
      adjacent = nextToBlank(8, numArraytest);

      context.clearRect(400,400,200,200);
    }
  }

  console.log(adjacent);
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

      /*console.log('-------');
      console.log(sectionNum);
      console.log(destX);
      console.log(destY);
      console.log("piece number is: " + numArraytest[sectionNum].pieceNum);
      console.log("location number is: " + numArraytest[sectionNum].locationNum);
      console.log(srcX);
      console.log(srcY);*/

      context.drawImage(img, srcX, srcY, 200, 200, destX, destY, 200, 200);
    }
  }

  // remove random section for blank
  var blankPos = Math.floor(Math.random() * 8);
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
