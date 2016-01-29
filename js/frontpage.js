"use strict"

var charIndex = localStorage.getItem('charIndex');
if (charIndex) {
  var drinkChoice = localStorage.getItem('drinkChoice');
  var userName = localStorage.getItem(userName);
} else {
  localStorage.clear();
}

var drink = [];
var character = [];


var buttonId = document.getElementById('button');
buttonId.addEventListener('click', buttonClick);
function buttonClick(){
  var user = document.getElementById('nameField').value;

  localStorage.setItem('drinkChoice', drink[0]);
  localStorage.setItem('charIndex', character[0]);
  localStorage.setItem('userName', user);
};

var clearLSID = document.getElementById('clearLS');
clearLSID.addEventListener('click',clearLS);
function clearLS() {
  localStorage.clear();
}

var beerId = document.getElementById('one');
beerId.addEventListener('click', beer);
function beer(){
  drink[0] = 0;
};

var wineId = document.getElementById('two');
wineId.addEventListener('click', wine);
function wine(){
  drink[0] = 1;
};

var shotsId = document.getElementById('three');
shotsId.addEventListener('click', shots);
function shots(){
  drink[0] = 2;
};

var ciderId = document.getElementById('four');
ciderId.addEventListener('click', cider);
function cider(){
  drink[0] = 3;
};
var wineCoolerId = document.getElementById('five');
wineCoolerId.addEventListener('click', wineCooler);
function wineCooler(){
  drink[0] = 4;
};
var koolAidId = document.getElementById('six');
koolAidId.addEventListener('click', koolAid);
function koolAid(){
  drink[0] = 5;
};
var cocktailId = document.getElementById('seven');
koolAidId.addEventListener('click', cocktail);
function cocktail(){
  drink[0] = 6;
};

// adding character selection

var picture1 = document.getElementById('pic1');
picture1.addEventListener('click', opponent1);
function opponent1(){
    character[0] = 0;
};
var picture2 = document.getElementById('pic2');
picture2.addEventListener('click', opponent2);
function opponent2(){
  character[0] = 1;
};
var picture3 = document.getElementById('pic3');
picture3.addEventListener('click', opponent3);
function opponent3(){
  character[0] = 2;
};
var picture4 = document.getElementById('pic4');
picture4.addEventListener('click', opponent4);
function opponent4(){
  character[0] = 3;
};
var picture5 = document.getElementById('pic5');
picture5.addEventListener('click', opponent5);
function opponent5(){
  character[0] = 4;
};
var picture6 = document.getElementById('pic6');
picture6.addEventListener('click', opponent6);
function opponent6(){
  character[0] = 5;
};
var picture7 = document.getElementById('pic7');
picture7.addEventListener('click', opponent7);
function opponent7(){
  character[0] = 6;
};
var picture8 = document.getElementById('pic8');
picture8.addEventListener('click', opponent8);
function opponent8(){
  character[0] = 7;
};
var picture9 = document.getElementById('pic9');
picture9.addEventListener('click', opponent9);
function opponent9(){
  character[0] = 8;
};
var picture10 = document.getElementById('pic10');
picture10.addEventListener('click', opponent10);
function opponent10(){
  character[0] = 9;
};


// the code for yes/no21 css is from online question of male/female. I have yet to change the css roots, instead i changed them into variables for yes/no
// var yes21 = document.getElementById('male');
// var no21 = document.getElementById('female');
//
// if(document.getElementById('male').checked) {
// alert('congradulations you can play!!!');
// }else if(document.getElementById('female').checked) {
//  alert('awwh you are too young and forced to leave');
// }
