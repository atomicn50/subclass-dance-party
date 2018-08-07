var MichaelJacksonDancer = function(top, left, timeBetweenSteps) {
  EightiesDancer.call(this, top, left, timeBetweenSteps);

  this.$node.html('<img src="http://rs872.pbsrc.com/albums/ab286/TheExoticBarbie/m.gif~c200">');
   
};

MichaelJacksonDancer.prototype = Object.create(EightiesDancer.prototype);
MichaelJacksonDancer.prototype.constructor = MichaelJacksonDancer;

MichaelJacksonDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

MichaelJacksonDancer.prototype.lineUp = function() {
  this.$node.css({"top":"300px"})
};

