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

   it('checks if planes flying status is false', function(){
     airport.land(plane)
     expect(plane.flying).toBeFalsy()
    });

    it('makes sure that planes cannot land if capacity is full', function() {
      var times = 20;
      for (var i=0; i < times; i++) {
        airport.land(plane);
      }
      expect(function() { airport.land(plane)}).toThrow("Airport full")
    });

  });

  describe('take-off', function() {


    it('instructs a plane to take-off', function(){
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.planes).not.toContain(plane)
     });

     it('checks if planes flying status is true', function(){
       airport.land(plane)
       airport.takeOff(plane)
       expect(plane.flying).toBeTruthy()
      });



  });



});
