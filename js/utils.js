"use strict"

function clearCanvas(elCanvas,ctx) {
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);
}

function drawText(txt, x, y, color, size, font, align, canvasNum) {
    clearCanvas(gElCanvas[canvasNum], gCtx[canvasNum]);
    gCtx[canvasNum].textBaseline = "middle";
    gCtx[canvasNum].textAlign = align;
    gCtx[canvasNum].font = `${size}px ${font}`;
    gCtx[canvasNum].fillStyle = color;
    gCtx[canvasNum].fillText(txt, x, y);
    gCtx[canvasNum].strokeStyle = "black";
    gCtx[canvasNum].strokeText(txt, x, y);
  }

  function renderImg(imgNum) {
    let img = new Image();
    img.src = `img/meme-imgs (square)/${imgNum}.jpg`;
    img.onload = () => {
      gCtx[CANVAS_INDX.picture].drawImage(
        img,
        0,
        0,
        gElCanvas[CANVAS_INDX.picture].width,
        gElCanvas[CANVAS_INDX.picture].height
      );
    };
  }