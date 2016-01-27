// 'use strict';

function newChar(name, path, soberQuotes, insults, winLose) {
  this.name = name;
  this.path = path;
  this.soberQuotes = soberQuotes;
  this.insults = insults;
  this.winLose = winLose;
}

var allCharacters = [
  new newChar('Abe Lincoln', ['../img/abe2.png','../img/abe1.png'], ['Nearly all people can stand adversity, but if you want to test someones character, get them drunk.', 'This will be over before you can say, "Sic semper tyrannis"!','It is not best to swap horses while crossing the river.'], ['Four score and seventy years years ago, I was drinking your great grandfather\'s ass under the table', 'I destroy my enemies when I make them my friends.'], ['placeholder', 'placeholder']),

  new newChar('Genghis Khan', ['../img/genghis2.png','../img/genghis.png'], ['I am the punishment of God...If you had not committed great sins, God would not have sent a punishment like me upon you.'], ['I am the flail of god. Had you not created great sins, god would not have sent a punishment like me upon you.', 'A man\'s greatest joy is crushing his enemies.'], ['There is no value in anything until it is finished.']),

  new newChar('William Shakespeare', ['../img/shakes1.jpg','../img/shakes2.jpg'], ['To drink, or not to drink. That is the question.', ''], ['Brevity is the soul of wit, you have none.', 'Do you think I am easier to be played on than a pipe?'], ['Misery acquaints a man with strange bedfellows.', 'There is nothing either good or bad, but thinking makes it so']),

  new newChar('Albert Einstein', '---', ['There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Logic will get you from A to Z; imagination will get you everywhere.'], ['Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'A clever person solves a problem. A wise person avoids it.'], ['Not everything that counts can be counted, and not everything that can be counted counts.', 'placeholder']),

  new newChar('Napolean', '---', ['I am Napolean, I should have conquered the world!', 'Let us drink, you swine!'], ['Never interrupt your enemy when he is making a mistake.', 'I have never found the limit of my capacity to drink.'], ['Victory belongs to the most persevering.', 'Death is nothing, but to live defeated and inglorious is to die daily.']),

  new newChar('Ghandi', '---', ['Be the change that you wish to see in the world.', 'The future depends on what you do today... and your sorry ass is going to get drunk.'], ['An eye for an eye will only make the whole world blind.', 'Nobody can hurt me without my permission.', 'Hate the sin, love the sinner.', 'I will crush you with the power of one thousand suns!'], ['First they ignore you, then they ridicule you, then they fight you, and then you win.', 'To live peacefully is essential, but I may have to make an exception for you.']),

  new newChar('Mother Theresa', '---', ['Peace begins with a smile... and a smile starts with a drink.', 'Live simply so others may simply live.'], ['Take a drink or fuck off.', 'I can do things you cannot, you can do things I cannot... but drinking isn\'t one of them!'], ['If you judge people, you have no time to love them.', 'placeholder']),

  new newChar('John Belushi', '---', ['On stage is the only place where I really know what I\'m doing.', 'I\'m John Belushi!'], ['Nothing is over until we decide it is! Was it over when the Germans bombed Pearl Harbor? Hell, no!', 'Wise Up!', 'I suggest you go out and buy as many Blues albums as you can.'], ['I owe it all to little chocolate donuts.', 'Christ, seven years of college, down the drain.'])
];

var charIndex = 1; //Temporary variable

var cardData = {
  cardImagePath: ['../img/card_images/ace_of_clubs.png','../img/card_images/2_of_clubs.png','../img/card_images/3_of_clubs.png','../img/card_images/4_of_clubs.png','../img/card_images/5_of_clubs.png','../img/card_images/6_of_clubs.png','../img/card_images/7_of_clubs.png','../img/card_images/8_of_clubs.png','../img/card_images/9_of_clubs.png','../img/card_images/10_of_clubs.png','../img/card_images/jack_of_clubs2.png','../img/card_images/queen_of_clubs2.png','../img/card_images/king_of_clubs2.png','../img/card_images/ace_of_spades.png','../img/card_images/2_of_spades.png','../img/card_images/3_of_spades.png','../img/card_images/4_of_spades.png','../img/card_images/5_of_spades.png','../img/card_images/6_of_spades.png','../img/card_images/7_of_spades.png','../img/card_images/8_of_spades.png','../img/card_images/9_of_spades.png','../img/card_images/10_of_spades.png','../img/card_images/jack_of_spades2.png','../img/card_images/queen_of_spades2.png','../img/card_images/king_of_spades2.png','../img/card_images/ace_of_hearts.png','../img/card_images/2_of_hearts.png','../img/card_images/3_of_hearts.png','../img/card_images/4_of_hearts.png','../img/card_images/5_of_hearts.png','../img/card_images/6_of_hearts.png','../img/card_images/7_of_hearts.png','../img/card_images/8_of_hearts.png','../img/card_images/9_of_hearts.png','../img/card_images/10_of_hearts.png','../img/card_images/jack_of_hearts2.png','../img/card_images/queen_of_hearts2.png','../img/card_images/king_of_hearts2.png','../img/card_images/ace_of_diamonds.png','../img/card_images/2_of_diamonds.png','../img/card_images/3_of_diamonds.png','../img/card_images/4_of_diamonds.png','../img/card_images/5_of_diamonds.png','../img/card_images/6_of_diamonds.png','../img/card_images/7_of_diamonds.png','../img/card_images/8_of_diamonds.png','../img/card_images/9_of_diamonds.png','../img/card_images/10_of_diamonds.png','../img/card_images/jack_of_diamonds2.png','../img/card_images/queen_of_diamonds2.png','../img/card_images/king_of_diamonds2.png'],
  cardValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13]
};

var computerCardValue = 0;
var totalComputerDrinks = 0;
var totalComputerPicks = 0;
var computerPick = 0;
var oldCardValue = 0;
var newCardValue = 0;
var userCardValue = 0;
var totalUserDrinks = 0;
var userPick = 0;
var numberOfPicks = 0;
var tempDrinks = 0;

var textID = document.getElementById('opponentText');
var opponentID = document.getElementById('opponentImage');
var cardImageID = document.getElementById('frontImg');
var card = document.getElementById('card');
var cardContainer = document.getElementById('container');

function computerSober () {
  opponentID.src = allCharacters[charIndex].path[0];
  var quoteIndex = Math.floor(Math.random() * (allCharacters[charIndex].soberQuotes.length));
  console.log(allCharacters[charIndex].soberQuotes[quoteIndex]);
  textID.textContent = allCharacters[charIndex].soberQuotes[quoteIndex];
}

function computerInsult () {
  opponentID.src = allCharacters[charIndex].path[1];
  var quoteIndex = Math.floor(Math.random() * (allCharacters[charIndex].insults.length));
  console.log(allCharacters[charIndex].insults[quoteIndex]);
  textID.textContent = allCharacters[charIndex].insults[quoteIndex];
}

function computerWinLose () {
  var quoteIndex = Math.floor(Math.random() * (allCharacters[charIndex].winLose.length));
  console.log(allCharacters[charIndex].winLose[quoteIndex]);
  textID.textContent = allCharacters[charIndex].winLose[quoteIndex];
}

function randomCardGenerator() {
  if (userPick > 0) {
    document.getElementById('passButtonID').style.display = 'inline-block';
  }
  var randomIndex = Math.floor(Math.random() * (cardData.cardValue.length));
  var imgSource = cardData.cardImagePath[randomIndex];
  cardImageID.src = imgSource;
  var leftPosition = 80 - numberOfPicks;
  setTimeout(function(){
    card.className = 'flipped';
    setTimeout(function() {
      var imgEl = document.createElement('img');
      imgEl.src = imgSource;
      imgEl.className = 'oldCard';
      cardContainer.appendChild(imgEl);
    }, 1100);
  }, 600);
  setTimeout(function(){
    document.getElementById('backImg').src = '';
    document.getElementById('frontImg').src = '';
    card.className = 'card';
  }, 1600);
  newCardValue = cardData.cardValue[randomIndex];
  console.log('The new card value is ' + newCardValue);
  cardData.cardImagePath.splice(randomIndex,1);
  cardData.cardValue.splice(randomIndex,1);
  numberOfPicks += 1;
  tempDrinks += 1;
  console.log('The number of picks are ' + numberOfPicks);
  if (numberOfPicks > 51) {
    cardData = {
      cardImagePath: ['../img/card_images/ace_of_clubs.png','../img/card_images/2_of_clubs.png','../img/card_images/3_of_clubs.png','../img/card_images/4_of_clubs.png','../img/card_images/5_of_clubs.png','../img/card_images/6_of_clubs.png','../img/card_images/7_of_clubs.png','../img/card_images/8_of_clubs.png','../img/card_images/9_of_clubs.png','../img/card_images/10_of_clubs.png','../img/card_images/jack_of_clubs2.png','../img/card_images/queen_of_clubs2.png','../img/card_images/king_of_clubs2.png','../img/card_images/ace_of_spades.png','../img/card_images/2_of_spades.png','../img/card_images/3_of_spades.png','../img/card_images/4_of_spades.png','../img/card_images/5_of_spades.png','../img/card_images/6_of_spades.png','../img/card_images/7_of_spades.png','../img/card_images/8_of_spades.png','../img/card_images/9_of_spades.png','../img/card_images/10_of_spades.png','../img/card_images/jack_of_spades2.png','../img/card_images/queen_of_spades2.png','../img/card_images/king_of_spades2.png','../img/card_images/ace_of_hearts.png','../img/card_images/2_of_hearts.png','../img/card_images/3_of_hearts.png','../img/card_images/4_of_hearts.png','../img/card_images/5_of_hearts.png','../img/card_images/6_of_hearts.png','../img/card_images/7_of_hearts.png','../img/card_images/8_of_hearts.png','../img/card_images/9_of_hearts.png','../img/card_images/10_of_hearts.png','../img/card_images/jack_of_hearts2.png','../img/card_images/queen_of_hearts2.png','../img/card_images/king_of_hearts2.png','../img/card_images/ace_of_diamonds.png','../img/card_images/2_of_diamonds.png','../img/card_images/3_of_diamonds.png','../img/card_images/4_of_diamonds.png','../img/card_images/5_of_diamonds.png','../img/card_images/6_of_diamonds.png','../img/card_images/7_of_diamonds.png','../img/card_images/8_of_diamonds.png','../img/card_images/9_of_diamonds.png','../img/card_images/10_of_diamonds.png','../img/card_images/jack_of_diamonds2.png','../img/card_images/queen_of_diamonds2.png','../img/card_images/king_of_diamonds2.png'],
      cardValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13]
    };
    numberOfPicks = 0;
    }

}

