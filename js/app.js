'use strict'


var totalUserDrinks = 'total number of computer drinks';



var userCardValue = 0;
var totalUserPicks = 0;
var userPick = 0;
numberOfPicks = 0;
//random card
function randomCardGenerator() {
  var randomIndex = Math.floor(math.random() * (cardArrayLength));
  cardArrayLength.splice(randomIndex,1);
  arrayOfCardValues.splice(randomIndex,1);
  numberOfPicks += 1;
  if (numberOfPicks > 51) {
    cards = new CardGenerator(cardArrayLength, arrayOfCardValues);
    numberOfPicks = 0;
    }
}

function userChoice() {
  if totalUserPicks === 0 {
    userPick = Math.floor(Math.random() * (2)) + 1;
} else {
    userPick = Math.floor(Math.random() * (3)) + 1;
  }
}

function userIntro() {
  imgID.src = pathToDeckOfCardImage;
  randomCardGenerator();
  newCardValue = oldCardValue;
  userPick();
}

function userPick() {
  userChoice();
  if(userPick === 1 || userPick ====2){
    userNewCard();
  } else {
    computerIntro();
  }
}

function userNewCard() {
  randomCardGenerator();
  if(userPick === 1) {
    if(newCardValue <= oldCardValue) {
      userIncorrectPick();
    } else {
      userPick();
    }
  }
  if(userPick === 2) {
    if(newCardValue >= oldCardValue) {
      userIncorrectPick();
    } else {
      userPick();
    }
  }
}
function userIncorrectPick() {
  textID.textContent = 'DRINK!!';
  opponentImageID.src = opponentDrinking;
  totalUserDrinks += 1;
  gameplayDivId.innerHTML = '';
  computerIntro();
}

// high/low buttons


highButton.addEventListener('click',handleOnHighButton);
lowButton.addEventListener('click',handleOnLowButton);


function handleOnHighButton(event){

}
