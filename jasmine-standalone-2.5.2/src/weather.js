'use strict';

function Weather() {
};

Weather.prototype.weatherState = function () {
  return this.isStormy();

};
Weather.prototype.isStormy = function () {
  if(getRandom() > 0.5) {
    return 'Stormy'
  }
  else {
    return 'Not Stormy'
  }
};

function getRandom() {
  return Math.random()
};
