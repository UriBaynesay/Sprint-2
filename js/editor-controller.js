"use strict";

let gElCanvas;
let gCtx;
const gMoveSize = 20;

function onEditorInit(imgNum) {
  gElCanvas = document.querySelector("#canvas");
  gCtx = gElCanvas.getContext("2d");
  resizeCanvas();
  addListeners();
  createMeme(imgNum);
  renderMemeCanvas(imgNum, false);
}

function addListeners() {
  window.addEventListener("resize", () => {
    resizeCanvas();
    renderMemeCanvas(getCurrSelectedImg());
  });
}

function renderMemeCanvas(imgNum) {
  let img = new Image();
  img.src = `img/meme-imgs (square)/${imgNum}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    renderText();
  };
}

function onNextLine() {
  changeCurrSelected();
  renderMemeCanvas(getCurrSelectedImg());
  const elInput = (document.querySelector("#text-input").value = "");
}

function onAddLine() {
  addLine();
  onNextLine();
}

function onFontChange(value) {
  setTxtFont(value);
  renderMemeCanvas(getCurrSelectedImg());
}

function onColorChange(color) {
  setTxtColor(color);
  renderMemeCanvas(getCurrSelectedImg());
}

function onSetText(txt) {
  setLineTxt(txt);
  renderMemeCanvas(getCurrSelectedImg());
}

function renderText(isDownload=false) {
  const { lines, selectedImgId, selectedLineIdx } = getMeme();
  lines.forEach((line, idx) => {
    const color = line.color;
    const size = line.size;
    const align = line.align;
    const font = line.font;
    if (idx === selectedLineIdx&!isDownload) {
      let recPosY;
      if (selectedLineIdx === 0) recPosY = 0;
      else if (selectedLineIdx === 1)
        recPosY = gElCanvas.height - gElCanvas.height / 5 - 30;
      else recPosY = gElCanvas.height / 2 - 60;
      drawRect(10, recPosY + line.offSetY + 20);
    }
    if (idx === 0)
      drawText(
        line.txt,
        gElCanvas.width / 2,
        50 + line.offSetY,
        color,
        size,
        font,
        align
      );
    else if (idx === 1)
      drawText(
        line.txt,
        gElCanvas.width / 2,
        gElCanvas.height - 50 + line.offSetY,
        color,
        size,
        font,
        align
      );
    else
      drawText(
        line.txt,
        gElCanvas.width / 2,
        gElCanvas.height / 2 + line.offSetY,
        color,
        size,
        font,
        align
      );
  });
}

function onMoveText(sign) {
  const meme = getMeme();
  meme.lines[meme.selectedLineIdx].offSetY +=
    sign === "+" ? gMoveSize : -1 * gMoveSize;
  clearCanvas();
  renderMemeCanvas(getCurrSelectedImg());
}

function onSizeChange(sign) {
  changeMemeSize(sign);
  renderMemeCanvas(getCurrSelectedImg());
}

function onAlign(direc) {
  setTextAlign(direc);
  renderMemeCanvas(getCurrSelectedImg());
}

function onDelete() {
  deleteTxt();
  const elInput = (document.querySelector("#text-input").value = "");
  renderMemeCanvas(getCurrSelectedImg());
}

function downloadCanvas() {
  const elLink=document.querySelector('.download-link')
  let img = new Image();
  img.src = `img/meme-imgs (square)/${getCurrSelectedImg()}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    renderText(true);
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = "Meme.jpg";
    elLink.click();
  };  
}
