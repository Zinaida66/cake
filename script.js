"use strict";
const getS = (selector) => document.querySelector(selector); 
//Bento cake
document.querySelector(".text1").addEventListener("click", () => {
  getS('.boxs1').classList.remove('hide');
  getS('.close1').classList.remove('liv');
  getS('.dets1').classList.remove('divs');
})
document.querySelector(".close1").addEventListener("click", () => {
  getS('.boxs1').classList.add('hide');
  getS('.close1').classList.add('liv');
  getS('.dets1').classList.remove('divs');
})
//Desserts
document.querySelector(".text2").addEventListener("click", () => {
  getS('.boxs2').classList.remove('hide');
  getS('.close2').classList.remove('liv');

})
document.querySelector(".close2").addEventListener("click", () => {
  getS('.boxs2').classList.add('hide');
  getS('.close2').classList.add('liv');


})

document.querySelector(".text3").addEventListener("click", () => {
  getS('.boxs3').classList.remove('hide');
  getS('.close3').classList.remove('liv');

})
document.querySelector(".close3").addEventListener("click", () => {
  getS('.boxs3').classList.add('hide');
  getS('.close3').classList.add('liv');

})
document.querySelector(".text4").addEventListener("click", () => {
  getS('.boxs4').classList.remove('hide');
  getS('.close4').classList.remove('liv');

})
document.querySelector(".close4").addEventListener("click", () => {
  getS('.boxs4').classList.add('hide');
  getS('.close4').classList.add('liv');

})

