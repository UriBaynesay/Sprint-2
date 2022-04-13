"use strict"
var gMeme;

function setLineTxt(txt){
    gMeme.lines[gMeme.selectedLineIdx].txt=txt;
}

function getCurrSelectedTxt(){
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function getMeme(){
    return gMeme;
}

function createMeme(imgNum){
    gMeme={
        selectedImgId:imgNum,
        selectedLineIdx:0,
        lines:[
            {
                txt:'',
                size:50,
                align:'center',
                color:'white'
            }
        ]
    }
}