describe('Plane', function(){
  var plane;

beforeEach(function() {
  plane = new Plane();
  airport = new Airport();
  });

  it('is not in the airport at initialisation', function() {
    expect(plane.airport).toBeNull()
  });

  it('is at an airport when landed', function() {
    plane.land(airport);
    expect(plane.airport).toEqual(airport);
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
