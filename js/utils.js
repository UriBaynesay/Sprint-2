"use strict";

function resizeCanvas() {
  const elContainer = document.querySelector(".canvas-container");
  gElCanvas.width = elContainer.offsetWidth - 1;
  gElCanvas.height = gElCanvas.width;
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width,gElCanvas.height);
}

function drawText(txt, x, y, color, size, font, align) {
  gCtx.textBaseline = "middle";
  gCtx.textAlign = align;
  gCtx.font = `${size}px ${font}`;
  gCtx.fillStyle = color;
  gCtx.fillText(txt, x, y);
  gCtx.strokeStyle = "black";
  gCtx.strokeText(txt, x, y);
}

function drawRect(x, y) {
  gCtx.beginPath();
  gCtx.rect(x, y, gElCanvas.width-20, gElCanvas.height/5);
  gCtx.strokeStyle = "gray";
  gCtx.stroke();
}
