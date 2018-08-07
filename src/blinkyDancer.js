var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //pseudoclassical instantiation makes bottom line unneeded.
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // call SuperClass MakeDancer.call(this), 
  //with 'this' referring to the object to be instantiated:
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // this.oldStep = this.step;


  // return blinkyDancer; // <-- see line 2.
};

//delegate prototype of MakeBlinkyDancer to MakeDancer
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// delegate prototypes for methods of constructor function
MakeBlinkyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};