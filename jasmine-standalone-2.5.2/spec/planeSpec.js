describe('Plane', function(){
  var plane;

beforeEach(function() {
  plane = new Plane();

});

describe('plane', function() {
  it('is flying on initialisation', function() {
    expect(plane.flying).toBeTruthy()
  });


 });

});
