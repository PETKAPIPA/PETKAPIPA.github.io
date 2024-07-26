let item = document.querySelector(".item");

block.onmousemove = function (e) {
  item.style.position = "fixed";
  item.style.left = e.clientX + -20 + "px";
  item.style.top = e.clientY + -20 + "px";
};

const peta = '../images/peta3.png'
const fil = '../images/filipp.png'
const miron = '../images/miron.png'
const ivan = '../images/vania.png'


function changeImage(imgsrc) {
  let myImg = document.getElementById('myImg');
  myImg.src = imgsrc;
};


