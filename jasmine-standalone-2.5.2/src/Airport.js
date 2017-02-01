'use strict';

function Airport (capacity) {
  this.setCapacity(capacity);
  this.planes = [];
}

Airport.prototype.setCapacity = function (capacity) {
  var DEFAULT_CAPACITY = 20;

  if(typeof(capacity)==='undefined') {
    this.capacity = DEFAULT_CAPACITY
  }
  else {
    this.capacity = capacity
  }
};

Airport.prototype.land = function (plane) {
  if(this.getWeather()==='Stormy') throw "Weather is stormy"
  if (this.planes.length >= this.capacity) throw "Airport full"
  plane.land(this);
  this.planes.push(plane);
};

Airport.prototype.getWeather = function () {
  var weather = new Weather()
  return weather.weatherState()
};

Airport.prototype.takeOff = function (plane) {
  plane.takeOff();
  this.planes.pop(plane);
};
