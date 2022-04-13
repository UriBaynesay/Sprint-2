"use strict";
var gElCanvas;
var gCtx;
let gCurrOffSet = 0;
const gMoveSize = 20;
const gSizeChange = 10;

function onFontChange(value) {
  setTxtFont(value);
  renderText(getCurrSelectedTxt());
}

function onColorChange(color) {
  setTxtColor(color);
  renderText(getCurrSelectedTxt());
}

function onEditorInit(imgNum) {
  gElCanvas = document.querySelector("canvas");
  gCtx = gElCanvas.getContext("2d");
  renderImg(imgNum);
  createMeme(imgNum);
}

function renderImg(imgNum) {
  let img = new Image();
  img.src = `img/meme-imgs (square)/${imgNum}.jpg`;
  // gElCanvas.width=img.naturalWidth;
  // gElCanvas.height=img.naturalHeight;
  // console.log(`gElCanvans width : ${gElCanvas.width} imgwidth : ${img.naturalWidth} `);
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
  };
}

function renderText(txt) {
  setLineTxt(txt);
  const meme = getMeme();
  const selectedLine = meme.selectedLineIdx;
  const color = meme.lines[selectedLine].color;
  const size = meme.lines[selectedLine].size;
  const align = meme.lines[selectedLine].align;
  const font = meme.lines[selectedLine].font;
  // console.log('test destrocture : ',selectedImgId);
  let img = new Image();
  img.src = `img/meme-imgs (square)/${meme.selectedImgId}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    drawText(
      txt,
      gElCanvas.width / 2,
      50 + gCurrOffSet,
      color,
      size,
      font,
      align
    );
  };
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

function onMoveText(sign) {
  gCurrOffSet =
    sign === "+" ? gCurrOffSet + gMoveSize : gCurrOffSet - gMoveSize;
  renderText(getCurrSelectedTxt());
}

function onSizeChange(sign) {
  changeMemeSize(sign);
  renderText(getCurrSelectedTxt());
}

function onAlign(direc) {
  setTextAlign(direc);
  renderText(getCurrSelectedTxt());
}

function onDelete(){
    deleteTxt();
    renderText(getCurrSelectedTxt());
}

function downloadCanvas(elLink){
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'Meme.jpg'
}