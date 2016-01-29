'use strict';
/*jshint -W117 */
/*jshint -W040 */
/*jshint -W097 */


function newChar(name, path, drinkCommand,insults) {
  this.name = name;
  this.path = path;
  this.drinkCommand = drinkCommand;
  this.insults = insults;
}

var charIndex = localStorage.getItem('charIndex');
var drinkChoice = localStorage.getItem('drinkChoice');
var userName = localStorage.getItem('userName');

var allCharacters = [
  new newChar('Abe Lincoln', ['../img/abe2.png', '../img/abe1.png'], ['Ah, take a drink, ' + userName + '!', 'It\'s time to take a drink, ' + userName + '!', 'Cheers, loser!', 'Drink, you son of a gun!','Booth can handle a shot better than that!'], ['Nearly all people can stand adversity, but if you want to test someones character, get them drunk.', 'This will be over before you can say, "Sic semper tyrannis"!','It is not best to swap horses while crossing the river.', 'Four score and seven years years ago, I was drinking your great grandfather\'s ass under the table', 'I destroy my enemies when I get them drunk.']),

  new newChar('Genghis Khan', ['../img/genghis.png', '../img/genghis2.png'], ['DRINK!! You mongrel!', 'Drink or die a cowards death!'], ['I am the punishment of god...If you had not committed great sins, God would not have sent a punishment like me upon you.', 'I am the flail of god.  Had you not created great sins, god would not have sent a punishment like me upon you.', 'A mans greatest joy is crushing his enemies.', 'Come and sip from the cup of destruction.', 'It is not sufficient that I suceed, all others must fail.', 'If you\'re afraid, don\'t do it.  If you\'re doing it, don\'t be afraid.', 'There is no value in anything until it is finished.', 'Conquering the world is easy, it is getting off your horse and drinking that is hard.']),

  new newChar('William Shakespeare', ['../img/shakes1.png', '../img/shakes2.png'], ['Thou must drink, swine!', 'You scoundrel! Take a drink!'], ['To drink, or not to drink.  That is the question.', 'Brevity is the soul of wit, you have none.', 'Do you think I am easier to be played on than a pipe?', 'Thou art like a toad; ugly and venomous.', 'You are a most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality.', 'You scullion! You rampallian! You fustilarian! I\'ll tickle your catastrophe!', 'Thou art as loathsome as a toad.', 'Thou art pigeon-liver\'d and lack gall.', 'You are as a candle, the better burnt out.', 'Misery acquaints a man with strange bedfellows.', 'There is nothing either good or bad, but thinking makes it so.']),

  new newChar('Albert Einstein', ['../img/einsteinnormal.png', '../img/einstein1.png'], ['Take a drink = MC^2.'], ['There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Logic will get you from A to Z; imagination will get you everywhere.', 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'A clever person solves a problem. A wise person avoids it.', 'The most comprehensible thing about you is that you are incomprehensible.', 'I never think of the future. It comes soon enough. Your failure that is.', 'Not everything that counts can be counted, and not everything that can be counted counts.', 'Weakness of attitude becomes weakness of character.']),

  new newChar('Napoleon', ['../img/napoleon2.png', '../img/napoleon1.png'], ['Take a drink, good sir.', 'Drink now or forever hold your peace!'], ['I am Napolean, I should have conquered the world!', 'Let us drink, you swine!', 'Never interrupt your enemy when he is making a mistake.', 'I have never found the limit of my capacity to drink.', 'If you want something done well, one must do it themselves.', 'While drinking, stupidity is not a handicap.', 'It requires more courage to drink than to die!', 'Victory belongs to the most persevering.', 'Death is nothing, but to live defeated and inglorious is to die daily.', 'What is your victory but a fable agreed upon.', 'He who fears being conquered is sure of defeat.']),

  new newChar('Gandhi', ['../img/Gandhi.png', '../img/gandhi2.png'], ['Take a drink, friend.'], ['Be the change that you wish to see in the world.', 'Where love is, there Booze also is.', 'The future depends on what you do today... and your sorry ass is going to get drunk.', 'An eye for an eye will only make the whole world blind.', 'Nobody can hurt me without my permission.', 'Hate the sin, love the sinner.', 'I will crush you with the power of one thousand suns!', 'I am prepared to die, but there is no cause for which I am prepared to lose to you!', 'First they ignore you, then they ridicule you, then they fight you, and then you win.', 'To live peacefully is essential, but I may have to make an exception for you.']),

  new newChar('Mother Teresa', ['../img/teresa.png', '../img/mother-teresa-face.png'], ['Take a drink, my child.'], ['Peace begins with a smile... and a smile starts with a drink.', 'Live simply so others may simply live.', 'If you can get one hundred people drunk, just get one person drunk.', 'Take a drink or fuck off.', 'I can do things you cannot, you can do things I cannot... but drinking isn\'t one of them!', 'This is childs play. You\'ll passout in no time.', 'If you judge people, you have no time to love them.']),

  new newChar('Joan of Arc', ['../img/joan.png', '../img/joan2.png'], ['You are a poor soul, ' + userName + '!', 'God wants you to drink, ' + userName + '!', 'You look like you need a stiff one, ' + userName + '!'], ['I am not afraid... I was born to do this.', 'Children say that people are hung sometimes for speaking the truth.', 'I was in my thirteenth year when I heard a voice from God to help me govern my conduct. And the first time I was very much afraid.', 'If I am not, may God put me there; and if I am, may God so keep me.', 'I have a burning desire to DRINK!', 'The light comes at the same time as the Voice', ' I know nothing, but I do know that they will all be thrown out of France, except those who die there.']),

  new newChar('Marie Antoinette', ['../img/marie2.png', '../img/marie.png'], ['If you keep this drinking up, I will have to do what was done to me and CUT YOU OFF!', 'All this drinking you are doing is making my head spin, ' + userName + '!', 'Let them drink beer!', 'Get your head in the game, ' + userName + '!', 'Don\'t lose your head over it ' + userName + '!'], ['Courage! I have shown it for years; think you I shall lose it at the moment when my sufferings are to end?', 'I have seen all, I have heard all, I have forgotten all.', 'No one understands my ills, nor the terror that fills my breast, who does not know the heart of a mother.', 'But how will I eat cake if my head is over there, and my hands are over here?', 'I am terrified of being bored.']),

  new newChar('Eleanor Roosevelt', ['../img/elro1.png', '../img/elro2.png'], ['Take a drink, you fucking idiot!', 'You must do the things you think you cannot do like DRINK MORE', 'Drink, you pansy!'], ['It is not fair to ask of others what you are not willing to do yourself.',
 'No one can make you feel inferior without your consent.', 'Great minds discuss ideas; average minds discuss events; small minds discuss people.', 'Women are like teabags. You dont know how strong they are until you put them in hot water.', 'Do one thing every day that scares you, ' + userName + '.', 'Never allow a person to tell you no who doesn\'t have the power to say yes.'])
];

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
  cardData = JSON.parse(localStorage.getItem('cardData'));
  charIndex = localStorage.getItem('charIndex');
  drinkChoice = localStorage.getItem('drinkChoice');
  userName = localStorage.getItem('userName');

  if (turn == 1) {
    console.log('it was your turn');
    userIntroNonRandom();
  } else {
    console.log('it was their turn');
    computerIntroNonRandom();
  }
} else {
  // localStorage.clear();
  userIntro();
}

