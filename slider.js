var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
var dimension = 600;
var sectionLength = dimension/3;
var img = new Image();
var numArray = [
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
      adjacent = nextToBlank(0, numArray);
      if (adjacent) {
        slideOver(0, numArray);
      }
    } else if (x > 200 && x < 400) {
      adjacent = nextToBlank(1, numArray);
      if (adjacent) {
        slideOver(1, numArray);
      }
    } else if (x > 400) {
      adjacent = nextToBlank(2, numArray);
      if (adjacent) {
        slideOver(2, numArray);
      }
    }
  } else if (y > 200 && y < 400) {
    if (x < 200) {
      adjacent = nextToBlank(3, numArray);
      if (adjacent) {
        slideOver(3, numArray);
      }
    } else if (x > 200 && x < 400) {
      adjacent = nextToBlank(4, numArray);
      if (adjacent) {
        slideOver(4, numArray);
      }
    } else if (x > 400) {
      adjacent = nextToBlank(5, numArray);
      if (adjacent) {
        slideOver(5, numArray);
      }
    }
  } else if (y > 400) {
    if (x < 200) {
      adjacent = nextToBlank(6, numArray);
      if (adjacent) {
        slideOver(6, numArray);
      }
    } else if (x > 200 && x < 400) {
      adjacent = nextToBlank(7, numArray);
      if (adjacent) {
        slideOver(7, numArray);
      }
    } else if (x > 400) {
      adjacent = nextToBlank(8, numArray);
      if (adjacent) {
        slideOver(8, numArray);
      }
    }
  }

  hasWon(numArray);
}, false);

function drawBoard() {
  context.clearRect(0,0,600,600);
  numArray = [
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
  shuffle(numArray);

  //draw images
  for (var j=0; j<3; j++) {
    for (var k=0; k<3; k++) {
      var sectionNum = j*3 + k;
      var destX = k * sectionLength;
      var destY = j * sectionLength;
      var srcX = getSrcX(numArray[sectionNum].pieceNum, sectionLength);
      var srcY = getSrcY(numArray[sectionNum].pieceNum, sectionLength);

      context.drawImage(img, srcX, srcY, 200, 200, destX, destY, 200, 200);
    }
  }

  // remove random section for blank
  var blankPos = Math.floor(Math.random() * 8);
  //var blankPos = 8;
  numArray[blankPos].pieceNum = 'blank';
  var blankX = getSrcX(blankPos, sectionLength);
  var blankY = getSrcY(blankPos, sectionLength);
  context.clearRect(blankX,blankY,200,200);
}