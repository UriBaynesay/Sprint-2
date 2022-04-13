"use strict"

function onImgClick(elImg){
    // console.log('img num : ',elImg.classList[0].split('-')[1]);
    const elGall=document.querySelector('.gallery-container');
    elGall.style.display=`none`;
    const elEditor=document.querySelector('.editor-container');
    elEditor.style.display=`flex`;
    const imgNum=elImg.classList[0].split('-')[1];
    onEditorInit(imgNum);
}
