'use strict';
/*jshint -W117 */
/*jshint -W040 */
/*jshint -W097 */

function newChar(name, path, drinkCommand, soberQuotes, insults, winLose) {
  this.name = name;
  this.path = path;
  this.drinkCommand = drinkCommand;
  this.soberQuotes = soberQuotes;
  this.insults = insults;
  this.winLose = winLose;
}

var allCharacters = [
  new newChar('Abe Lincoln', ['../img/abe1.png', '../img/abe2.png'], ['Ah, take a drink, friend.', 'It\'s time to take a drink, friend.'], ['Nearly all people can stand adversity, but if you want to test someones character, get them drunk.', 'This will be over before you can say, "Sic semper tyrannis"!','It is not best to swap horses while crossing the river.'], ['Four score and seventy years years ago, I was drinking your great grandfather\'s ass under the table', 'I destroy my enemies when I get them drunk.'], ['placeholder', 'placeholder']),

  new newChar('Genghis Khan', ['../img/genghis2.png', '../img/genghis2.png'], ['DRINK!! You mongrel!', 'Drink or die a cowards death!'], ['I am the punishment of God...If you had not committed great sins, God would not have sent a punishment like me upon you.'], ['I am the flail of god. Had you not created great sins, god would not have sent a punishment like me upon you.', 'A man\'s greatest joy is crushing his enemies.', 'Come and sip from the cup of destruction.', 'It is not sufficient that I suceed, all others must fail.', 'If you\’re afraid \– don’t do it, \– if you’re doing it \– don\’t be afraid!'], ['There is no value in anything until it is finished.', 'Conquering the world is easy, it\'s getting of your horse and drinking that is hard.']),

  new newChar('William Shakespeare', ['../img/shakes1.jpg', '../img/shakes2.jpg'], ['Thou must drink, swine!', 'You scoundrel! Take a drink!'], ['To drink, or not to drink. That is the question.', ''], ['Brevity is the soul of wit, you have none.', 'Do you think I am easier to be played on than a pipe?', 'Thou art like a toad; ugly and venomous.', 'You are a most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality.', 'You scullion! You rampallian! You fustilarian! I\’ll tickle your catastrophe!', 'Thou art as loathsome as a toad.', 'Thou are pigeon-liver\’d and lack gall.', 'You are as a candle, the better burnt out.'], ['Misery acquaints a man with strange bedfellows.', 'There is nothing either good or bad, but thinking makes it so']),

  new newChar('Albert Einstein', ['../img/einsteinnormal.png', '../img/einstein1.png'], ['Take a drink = MC^2.'], ['There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Logic will get you from A to Z; imagination will get you everywhere.'], ['Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'A clever person solves a problem. A wise person avoids it.', 'The most comprehensible thing about you is that you are incomprehensible.', 'I never think of the future. It comes soon enough. Your failure that is.'], ['Not everything that counts can be counted, and not everything that can be counted counts.', 'Weakness of attitude becomes weakness of character.']),

  new newChar('Napolean', '---', ['Take a drink, good sir.', 'Drink now or forever hold your peace!'], ['I am Napolean, I should have conquered the world!', 'Let us drink, you swine!'], ['Never interrupt your enemy when he is making a mistake.', 'I have never found the limit of my capacity to drink.', 'If you want something done well, one must do it themselves.', 'While drinking, stupidity is not a handicap.', 'It requires more courage to drink than to die!'], ['Victory belongs to the most persevering.', 'Death is nothing, but to live defeated and inglorious is to die daily.', 'What is your victory but a fable agreed upon.', 'He who fears being conquered is sure of defeat.']),

  new newChar('Ghandi', '---', ['Take a drink, friend.'], ['Be the change that you wish to see in the world.', 'Where love is, there Booze also is.', 'The future depends on what you do today... and your sorry ass is going to get drunk.'], ['An eye for an eye will only make the whole world blind.', 'Nobody can hurt me without my permission.', 'Hate the sin, love the sinner.', 'I will crush you with the power of one thousand suns!', 'I am prepared to die, but there is no cause for which I am prepared to lose to you!'], ['First they ignore you, then they ridicule you, then they fight you, and then you win.', 'To live peacefully is essential, but I may have to make an exception for you.']),

  new newChar('Mother Theresa', '---', ['Take a drink, my child.'], ['Peace begins with a smile... and a smile starts with a drink.', 'Live simply so others may simply live.'], ['If you can get one hundred people drunk, just get one person drunk.', 'Take a drink or fuck off.', 'I can do things you cannot, you can do things I cannot... but drinking isn\'t one of them!', 'This is childs play. You\'ll passout in no time.'], ['If you judge people, you have no time to love them.', 'placeholder']),

  new newChar('John Belushi', '---', ['Take a drink, you fucking idiot!', 'I\'m jealous, I need that drink not YOU! Drink up!'], ['Time to work on my game.', 'On stage is the only place where I really know what I\'m doing.', 'I\'m John Belushi!'], ['Nothing is over until we decide it is! Was it over when the Germans bombed Pearl Harbor? Hell, no!', 'Wise Up!', 'I suggest you go out and buy as many Blues albums as you can.', 'Drinking is no longer challenging.', 'You contemptable pig!', ], ['I owe it all to little chocolate donuts.', 'Christ, seven years of college, down the drain.'])
];

var charIndex = 3; //Temporary variable

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
var cardsInARow = 0;
var cardsRemaining = cardData.cardImagePath.length;
var turn = 1;

var textID = document.getElementById('opponentText');
var opponentID = document.getElementById('opponentImage');
var cardImageID = document.getElementById('frontImg');
var card = document.getElementById('card');
var cardContainer = document.getElementById('container');
var highButtonID = document.getElementById('highButtonID');
var lowButtonID = document.getElementById('lowButtonID');
var passButtonID = document.getElementById('passButtonID');
var cardsRemainingID = document.getElementById('cardsRemaining');

var imgSource = localStorage.getItem('imgSource');
if (imgSource) {
  console.log('LOADING LOCAL STORAGE');
  cardImageID.src = imgSource;
  card.className = 'flipped';
  cardsRemaining = localStorage.getItem('cardsRemaining');
  cardsInARow = localStorage.getItem('cardsInARow');
  numberOfPicks = localStorage.getItem('numberOfPicks');
  turn = localStorage.getItem('turn');
  if (turn == 1) {
    console.log('it was your turn');
    userIntroNonRandom();
  } else {
    console.log('it was their turn');
    computerIntroNonRandom();
  }
} else {
  userIntro();
}

function computerSober () {
  var quoteIndex = Math.floor(Math.random() * (allCharacters[charIndex].soberQuotes.length));
  textID.textContent = allCharacters[charIndex].soberQuotes[quoteIndex];
}

function computerInsult () {
  var quoteIndex = Math.floor(Math.random() * (allCharacters[charIndex].insults.length));
  textID.textContent = allCharacters[charIndex].insults[quoteIndex];
}

function computerDrinkCommand () {
  var quoteIndex = Math.floor(Math.random() * (allCharacters[charIndex].drinkCommand.length));
  textID.textContent = allCharacters[charIndex].drinkCommand[quoteIndex];
}

function computerWinLose () {
  var quoteIndex = Math.floor(Math.random() * (allCharacters[charIndex].winLose.length));
  textID.textContent = allCharacters[charIndex].winLose[quoteIndex];
}

function randomCardGenerator() {
  var randomIndex = Math.floor(Math.random() * (cardData.cardValue.length));
  var imgSource = cardData.cardImagePath[randomIndex];
  cardImageID.src = imgSource;
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
  cardData.cardImagePath.splice(randomIndex,1);
  cardData.cardValue.splice(randomIndex,1);
  numberOfPicks += 1;
  cardsRemaining -= 1;
  cardsInARow += 1;
  cardsRemainingID.textContent = cardsRemaining + ' Cards Remaining';
  if (numberOfPicks > 51) {
    cardData = {
      cardImagePath: ['../img/card_images/ace_of_clubs.png','../img/card_images/2_of_clubs.png','../img/card_images/3_of_clubs.png','../img/card_images/4_of_clubs.png','../img/card_images/5_of_clubs.png','../img/card_images/6_of_clubs.png','../img/card_images/7_of_clubs.png','../img/card_images/8_of_clubs.png','../img/card_images/9_of_clubs.png','../img/card_images/10_of_clubs.png','../img/card_images/jack_of_clubs2.png','../img/card_images/queen_of_clubs2.png','../img/card_images/king_of_clubs2.png','../img/card_images/ace_of_spades.png','../img/card_images/2_of_spades.png','../img/card_images/3_of_spades.png','../img/card_images/4_of_spades.png','../img/card_images/5_of_spades.png','../img/card_images/6_of_spades.png','../img/card_images/7_of_spades.png','../img/card_images/8_of_spades.png','../img/card_images/9_of_spades.png','../img/card_images/10_of_spades.png','../img/card_images/jack_of_spades2.png','../img/card_images/queen_of_spades2.png','../img/card_images/king_of_spades2.png','../img/card_images/ace_of_hearts.png','../img/card_images/2_of_hearts.png','../img/card_images/3_of_hearts.png','../img/card_images/4_of_hearts.png','../img/card_images/5_of_hearts.png','../img/card_images/6_of_hearts.png','../img/card_images/7_of_hearts.png','../img/card_images/8_of_hearts.png','../img/card_images/9_of_hearts.png','../img/card_images/10_of_hearts.png','../img/card_images/jack_of_hearts2.png','../img/card_images/queen_of_hearts2.png','../img/card_images/king_of_hearts2.png','../img/card_images/ace_of_diamonds.png','../img/card_images/2_of_diamonds.png','../img/card_images/3_of_diamonds.png','../img/card_images/4_of_diamonds.png','../img/card_images/5_of_diamonds.png','../img/card_images/6_of_diamonds.png','../img/card_images/7_of_diamonds.png','../img/card_images/8_of_diamonds.png','../img/card_images/9_of_diamonds.png','../img/card_images/10_of_diamonds.png','../img/card_images/jack_of_diamonds2.png','../img/card_images/queen_of_diamonds2.png','../img/card_images/king_of_diamonds2.png'],
      cardValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13]
    };
    numberOfPicks = 0;
    }
    localStorage.setItem('imgSource',imgSource);
    localStorage.setItem('numberOfPicks',numberOfPicks);
    localStorage.setItem('cardsRemaining',cardsRemaining);
    localStorage.setItem('cardsInARow',cardsInARow);
    localStorage.setItem('turn',turn);
}

function userIntro() {
  turn = 1;
  cardsInARow = 0;
  highButtonID.style.display = 'inline-block';
  lowButtonID.style.display = 'inline-block';
  opponentID.src = allCharacters[charIndex].path[0];
  userPick = 0;
  computerInsult();
  randomCardGenerator();
  setTimeout(function(){
    textID.textContent = "Will the next card be higher or lower than the card shown?";
  },2000);
  oldCardValue = newCardValue;
}

function userIntroNonRandom() {
  turn = 1;
  highButtonID.style.display = 'inline-block';
  lowButtonID.style.display = 'inline-block';
  opponentID.src = allCharacters[charIndex].path[0];
  userPick = 0;
  setTimeout(function(){
    computerInsult();
  },2000);
  setTimeout(function(){
    textID.textContent = "Will the next card be higher or lower than the card shown?";
  },4500);
  oldCardValue = newCardValue;
}

function userHighPick () {
  textID.textContent = '';
  userPick += 1;
  oldCardValue = newCardValue;
  setTimeout(function(){
    randomCardGenerator();
    if (newCardValue <= oldCardValue) {
      userIncorrectPick();
    } else {
      setTimeout(function(){
        textID.textContent = 'YOU ARE CORRECT, PICK AGAIN';
        passButtonID.style.display = 'inline-block';
      },1700);
    }
  },800);
}

function userLowPick () {
  textID.textContent = '';
  userPick += 1;
  oldCardValue = newCardValue;
  setTimeout(function(){
    randomCardGenerator();
    if (newCardValue >= oldCardValue) {
      userIncorrectPick();
    } else {
      setTimeout(function(){
        textID.textContent = 'YOU ARE CORRECT, PICK AGAIN';
        passButtonID.style.display = 'inline-block';
      },1700);
    }
  },800);
}

function userPassPick () {
  setTimeout(function(){
    textID.textContent = 'PASS TO ME? COWARD.';
  },1000);
  setTimeout(function(){
    computerIntroPass();
  },1100);
}

function userIncorrectPick() {
  setTimeout(function(){
    computerDrinkCommand();
    opponentID.src = allCharacters[charIndex].path[1];
    passButtonID.style.display = 'none';
    highButtonID.style.display = 'none';
    lowButtonID.style.display = 'none';
  },1700);
  totalUserDrinks += cardsInARow;
  setTimeout(function(){
    computerIntroNonRandom();
  },4000);
}

function computerChoice () {
  if (totalComputerPicks === 0) {
    computerPick = Math.floor(Math.random() * (2)) + 1;
    totalComputerPicks += 1;
  } else {
    computerPick = Math.floor(Math.random() * (3)) + 1;
    totalComputerPicks += 1;
  }
}

function computerIntroNonRandom () {
  turn = 2;
  cardsInARow = 0;
  passButtonID.style.display = 'none';
  highButtonID.style.display = 'none';
  lowButtonID.style.display = 'none';
  totalComputerPicks = 0;
  setTimeout(function(){
    computerInsult();
    opponentID.src = allCharacters[charIndex].path[0];
  }, 2000);
  setTimeout(function(){
    computerPicker();
  }, 4000);
}

function computerIntroPass () {
  turn = 2;
  passButtonID.style.display = 'none';
  highButtonID.style.display = 'none';
  lowButtonID.style.display = 'none';
  totalComputerPicks = 0;
  setTimeout(function(){
    computerInsult();
    opponentID.src = allCharacters[charIndex].path[0];
  }, 2000);
  setTimeout(function(){
    computerPicker();
  }, 4000);
}

function computerPicker () {
  setTimeout(function(){
    computerSober();
  }, 1000);
  computerChoice();
  if (computerPick === 1 || computerPick === 2) {
    oldCardValue = newCardValue;
    setTimeout(function(){
      if (oldCardValue <= 3) {
        computerPick = 1;
        textID.textContent = 'I Choose High';
      } else if (oldCardValue >= 11) {
        computerPick = 2;
        textID.textContent = 'I Choose Low';
      } else {
        computerPick = computerPick;
        if (computerPick === 1) {
          textID.textContent = 'I Choose High';
        } else {
          textID.textContent = 'I Choose Low';
        }
      }
      setTimeout(function(){
        computerNewCard();
      }, 4000);
    },4000);
  } else {
    setTimeout(function(){
      textID.textContent = 'I Pass to you!';
      userIntroNonRandom();
    }, 4000);
  }
}

function computerNewCard () {
  randomCardGenerator();
  if (computerPick === 1) {
    if (newCardValue <= oldCardValue) {
      setTimeout(function(){
        computerIncorrectPick();
      }, 1700);
    } else {
      setTimeout(function(){
        computerPicker();
      }, 1700);
    }
  }
  if (computerPick === 2) {
    if (newCardValue >= oldCardValue) {
      setTimeout(function(){
        computerIncorrectPick();
      }, 1700);
    } else {
      setTimeout(function(){
        computerPicker();
      }, 1700);
    }
  }
}

function computerIncorrectPick () {
  opponentID.src = allCharacters[charIndex].path[1];
  textID.textContent = 'NO, I was wrong.  I will drink ' + cardsInARow + ' drinks.';
  setTimeout(function(){
    computerWinLose();
  },2000);
  totalComputerDrinks += cardsInARow;
  setTimeout(function(){
    cardsInARow = 0;
    userIntroNonRandom();
  }, 4000);
}

highButtonID.addEventListener('click',userHighPick);
lowButtonID.addEventListener('click',userLowPick);
passButtonID.addEventListener('click',userPassPick);
