var MakeSanic = function(top, left, timeBetweenSteps) {

    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="sanic"></span>');
  };
  
  //delegate prototype 
  MakeSanic.prototype = Object.create(MakeDancer.prototype);
  MakeSanic.prototype.constructor = MakeSanic;

  
  // delegate prototypes for methods of constructor function
  MakeSanic.prototype.step = function () {
    MakeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };