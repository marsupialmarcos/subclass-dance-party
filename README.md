# subclass-dance-party
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

# SPRINT FOUR: SUBCLASS DANCE PARTY
An exploration in polymorphism and inheritance.

**High Level Goals of this Sprint**

* Master subclassing in JavaScript
* Use JavaScript, jQuery, and CSS to add unique effects to your application
* Be focused and deadline oriented around design choices

What is polymorphism?

When constructing applications, it is often the case that you will need to construct objects that share common methods or traits. Dancers, for example, all display individual unique traits, however they also share the ability to dance, to stop dancing, and to line up. By creating dancers that are subclasses of a Dancer class, you can exhibit individuality while allowing your dancers to inherit useful methods from their superclass. This ability of the Dancer class to manifest in various subclass forms is polymorphism.

**Important Files**

* dancefloor.html a dancer-indiscriminate stage.
* src contains dancer.js and blinkyDancer.js with some code that you'll refactor and then extend with new types of dancers.
* spec contains a few tests--you'll be adding more.
* SpecRunner.html runs the tests.

**Understand**

How dancefloor.html, src/init.js, src/dancer.js, and src/blinkyDancer.js relate.
Which CSS statements in styles.css make the dancers circular.

**Install Pomander**

In Terminal, run the following command from within this repository:
```javascript
  1│curl -s https://raw.githubusercontent.com/reactorcore/pomander/master/bin/install | bash
```
Pomander will check your code for syntax errors and violations against the Hack Reactor style guide before each commit.

It uses a pre-commit hook to run staged files through eslint before each commit. eslint is a linter that will block your commit should you have any syntax errors, or, should you violate the Hack Reactor style guide. There are some preferred whitespace style rules that will give warnings but not block your commit. Your work will be of a higher quality if you follow the instructions of the linter. That said, if the linter gives you any funny bugs, these bugs are not intentional, and you should feel free to skip using it during commits with the --no-verify option.

# Bare Minimum Requirements
Complete all the bare minimum requirements before moving on to the advanced content. This sprint gives you a substantial amount of creative freedom. We recommend that you read through all the requirements and hold a short planning session with your pair to discuss what your final product will be.

* Complete [Course] beesbeesbees
* Refactor the Dancer class and its subclass BlinkyDancer from functional inheritance to pseudoclassical.
  * Feel free to refer to the slide decks on Functional Subclasses & Pseudoclassical Subclasses
* Make at least two new kinds of dancers. This will require creating a new factory function for each one (and making sure that your new JavaScript files are included in dancefloor.html).
  * Add a link in the top bar of dancefloor.html to create a dancer of each new type you create
  * Write tests for new types. Use spec/blinkyDancerSpec.js as a template for new test files, and make sure to include them in SpecRunner.html.
* Having trouble coming up ideas? Here are some example hierarchies:

```javascript
Dancer > PopDancer > RickAstleyDancer
Dancer > FightingDancer > ZangiefDancer
Dancer > BouncyDancer
Dancer > SuperHeroDancer > BatmanDancer
```

* Make your dancers visually distinct and adorable with CSS and JS! Don't skimp on the CSS here. It is a core tool everyone can benefit from additional experience with. Hack Reactor alumni frequently report getting CSS questions in interviews and knowledge requirements for their primarily JavaScript oriented jobs.
  * Changing colors!
  * Moving around the page!
  * Growing or shrinking in size!
  * Other shapes besides circles
  * Rotation!
* Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in src/init.js) so you can loop through that array and tell each object to lineUp. You'll need to add a lineUp method to each of your dancer types - they don't all have to do exactly the same thing.
* Use an image (<img> tag or CSS background-image) instead of plain-jane RGB to add some pizazz!
* Make dancers that interact with other dancers. For example, by iterating across the array window.dancers and using the Pythagorean Theorem to calculate your distance from each other dancer, you can have a dancer find its n closest neighbors and do something based on their positions.
* Make a dancer that reacts to the mouse (use jQuery to add a mouseover handler).

Do any remaining work to make your dance party a presentable product. Take a screencast of it and post it on Slack.

**Tests**

Go back and add at least two additional unit tests. If possible, try to add tests that will require you improve your implementation in order to make them pass.

# Advanced Content
Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer.

**Refactor with ES6 classes**

Classes? In *JavaScript?* What the...

The next version of JavaScript, implemented from the EMCAScript 6 specification, is here! It is often referred to as ES6 or ES2015. ES6 brings [a lot of exciting new features](https://ponyfoo.com/articles/es6) to the JavaScript language. It's important to know that ES6 is just the specification of the language, or simply a list of rules. It's still up to various engines (V8 - Chrome/Node, SpiderMonkey - Firefox) to implement these rules. Engine maintainers are working hard to implement these new features as fast as they can, but it will take some time before every environment supports the entire ES6 spec.

One exciting feature is the inclusion of a class keyword! This is a big change for engineers who write object-oriented code because it makes JavaScript look and feel more like a traditional class based language even though it's really just syntactic sugar on top of the pseudoclassical instantiation pattern you are familiar with. ES6 makes subclassing much easier as well with the introduction of the extends keyword.

**Your goal is to refactor any classes you've written to use this new syntax!**

* Visit *chrome://help* in Chrome and ensure that you are using version 49 or above. Once you're up to date with the latest version, Chrome will accept and run many new ES6 features, including classes
* Visit the [ES6 compatibility table](https://2ality.com/2015/02/es6-scoping.html) and look at the "Current browser" column if you're curious what other features you unlocked
* Optionally, practice the new syntax by completing [Course] 6ees6ees6ees

**HINT:** The way init.js dynamically selects which constructor function to use will require you to make your class available on the global window object. In order to do this, you will need to define your classes as expressions with the var keyword instead of declarations. [Read this](https://2ality.com/2015/02/es6-scoping.html) for more details on ES6 scoping.

**Other Challenges**

Finish the refactor? Way to go! Here are some more challenges for you. Feel free to experiment with other ES6 features while tackling these:

* Use at least 2 different CSS3 transitions to do cool special effects with your dancers
* Create a new dance floor with its own unique properties for the dancers to inherit. Polymorph all the things!
* Make your dancers break out in a moving conga line after having them line up
* Trig class was a waste of time, right? WRONG! Use polar coordinates to trace out some sweet paths for your dancers to follow across the floor. Implement at least one of these paths
* Use HTML5 <audio> tags to add some hot beats for your dancers to move and groove to
* Allow users to control the dancers with the trackpad or keyboard
* Allow users of the the site create their own dancers on the fly by picking dancing behaviors from a list and uploading their own dancer image
* Implement a particle system

**Relevant Documentation:**

[jQuery](https://api.jquery.com/) is a library used extensively in this project to easily create and modify HTML DOM nodes in the web page.

[jQuery CSS](https://api.jquery.com/css/)

[jQuery effects](https://api.jquery.com/category/effects/)

[CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

[CSS tutorial](https://www.w3schools.com/css/default.asp)

[Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_%28computer_science%29) on Wikipedia