function userIntro() {
  userPick = 0;
  // textID.textContent = 'Hi I am ' + allCharacters[charIndex].name + ', come drink with me.'
  computerInsult();
  randomCardGenerator();
  console.log("Will the next card be higher or lower than the card shown?");
  oldCardValue = newCardValue;
}

function userIntroNonRandom() {
  userPick = 0;
  computerInsult();
  textID.textContent = "Will the next card be higher or lower than the card shown?";
  console.log("Will the next card be higher or lower than the card shown?");
  oldCardValue = newCardValue;
}

highButtonID.addEventListener('click',userHighPick);
lowButtonID.addEventListener('click',userLowPick);
passButtonID.addEventListener('click',userPassPick);

function userHighPick () {
  userPick += 1;
  oldCardValue = newCardValue;
  randomCardGenerator();
  if (newCardValue <= oldCardValue) {
    userIncorrectPick();
  } else {
    console.log('YOU ARE CORRECT, PICK AGAIN');
    textID.textContent = 'YOU ARE CORRECT, PICK AGAIN';
  }
}

function userLowPick () {
  userPick += 1;
  oldCardValue = newCardValue;
  randomCardGenerator();
  if (newCardValue >= oldCardValue) {
    userIncorrectPick();
  } else {
    console.log('YOU ARE CORRECT, PICK AGAIN');
    textID.textContent = 'YOU ARE CORRECT, PICK AGAIN';
  }
}

