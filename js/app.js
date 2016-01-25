// 'use strict'

var allCharacters = [
  new newChar('Abe Lincoln', '---', ['Nearly all people can stand adversity, but if you want to test someones character, get them drunk.', 'This will be over before you can say, "Sic semper tyrannis"!'], ['Four score and seventy years years ago, I was drinking your great grandfather\'s ass under the table', 'I destroy my enemies when I make them my friends.'], ['placeholder', 'placeholder']),

  new newChar('Genghis Khan', '---', ['I am the punishment of God...If you had not committed great sins, God would not have sent a punishment like me upon you.'], ['I am the flail of god. Had you not created great sins, god would not have sent a punishment like me upon you.', 'A man\'s greatest joy is crushing his enemies.'], ['There is no value in anything until it is finished.']),

  new newChar('William Shakespeare', '---', ['To drink, or not to drink. That is the question.', ''], ['Brevity is the soul of wit, you have none.', 'Do you think I am easier to be played on than a pipe?'], ['Misery acquaints a man with strange bedfellows.', 'There is nothing either good or bad, but thinking makes it so']),

  new newChar('Albert Einstein', '---', ['There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Logic will get you from A to Z; imagination will get you everywhere.'], ['Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'A clever person solves a problem. A wise person avoids it.'], ['Not everything that counts can be counted, and not everything that can be counted counts.', 'placeholder']),

  new newChar('Napolean', '---', ['I am Napolean, I should have conquered the world!', 'Let us drink, you swine!'], ['Never interrupt your enemy when he is making a mistake.', 'I have never found the limit of my capacity to drink.'], ['Victory belongs to the most persevering.', 'Death is nothing, but to live defeated and inglorious is to die daily.']),

  new newChar('Ghandi', '---', ['Be the change that you wish to see in the world.', 'The future depends on what you do today... and your sorry ass is going to get drunk.'], ['An eye for an eye will only make the whole world blind.', 'Nobody can hurt me without my permission.', 'Hate the sin, love the sinner.', 'I will crush you with the power of one thousand suns!'], ['First they ignore you, then they ridicule you, then they fight you, and then you win.', 'To live peacefully is essential, but I may have to make an exception for you.']),

  new newChar('Mother Theresa', '---', ['Peace begins with a smile... and a smile starts with a drink.', 'Live simply so others may simply live.'], ['Take a drink or fuck off.', 'I can do things you cannot, you can do things I cannot... but drinking isn\'t one of them!'], ['If you judge people, you have no time to love them.', 'placeholder']),

  new newChar('John Belushi', '---', ['On stage is the only place where I really know what I\'m doing.', 'I\'m John Belushi!'], ['Nothing is over until we decide it is! Was it over when the Germans bombed Pearl Harbor? Hell, no!', 'Wise Up!', 'I suggest you go out and buy as many Blues albums as you can.'], ['I owe it all to little chocolate donuts.', 'Christ, seven years of college, down the drain.'])
];

function newChar(name, path, soberQuotes, insults, winLose) {
  this.name = name;
  this.path = path;
  this.soberQuotes = soberQuotes;
  this.insults = insults;
  this.winLose = winLose;
}
var cardImagePaths = ['aaa'];
var cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function cards(cardImagePaths,cardValues) {
  this.cardImagePaths = cardImagePaths;
  this.cardValues = cardValues;
}

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
var totalUserDrinks = 'total number of computer drinks';
var highButtonId = 'button ID of HIGH button';
var lowButtonId = 'button ID of low button';
var passButtonId = 'button id for pass button';


var computerCardValue = 0;
var totalComputerPicks = 0;
var computerPick = 0;
var randomCardIndex = 0;
var oldCardValue = 0;
var newCardValue = 0;
var userCardValue = 0;
var totalUserPicks = 0;
var userPick = 0;
var numberOfPicks = 0;

var cardData = new cards(cardImagePaths,cardValues);

function randomCardGenerator() {
  var randomIndex = Math.floor(math.random() * (cardData.cardValues.length));
  //DISPLAY RANDOM CARD HERE//
  newCardValue = cardData.cardValues[randomIndex];
  cardArrayLength.splice(randomIndex,1);
  arrayOfCardValues.splice(randomIndex,1);
  numberOfPicks += 1;
  if (numberOfPicks > 51) {
    cardData = new cards(cardImagePaths,cardValues);
    numberOfPicks = 0;
    }
}

function userIntro() {
  textID.textContent = "TAUNT FROM OPPONENT";
  imageID.src = pathToDeckOfCardImage;
  randomCardGenerator();
  textID.textContent = "Will the next card be higher or lower than the card shown?";
  oldCardValue = newCardValue;
  userPick();
}

highButtonID.addEventListener('click',userHighPick);
lowButtonID.addEventListener('click',userLowPick);
passButtonId.addEventListener('click',computerIntro);

function userHighPick () {
  oldCardValue = newCardValue;
  randomCardGenerator();
  if (newCardValue <= oldCardValue) {
    userIncorrectPick();
  } else {
    textID.textContent = 'YOU ARE CORRECT, PICK AGAIN';
  }
}

function userLowPick () {
  oldCardValue = newCardValue;
  randomCardGenerator();
  if (newCardValue >= oldCardValue) {
    userIncorrectPick();
  } else {
    textID.textContent = 'YOU ARE CORRECT, PICK AGAIN';
  }
}

function userIncorrectPick() {
  textID.textContent = 'DRINK!!';
  opponentImageID.src = opponentDrinking;
  totalUserDrinks += 1;
  gameplayDivId.innerHTML = '';
  computerIntro();
}

// function handleOnHighButton(event){

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
