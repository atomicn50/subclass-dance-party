var MichaelJacksonDancer = function(top, left, timeBetweenSteps) {
  EightiesDancer.call(this, top, left, timeBetweenSteps);
};

MichaelJacksonDancer.prototype = Object.create(EightiesDancer.prototype);
MichaelJacksonDancer.prototype.constructor = MichaelJacksonDancer;

MichaelJacksonDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

