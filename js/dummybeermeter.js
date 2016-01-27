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
  bottomBar.className = 'test'
  var content = document.createTextNode('Tipsy');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('tipsy');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement2() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'test'
  var content = document.createTextNode('inebriated');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('inebriated');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement3() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'test'
  var content = document.createTextNode('drunk');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('drunk');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement4() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'test'
  var content = document.createTextNode('wasted');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('wasted');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement5() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'test'
  var content = document.createTextNode('shit-faced');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('shitFaced');
  document.body.insertBefore(bottomBar, sectionContainer);
}

function createBarElement6() {
  var bottomBar = document.createElement('div');
  bottomBar.className = 'test'
  var content = document.createTextNode('It\'s time to stop.');
  bottomBar.appendChild(content);

  var sectionContainer = document.getElementById('timeToStop');
  document.body.insertBefore(bottomBar, sectionContainer);
}
