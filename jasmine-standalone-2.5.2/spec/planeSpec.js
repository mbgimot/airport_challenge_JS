'use strict';

describe('Plane', function(){
  var plane;
  var airport;

beforeEach(function() {
  plane = new Plane();
  airport = new Airport();
  });

  it('is not in the airport at initialisation', function() {
    expect(plane.getAirport()).toBeNull()
  });

  it('is at an airport when landed', function() {
    plane.land(airport);
    expect(plane.getAirport()).toEqual(airport);
  });


describe('flying', function() {
  it('is flying on initialisation', function() {
    expect(plane.flying).toBeTruthy()
  });

  it('is not flying when landed', function() {
    plane.land();
    expect(plane.flying).toBeFalsy();
  });


 });
});
