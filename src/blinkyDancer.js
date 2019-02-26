var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); // calls dancer but with new object blinky dancer as focal object 

//augments 

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

    // this is not defined

};

BlinkyDancer.prototype = Object.create(Dancer.prototype)
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    
    Dancer.prototype.step.call(this)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };


/*

instanceOfBlinkyDancer.step()
  triggers oldstep - oldstep calls dancer.step 
    but with the new context being the new Blinky dancer

*/