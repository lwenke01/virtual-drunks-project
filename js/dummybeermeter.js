'use strict';

var drinkCount = 0;

var button = document.getElementById('button');

button.addEventListener('click', buttonHandler);

function buttonHandler() {
  drinkCount++
  meter();
  console.log('Drink logged: ' + drinkCount);
};

function meter() {
  if (drinkCount == 1) {
    createBarElement1();
  } else if (drinkCount == 3) {
    createBarElement2();
  } else if (drinkCount == 6) {
    createBarElement3();
  } else if (drinkCount == 9) {
    createBarElement4();
  } else if (drinkCount == 12) {
    createBarElement5();
  } else if (drinkCount == 15) {
    createBarElement6();
  }
};

function createBarElement1() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'tipsyCss'
  var content = document.createTextNode('Just getting tipsy.');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('tipsy');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement2() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'inebriatedCss'
  var content = document.createTextNode('Slightly inebriated.');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('inebriated');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement3() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'drunkCss'
  var content = document.createTextNode('You\'re drunk.');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('drunk');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement4() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'wastedCss'
  var content = document.createTextNode('Getting wasted.');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('wasted');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement5() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'shitFacedCss'
  var content = document.createTextNode('You are shit faced.');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('shitFaced');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement6() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'timeToStopCss'
  var content = document.createTextNode('It\'s time to stop.');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('timeToStop');
  document.body.insertBefore(bottomBar, sectionContainer);
}

//

//

//



var allCharacters = [
  new newChar('Abe Lincoln', '---', ['Nearly all people can stand adversity, but if you want to test someones character, get them drunk.', 'This will be over before you can say, "Sic semper tyrannis"!','It is not best to swap horses while crossing the river.'], ['Four score and seventy years years ago, I was drinking your great grandfather\'s ass under the table', 'I destroy my enemies when I get them drunk.'], ['placeholder', 'placeholder']),

  new newChar('Genghis Khan', '---', ['I am the punishment of God...If you had not committed great sins, God would not have sent a punishment like me upon you.'], ['I am the flail of god. Had you not created great sins, god would not have sent a punishment like me upon you.', 'A man\'s greatest joy is crushing his enemies.', 'Come and sip from the cup of destruction.', 'It is not sufficient that I suceed, all others must fail.', 'If you’re afraid – don’t do it, – if you’re doing it – don’t be afraid!'], ['There is no value in anything until it is finished.', 'Conquering the world is easy, it\'s getting of your horse and drinking that is hard.']),

  new newChar('William Shakespeare', '---', ['To drink, or not to drink. That is the question.', ''], ['Brevity is the soul of wit, you have none.', 'Do you think I am easier to be played on than a pipe?', 'Thou art like a toad; ugly and venomous.', 'You are a most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality.', 'You scullion! You rampallian! You fustilarian! I’ll tickle your catastrophe!', 'Thou art as loathsome as a toad.', 'Thou are pigeon-liver’d and lack gall.', 'You are as a candle, the better burnt out.'], ['Misery acquaints a man with strange bedfellows.', 'There is nothing either good or bad, but thinking makes it so']),

  new newChar('Albert Einstein', '---', ['There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Logic will get you from A to Z; imagination will get you everywhere.'], ['Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'A clever person solves a problem. A wise person avoids it.', 'The most comprehensible thing about you is that you are incomprehensible.', 'I never think of the future. It comes soon enough. Your failure that is.'], ['Not everything that counts can be counted, and not everything that can be counted counts.', 'Weakness of attitude becomes weakness of character.']),

  new newChar('Napolean', '---', ['I am Napolean, I should have conquered the world!', 'Let us drink, you swine!'], ['Never interrupt your enemy when he is making a mistake.', 'I have never found the limit of my capacity to drink.', 'If you want something done well, one must do it themselves.', 'While drinking, stupidity is not a handicap.', 'It requires more courage to drink than to die!'], ['Victory belongs to the most persevering.', 'Death is nothing, but to live defeated and inglorious is to die daily.', 'What is your victory but a fable agreed upon.', 'He who fears being conquered is sure of defeat.']),

  new newChar('Ghandi', '---', ['Be the change that you wish to see in the world.', 'Where love is, there Booze also is.', 'The future depends on what you do today... and your sorry ass is going to get drunk.'], ['An eye for an eye will only make the whole world blind.', 'Nobody can hurt me without my permission.', 'Hate the sin, love the sinner.', 'I will crush you with the power of one thousand suns!', 'I am prepared to die, but there is no cause for which I am prepared to lose to you!'], ['First they ignore you, then they ridicule you, then they fight you, and then you win.', 'To live peacefully is essential, but I may have to make an exception for you.']),

  new newChar('Mother Theresa', '---', ['Peace begins with a smile... and a smile starts with a drink.', 'Live simply so others may simply live.'], ['If you can get one hundred people drunk, just get one person drunk.''Take a drink or fuck off.', 'I can do things you cannot, you can do things I cannot... but drinking isn\'t one of them!'], ['If you judge people, you have no time to love them.', 'placeholder']),

  new newChar('John Belushi', '---', ['On stage is the only place where I really know what I\'m doing.', 'I\'m John Belushi!'], ['Nothing is over until we decide it is! Was it over when the Germans bombed Pearl Harbor? Hell, no!', 'Wise Up!', 'I suggest you go out and buy as many Blues albums as you can.'], ['I owe it all to little chocolate donuts.', 'Christ, seven years of college, down the drain.'])
];
