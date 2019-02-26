// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag

    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  };


/*

Refactor the Dancer class and its subclass BlinkyDancer from functional inheritance to pseudoclassical.

Feel free to refer to the slide decks on Functional Subclasses & Pseudoclassical Subclasses
Make at least two new kinds of dancers. This will require creating a new factory function for each one (and making sure that your new JavaScript files are included in dancefloor.html).

Add a link in the top bar of dancefloor.html to create a dancer of each new type you create
Write tests for new types. Use spec/blinkyDancerSpec.js as a template for new test files, and make sure to include them in SpecRunner.html.

*/