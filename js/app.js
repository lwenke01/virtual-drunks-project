// 'use strict'

var textID = "id of html text area";
var imageID = "id of html card image area";
var flipID = "id of html card flip image area";
var opponentInsult = "pick of opponent insult";
var pathToDeckOfCardImage = "image of deck of cards";
var cardArrayLength = "length of array of cards";
var pathToFlipCardImage = "array of card image paths";
var arrayOfCardValues = "array of card values";
var soberQuote = 'sober quote message';


var computerCardValue = 0;
var totalComputerPicks = 0;
var computerPick = 0;
var randomCardIndex = 0;
function computerChoice () {
  if (totalComputerPicks === 0) {
    computerPick = Math.floor(Math.random() * (2)) + 1;
  } else {
    computerPick = Math.floor(Math.random() * (3)) + 1;
  }
}
function computerIntro () {
  textID.textContent = opponentInsult;
  imageID.src = pathToDeckOfCardImage;
  randomCardGenerator();
  computerCardValue = arrayOfCardValues[randomCardIndex];
  flipID.src = pathToFlipCardImage[randomCardIndex];
  arrayOfCardValues.splice(randomCardIndex,1);
  pathToFlipCardImage.splice(randomCardIndex,1);
  computerPick();
}
function computerPick () {
  textID.textContent = soberQuote;
  computerChoice();
  if (computerPick === 1 || computerPick === 2) {
    computerNewCard();
  } else {
    userIntro();
  }
}
function computerNewCard () {
  randomCardGenerator();
}