function userPassPick () {
  console.log('PASS TO ME');
  textID.textContent = 'PASS TO ME';
  computerIntroPass();
}

function userIncorrectPick() {
  textID.textContent = 'DRINK!!';
  totalUserDrinks += tempDrinks;
  tempDrinks = 0;
  console.log('The total user drinks are ' + totalUserDrinks);
  computerIntroNonRandom();
}

function computerChoice () {
  if (totalComputerPicks === 0) {
    computerPick = Math.floor(Math.random() * (2)) + 1;
    console.log('The computer choice is ' + computerPick);
    totalComputerPicks += 1;
  } else {
    computerPick = Math.floor(Math.random() * (3)) + 1;
    console.log('The computer choice is ' + computerPick);
    totalComputerPicks += 1;
  }
}

function computerIntro () {
  totalComputerPicks = 0;
  computerInsult();
  randomCardGenerator();
  computerPicker();
}

function computerIntroNonRandom () {
  totalComputerPicks = 0;
  computerInsult();
  computerPicker();
}

function computerIntroPass () {
  totalComputerPicks = 0;
  computerInsult();
  computerPicker();
}

function computerPicker () {
  computerSober();
  computerChoice();
  if (computerPick === 1 || computerPick === 2) {
    oldCardValue = newCardValue;
    if (oldCardValue <= 3) {
      computerPick = 1;
      console.log('The computer choice changed to ' + computerPick);
    } else if (oldCardValue >= 11) {
      computerPick = 2;
      console.log('The computer choice changed to ' + computerPick);
    } else {
      computerPick = computerPick;
    }
    computerNewCard();
  } else {
    document.getElementById('passButtonID').style.display = 'none';
    userIntroNonRandom();
  }
}

function computerNewCard () {
  randomCardGenerator();
  if (computerPick === 1) {
    if (newCardValue <= oldCardValue) {
      computerIncorrectPick();
    } else {
      computerPicker();
    }
  }
  if (computerPick === 2) {
    if (newCardValue >= oldCardValue) {
      computerIncorrectPick();
    } else {
      computerPicker();
    }
  }
}

function computerIncorrectPick () {
  computerWinLose();
  totalComputerDrinks += tempDrinks;
  tempDrinks = 0;
  console.log('The total computer drinks are ' + totalComputerDrinks);
  document.getElementById('passButtonID').style.display = 'none';
  userIntroNonRandom();
}

userIntro();
