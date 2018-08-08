var MakeSanicRun = function(top, left, timeBetweenSteps) {

    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('sanicRun');
  };
  
  //delegate prototype 
  MakeSanicRun.prototype = Object.create(MakeDancer.prototype);
  MakeSanicRun.prototype.constructor = MakeSanicRun;


  // delegate prototypes for methods of constructor function
  MakeSanicRun.prototype.step = function () {
    MakeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.hover('hover',function(){
        $(this).animate({
            top: '+=300px'
        }, 2000);
    });
  };