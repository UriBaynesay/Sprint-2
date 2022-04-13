"use strict"
var gElCanvas;
var gCtx;
let gCurrOffSet=0;
const gMoveSize=20;


function onEditorInit(imgNum){
    gElCanvas=document.querySelector('canvas');
    gCtx=gElCanvas.getContext('2d');
    renderImg(imgNum);
    createMeme(imgNum);
}

function renderImg(imgNum){
    let img = new Image();
    img.src=`img/meme-imgs (square)/${imgNum}.jpg`;
    // gElCanvas.width=img.naturalWidth;
    // gElCanvas.height=img.naturalHeight;
    // console.log(`gElCanvans width : ${gElCanvas.width} imgwidth : ${img.naturalWidth} `);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    };
}

function renderText(txt){
    setLineTxt(txt);
    const meme=getMeme();
    const selectedLine=meme.selectedLineIdx
    const color=meme.lines[selectedLine].color;
    const size=meme.lines[selectedLine].size;
    const align=meme.lines[selectedLine].align;
    // console.log('test destrocture : ',selectedImgId);
    let img = new Image();
    img.src=`img/meme-imgs (square)/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(txt, gElCanvas.width / 2,50+gCurrOffSet,color,size,align)
    };
}

function drawText(txt, x, y,color,size,align) {
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = align;
    gCtx.fillStyle = color;
    gCtx.fillText(txt, x, y);
    gCtx.font = `${size}px david`;
    gCtx.strokeStyle = 'black';
    gCtx.strokeText(txt, x, y);
}

function onMoveText(sign){
    gCurrOffSet=(sign==='+')?gCurrOffSet+gMoveSize:gCurrOffSet-gMoveSize;
    renderText(getCurrSelectedTxt());
}