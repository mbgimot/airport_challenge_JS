describe('Aiport', function() {
  var airport;
  var plane;

  // spyOn(plane, 'land')



  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('can hold planes', function(){
    expect(airport.planes).toEqual([])
  });

  describe('land', function() {


    it('instructs a plane to land', function(){
      airport.land(plane)
      expect(airport.planes).toContain(plane)
     });

  });

  describe('take-off', function() {


    it('instructs a plane to take-off', function(){
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.planes).not.toContain(plane)
     });

  });



});
