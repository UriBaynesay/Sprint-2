"use strict"
var gElCanvas;
var gCtx;


function onEditorInit(imgNum){
    renderCanvas(imgNum);
}

function renderCanvas(imgNum){
    gElCanvas=document.querySelector('canvas');
    gCtx=gElCanvas.getContext('2d');
    let img = new Image();
    img.src=`./img/meme-imgs (square)/${imgNum}.jpg`;


    // gElCanvas.width=img.naturalWidth;
    // gElCanvas.height=img.naturalHeight;
    // console.log(`gElCanvans width : ${gElCanvas.width} imgwidth : ${img.naturalWidth} `);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    };
}