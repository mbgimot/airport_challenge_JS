describe('weather', function(){

  it('has a state of weather', function(){
    weather = new Weather();
    expect(weather.weatherState()).not.toBeNull();
  });

});
