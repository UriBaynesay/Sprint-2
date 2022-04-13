"use strict";
var gMeme;

function deleteTxt(){
    gMeme.lines[gMeme.selectedLineIdx].txt='';
}

function setTextAlign(direc){
    gMeme.lines[gMeme.selectedLineIdx].align=direc;
}

function changeMemeSize(sign) {
  gMeme.lines[gMeme.selectedLineIdx].size =
    sign === "+"
      ? gMeme.lines[gMeme.selectedLineIdx].size + gSizeChange
      : gMeme.lines[gMeme.selectedLineIdx].size - gSizeChange;
}

function setTxtFont(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function setTxtColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function getCurrSelectedTxt() {
  return gMeme.lines[gMeme.selectedLineIdx].txt;
}

function getMeme() {
  return gMeme;
}

function createMeme(imgNum) {
  gMeme = {
    selectedImgId: imgNum,
    selectedLineIdx: 0,
    lines: [
      {
        txt: "",
        size: 50,
        align: "center",
        color: "white",
        font: "impact",
      },
    ],
  };
}
