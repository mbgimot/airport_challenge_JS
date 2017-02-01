'use strict';

describe('weather', function(){

  var weather;

  it('has a state of weather', function(){
    weather = new Weather();
    expect(weather.weatherState()).not.toBeNull();
  });

});