function computerInsult () {
  var quoteIndex = Math.floor(Math.random() * (allCharacters[charIndex].insults.length));
  textID.textContent = allCharacters[charIndex].insults[quoteIndex];
}

function computerDrinkCommand () {
  var quoteIndex = Math.floor(Math.random() * (allCharacters[charIndex].drinkCommand.length));
  textID.textContent = allCharacters[charIndex].drinkCommand[quoteIndex];
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
  cardsRemainingID.textContent = cardsRemaining + ' Cards Remaining.';
  if (numberOfPicks > 51) {
    cardData = {
      cardImagePath: ['../img/card_images/ace_of_clubs.png','../img/card_images/2_of_clubs.png','../img/card_images/3_of_clubs.png','../img/card_images/4_of_clubs.png','../img/card_images/5_of_clubs.png','../img/card_images/6_of_clubs.png','../img/card_images/7_of_clubs.png','../img/card_images/8_of_clubs.png','../img/card_images/9_of_clubs.png','../img/card_images/10_of_clubs.png','../img/card_images/jack_of_clubs2.png','../img/card_images/queen_of_clubs2.png','../img/card_images/king_of_clubs2.png','../img/card_images/ace_of_spades.png','../img/card_images/2_of_spades.png','../img/card_images/3_of_spades.png','../img/card_images/4_of_spades.png','../img/card_images/5_of_spades.png','../img/card_images/6_of_spades.png','../img/card_images/7_of_spades.png','../img/card_images/8_of_spades.png','../img/card_images/9_of_spades.png','../img/card_images/10_of_spades.png','../img/card_images/jack_of_spades2.png','../img/card_images/queen_of_spades2.png','../img/card_images/king_of_spades2.png','../img/card_images/ace_of_hearts.png','../img/card_images/2_of_hearts.png','../img/card_images/3_of_hearts.png','../img/card_images/4_of_hearts.png','../img/card_images/5_of_hearts.png','../img/card_images/6_of_hearts.png','../img/card_images/7_of_hearts.png','../img/card_images/8_of_hearts.png','../img/card_images/9_of_hearts.png','../img/card_images/10_of_hearts.png','../img/card_images/jack_of_hearts2.png','../img/card_images/queen_of_hearts2.png','../img/card_images/king_of_hearts2.png','../img/card_images/ace_of_diamonds.png','../img/card_images/2_of_diamonds.png','../img/card_images/3_of_diamonds.png','../img/card_images/4_of_diamonds.png','../img/card_images/5_of_diamonds.png','../img/card_images/6_of_diamonds.png','../img/card_images/7_of_diamonds.png','../img/card_images/8_of_diamonds.png','../img/card_images/9_of_diamonds.png','../img/card_images/10_of_diamonds.png','../img/card_images/jack_of_diamonds2.png','../img/card_images/queen_of_diamonds2.png','../img/card_images/king_of_diamonds2.png'],
      cardValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13]
    };
    numberOfPicks = 0;
    }
  localStorage.setItem('cardData',JSON.stringify(cardData));
  localStorage.setItem('imgSource',imgSource);
  localStorage.setItem('numberOfPicks',numberOfPicks);
  localStorage.setItem('cardsRemaining',cardsRemaining);
  localStorage.setItem('cardsInARow',cardsInARow);
  localStorage.setItem('turn',turn);
  localStorage.setItem('charIndex',charIndex);
  localStorage.setItem('drinkChoice',drinkChoice);
  localStorage.setItem('userName',userName);

}

