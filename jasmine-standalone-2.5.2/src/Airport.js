function Airport () {
  this.planes = [];
}


Airport.prototype.land = function (plane) {
  plane.land(this);
  this.planes.push(plane);
};

Airport.prototype.takeOff = function (plane) {
  this.planes.pop(plane);
};
