var EightiesDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="http://rs164.pbsrc.com/albums/u26/Dalima92/MapleStory/monsters008_move.gif~c200" border: 0px>');
};

EightiesDancer.prototype = Object.create(Dancer.prototype);
EightiesDancer.prototype.constructor = EightiesDancer;

EightiesDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

EightiesDancer.prototype.lineUp = function() {
  this.$node.css({"top":"100px"});  
};
// EightiesDancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };
