'use strict'

function newChar(name, path, soberQuotes, insults, winLose) {
  this.name = name;
  this.path = path;
  this.soberQuotes = soberQuotes;
  this.insults = insults;
  this.winLose = winLose;
}

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
