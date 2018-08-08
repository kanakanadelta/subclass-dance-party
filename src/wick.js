
var MakeWick = function(top, left, timeBetweenSteps) {

    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('wick');
  };
  
  //delegate prototype 
  MakeWick.prototype = Object.create(MakeDancer.prototype);
  MakeWick.prototype.constructor = MakeWick;


  // delegate prototypes for methods of constructor function
  MakeWick.prototype.step = function () {
    MakeDancer.prototype.step.call(this);
    this.$node.fadeIn();
  };