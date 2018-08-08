$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer)
  });

  $('.addDancerButton2').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window['MakeSanicRun'];

  var sonicRun = new dancerMakerFunction(
    //set a specific height for our sonic runner
    $("body").height() - 800,
    //set random placement within the width of the set height (horizontally)
    $("body").width() * Math.random(),
    Math.random() * 1000
  );
  $('body').append(sonicRun.$node);
  window.dancers.push(sonicRun);
  });  

  $('#lineUp').on('click', function() {
    console.log('i work');
    //have a number, make it a string, and then concat % // top is being incremented to make space
    for(let i = 0, top = 15; i < window.dancers.length; i++, top+=5) {
      //select each dancer[i] give it a a new top
      $(window.dancers[i].$node).animate({
        left: '0%',
        top: top+ '%'
      }, 2000);

    }
    
  });
});



