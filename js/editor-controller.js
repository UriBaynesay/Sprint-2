"use strict";
const CANVAS_INDX = { picture: 0, top: 1, middle: 2, bottom: 3,download:4 };

var gElCanvas = [];
var gCtx = [];
const gMoveSize = 20;
const gSizeChange = 10;

function onEditorInit(imgNum) {
  gElCanvas[CANVAS_INDX.picture] = document.querySelector("#canvas");
  gElCanvas[CANVAS_INDX.top] = document.querySelector("#top-text-canvas");
  gElCanvas[CANVAS_INDX.middle] = document.querySelector("#middle-text-canvas");
  gElCanvas[CANVAS_INDX.bottom] = document.querySelector("#bottom-text-canvas");
  gElCanvas[CANVAS_INDX.download] = document.querySelector("#download-canvas");
  gCtx[CANVAS_INDX.picture] = gElCanvas[CANVAS_INDX.picture].getContext("2d");
  gCtx[CANVAS_INDX.top] = gElCanvas[CANVAS_INDX.top].getContext("2d");
  gCtx[CANVAS_INDX.middle] = gElCanvas[CANVAS_INDX.middle].getContext("2d");
  gCtx[CANVAS_INDX.bottom] = gElCanvas[CANVAS_INDX.bottom].getContext("2d");
  gCtx[CANVAS_INDX.download] = gElCanvas[CANVAS_INDX.download].getContext("2d");
  resizeCanvas();
  addListeners();
  renderImg(imgNum);
  createMeme(imgNum);
  // renderCanvas();
  lineFocus();
}

function addListeners(){
  window.addEventListener('resize', () => {
    resizeCanvas()
    renderImg(getCurrSelectedImg());
    renderText();
})
}

function onNextLine(){
    let selected=getCurrSelectedIdx();
    if(selected===1) gElCanvas[3].classList.remove('line-focus');
    else if(selected===2) gElCanvas[2].classList.remove('line-focus');
    else gElCanvas[1].classList.remove('line-focus');
    changeCurrSelected();
    lineFocus();
}

function onAddLine() {
  addLine();
  onNextLine();
}

function onFontChange(value) {
  setTxtFont(value);
  renderText();
}

function onColorChange(color) {
  setTxtColor(color);
  renderText();
}

function lineFocus(){
  const elInput=document.querySelector('#text-input').value='';
    const selected=getCurrSelectedIdx();
    if(selected===1) gElCanvas[3].classList.add('line-focus');
    else if(selected===2) gElCanvas[2].classList.add('line-focus');
    else gElCanvas[1].classList.add('line-focus');
}

function onSetText(txt) {
  setLineTxt(txt);
  renderText();
}

function renderText() {
  const { lines, selectedImgId, selectedLineIdx } = getMeme();
  lines.forEach((line,idx) => {
    const color = line.color;
    const size = line.size;
    const align = line.align;
    const font = line.font;
    let canvasNum;
    if(idx===0) canvasNum=1;
    else if(idx===1) canvasNum=3;
    else canvasNum=2;
    drawText(line.txt, gElCanvas[CANVAS_INDX.picture].width/2, 50, color, size, font, align,canvasNum);
  });
}

function onMoveText(sign) {
  let selected = getCurrSelectedIdx() + 1;
  if(selected===2) selected=3;
  else if(selected===3) selected=2;
  else selected=1;
  gElCanvas[selected].style.top=(sign==='+')?
  `${(parseInt(gElCanvas[selected].style.top)+gMoveSize)}px`:
  `${(parseInt(gElCanvas[selected].style.top)-gMoveSize)}px`;
  if(parseInt(gElCanvas[CANVAS_INDX.top].style.top)<0) gElCanvas[selected].style.top='0px';
  if(parseInt(gElCanvas[CANVAS_INDX.top].style.top)>400) gElCanvas[selected].style.top='400px';
}

function onSizeChange(sign) {
  changeMemeSize(sign);
  renderText();
}

function onAlign(direc) {
  setTextAlign(direc);
  renderText();
}

function onDelete() {
  deleteTxt();
  renderText();
}

function downloadCanvas(elLink) {
  const topCanvasPos=parseInt(gElCanvas[CANVAS_INDX.top].style.top);
  const middleCanvasPos=parseInt(gElCanvas[CANVAS_INDX.middle].style.top);
  const bottomCanvasPos=parseInt(gElCanvas[CANVAS_INDX.bottom].style.top);
  gCtx[CANVAS_INDX.download].drawImage(gElCanvas[CANVAS_INDX.picture],0,0,500,500);
  gCtx[CANVAS_INDX.download].drawImage(gElCanvas[CANVAS_INDX.top],25,topCanvasPos,450,100);
  gCtx[CANVAS_INDX.download].drawImage(gElCanvas[CANVAS_INDX.middle],25,middleCanvasPos,450,100);
  gCtx[CANVAS_INDX.download].drawImage(gElCanvas[CANVAS_INDX.bottom],25,bottomCanvasPos,450,100);
  const data = gElCanvas[CANVAS_INDX.download].toDataURL();
  elLink.href = data;
  elLink.download = "Meme.jpg";
}
