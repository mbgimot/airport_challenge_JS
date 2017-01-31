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
      expect(airport.planes).toInclude(plane)
     });

  });




});
