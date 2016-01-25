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
var newCardValue = 'randomly generated new card value';
var oldCardValue = 'randomly generated value of old card';
var cryOfDismay = 'cry of dismay';
var opponentImageID = 'id of opponent image area';
var totalComputerDrinks = 'total number of computer drinks';
var gameplayDivId = 'id for div containing card image space';


var computerCardValue = 0;
var totalComputerPicks = 0;
var computerPick = 0;
var randomCardIndex = 0;
var oldCardValue = 0;
var newCardValue = 0;

function computerChoice () {
  if (totalComputerPicks === 0) {
    computerPick = Math.floor(Math.random() * (2)) + 1;
  } else {
    computerPick = Math.floor(Math.random() * (3)) + 1;
  }
}

function computerIntro () {
  textID.textContent = opponentInsult;
  randomCardGenerator();
  imageID.src = pathToDeckOfCardImage;
  computerPick();
}

function computerPick () {
  textID.textContent = soberQuote;
  computerChoice();
  if (computerPick === 1 || computerPick === 2) {
    oldCardValue = newCardValue;
    computerNewCard();
  } else {
    userIntro();
  }
}

function computerNewCard () {
  randomCardGenerator();
  if (computerPick === 1) {
    if (newCardValue <= oldCardValue) {
      computerIncorrectPick();
    } else {
      computerPick();
    }
  }
  if (computerPick === 2) {
    if (newCardValue >= oldCardValue) {
      computerIncorrectPick();
    } else {
      computerPick();
    }
  }
}

function computerIncorrectPick () {
  textID.textContent = cryOfDismay;
  opponentImageID.src = opponentDrinking;
  totalComputerDrinks += 1;
  gameplayDivId.src = '';
  userIntro();
}
