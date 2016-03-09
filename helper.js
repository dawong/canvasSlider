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
