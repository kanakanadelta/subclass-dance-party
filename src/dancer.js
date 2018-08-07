// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // capitalized MakeDancer because it is now a constructor function

  // var dancer = {};
  //---------notes---------//
  //due to its pseudoclassical instantiation,
  //the 'new' keyword will instantiate the object and return it for us, e.g.:
  // dancer = this;
  // return this;
  //-----------------------//

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  
  this.time = timeBetweenSteps;
  
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  

  // see line 6 to 8 for why return is commented out
  // return dancer;
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // console.log('dancer stepped', timeBetweenSteps);
  
  //we are storing current 'this' as our variable
  let newThis = this;
  setTimeout(function() { newThis.step(); }, this.time);

};

MakeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};












//