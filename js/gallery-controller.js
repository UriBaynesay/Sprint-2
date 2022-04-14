"use strict";

const imgsUrl = [
  "img/meme-imgs (square)/1.jpg",
  "img/meme-imgs (square)/2.jpg",
  "img/meme-imgs (square)/3.jpg",
  "img/meme-imgs (square)/4.jpg",
  "img/meme-imgs (square)/5.jpg",
  "img/meme-imgs (square)/6.jpg",
  "img/meme-imgs (square)/7.jpg",
  "img/meme-imgs (square)/8.jpg",
  "img/meme-imgs (square)/9.jpg",
  "img/meme-imgs (square)/10.jpg",
  "img/meme-imgs (square)/11.jpg",
  "img/meme-imgs (square)/12.jpg",
  "img/meme-imgs (square)/13.jpg",
  "img/meme-imgs (square)/14.jpg",
  "img/meme-imgs (square)/15.jpg",
  "img/meme-imgs (square)/16.jpg",
  "img/meme-imgs (square)/17.jpg",
  "img/meme-imgs (square)/18.jpg",
];

function onImgClick(elImg) {
  // console.log('img num : ',elImg.classList[0].split('-')[1]);
  const elGall = document.querySelector(".gallery-container");
  elGall.style.display = `none`;
  const elEditor = document.querySelector(".editor-container");
  elEditor.style.display = `flex`;
  const imgNum = elImg.classList[0].split("-")[1];
  onEditorInit(imgNum);
}

function onGallery() {
  document.body.classList.remove("menu-open");
  const elGall = document.querySelector(".gallery-container");
  elGall.style.display = `grid`;
  const elEditor = document.querySelector(".editor-container");
  elEditor.style.display = `none`;
  renderPictures();
}
function renderPictures() {
  const elGall = document.querySelector(".gallery-container");
  let strHTML = imgsUrl.map((img, idx) => {
    return `<img class="img-${idx + 1}"
      src="${img}"
      onclick="onImgClick(this)"
      alt=""/>`;
  });
  elGall.innerHTML = strHTML.join("");
}
