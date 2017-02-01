function Weather() {
};

Weather.prototype.weatherState = function () {
  return this.isStormy();

};
Weather.prototype.isStormy = function () {
  if(getRandom() > 0.5) {
    return Symbol('Stormy')
  }
  else {
    return Symbol('Not Stormy')
  }
};

function getRandom() {
  return Math.random()
};
