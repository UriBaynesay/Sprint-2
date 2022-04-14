"use strict";

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
  const imgs=getImgs();
  let strHTML = imgs.map((img) => {
    return `<img class="img-${img.id}"
      src="${img.url}"
      onclick="onImgClick(this)"
      alt=""/>`;
  });
  elGall.innerHTML = strHTML.join("");
}