function userIntro() {
  turn = 1;
  cardsInARow = 0;
  highButtonID.style.display = 'inline-block';
  lowButtonID.style.display = 'inline-block';
  opponentID.src = allCharacters[charIndex].path[0];
  textID.textContent = 'Hey, there ' + userName + '! Let\'s play';
  userPick = 0;
  setTimeout(function() {
  computerInsult();
  randomCardGenerator();
},2000);
  setTimeout(function(){
    textID.textContent = "Will the next card be higher or lower than the card shown?";
  },4000);
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
  },1000);
  setTimeout(function(){
    textID.textContent = "Will the next card be higher or lower than the card shown?";
  },4500);
  oldCardValue = newCardValue;
}

function userHighPick () {
  passButtonID.style.display = 'none';
  highButtonID.style.display = 'none';
  lowButtonID.style.display = 'none';
  textID.textContent = '';
  userPick += 1;
  oldCardValue = newCardValue;
  setTimeout(function(){
    randomCardGenerator();
    if (newCardValue <= oldCardValue) {
      userIncorrectPick();
    } else {
      setTimeout(function(){
        textID.textContent = 'YOU ARE CORRECT, ' + userName + '! Pick again.';
        highButtonID.style.display = 'inline-block';
        lowButtonID.style.display = 'inline-block';
        passButtonID.style.display = 'inline-block';
      },1700);
    }
  },800);
}

function userLowPick () {
  passButtonID.style.display = 'none';
  highButtonID.style.display = 'none';
  lowButtonID.style.display = 'none';
  textID.textContent = '';
  userPick += 1;
  oldCardValue = newCardValue;
  setTimeout(function(){
    randomCardGenerator();
    if (newCardValue >= oldCardValue) {
      userIncorrectPick();
    } else {
      setTimeout(function(){
        textID.textContent = 'You are CORRECT ' + userName + '! Pick again';
        highButtonID.style.display = 'inline-block';
        lowButtonID.style.display = 'inline-block';
        passButtonID.style.display = 'inline-block';
      },1700);
    }
  },800);
}

function userPassPick () {
  passButtonID.style.display = 'none';
  highButtonID.style.display = 'none';
  lowButtonID.style.display = 'none';
  setTimeout(function(){
    textID.textContent = 'PASS TO ME, ' + userName + '? COWARD!';
  },1000);
  setTimeout(function(){
    computerIntroPass();
  },1100);
}

function userIncorrectPick() {
  setTimeout(function(){
    computerDrinkCommand();
    // opponentID.src = allCharacters[charIndex].path[1];
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
    computerPicker();
  }, 4000);
}

function computerPicker () {
  setTimeout(function(){
    computerInsult();
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
      textID.textContent = 'I Pass to you, ' + userName + '!';
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
  console.log(cardsInARow);
  textID.textContent = 'NO, I was wrong.  I will drink ' + cardsInARow + ' drinks.';
  totalComputerDrinks += cardsInARow;
  setTimeout(function(){
    cardsInARow = 0;
    userIntroNonRandom();
  }, 4000);
}

highButtonID.addEventListener('click',userHighPick);
lowButtonID.addEventListener('click',userLowPick);
passButtonID.addEventListener('click',userPassPick);
