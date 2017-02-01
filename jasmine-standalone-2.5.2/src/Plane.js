'use strict';

function Plane () {
  this.flying = true;
  this.setAirport(null);
};

Plane.prototype.getAirport = function () {
  return this.airport
};

Plane.prototype.setAirport = function (airport) {
  this.airport = airport
};

Plane.prototype.land = function (airport) {
  this.flying = false;
  this.setAirport(airport);
};

Plane.prototype.takeOff = function() {
  this.flying = true;
  this.setAirport(null);
};
