var EightiesDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

EightiesDancer.prototype = Object.create(Dancer.prototype);
EightiesDancer.prototype.constructor = EightiesDancer;

EightiesDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
