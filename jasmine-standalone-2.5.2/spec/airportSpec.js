describe('Airport', function() {
  var airport;
  var plane;


  beforeEach(function() {
    airport = new Airport();
    spyOn(airport, 'getWeather').and.returnValue('Not Stormy')
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

    it('doesn\'t land if weather is stormy', function() {
      var airport2 = new Airport();
      spyOn(airport2, 'getWeather').and.returnValue('Stormy')
      expect(function() {airport2.land(plane)}).toThrow("Weather is stormy")
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
