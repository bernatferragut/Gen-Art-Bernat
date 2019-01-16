# GENERATIVE ART 

## Introduction

### Long time ago, in a far away galaxy...
My life completely changed the day my dad brought me to see a film called TRON back in the 80's. When the film did end I thought to myself...one day I will create graphics like these.

Later came the first days of the Internet in the early 90's with a plugin called macromedia flash which allowed for the first time anybody to start experimenting with graphics and code. 

After that, came Processing and recently with the standarisation of javascript as the programming language of the web new specialised libraries have appeared to make life easier for artists who want to express themselves in the frontiers between design and code.

### P5JS

P5JS was created by [Lauren McCarthy](http://lauren-mccarthy.com/) and is developed by a community of collaborators with the support of the Processing Foundation and NYU ITP.
It represents the javascript web version of the seminal java project for artists called [Processing](https://processing.org/). 

Born in 2016 and backed by the great and inspirng teacher [DanielShiffman](https://shiffman.net/), it has been growing steadily until become the perfect tool to make code accessible to artists, designers, educators and beginners.

### Goals
The Goal with this introductory course is to inspire anybody who wants to start creating digital art with the computer screen as their canvas. To learn the basics of designing art with code.

I ask people to know at least a little bit of javascript, enough so they can follow the course (variables and loops should be enough). It's mainly about reading code, see what it does and experiment with it.

If you need a more introductory course here I give a fantastic link of [AllisonParish](http://www.decontextualize.com/) who has been another great inspiration to create this course for me and I do believe it's a perfect complement for better understanding some of the concepts we will dive into.

### Concepts
* Programming: variables, for loops, classes, p5js functions.
* Mathematics: translations, modulo, sin and cos functions, random.

### Structure
This introduction for creating Generative Art with p5JS course is divided into:

1. Dot class abstraction
2. dot object creation
3. dot animation basics
4. dot sliders
5. dot - row
6. dot - matrix
7. dot - experiments

### P5JS Installation
Insert this piece of code in the head tag of your html file and you will be good to go.

### Inspiration

--------------------------------------------- PG1 ---------------------------------------

# DOT ABSTRACTION

The creation and understanding of this abstraction is the foundation of html canvas art. 

We define what it 'feels' to be a dot through a **class**. The creation of this abstract template is the foundation for creating pixel/dot art. Once this object is 'grasped' we can start experimenting and exploring the canvas.

The **Dot class** is formed of 2 main elements: Attributes and Methods.

1. Arrtibutes are defined in the construction function
> Define the minimal amount of attributes we need: 
* 2d space position (x, y) coordinates.
* size.

2. The Methods will be the different behaviours will will give to the **Dot class**
> Define the minimal amount of methods we need to make the dot behave: 
* on: to make them appear - switching the light on.
* off: to make them disappear - switching the light off.

> Please have as a reference always the P5JS Reference page: (P5JS)[link]

### Concepction of the Dot Class

### Dot Class with parameteres

In this class variation we include the possibility of passing external parameters to the constructor function:
* x,y coordinates
* size
* In case we don't pass any parameter we give the default one after the pipe symbol (|)

--------------------------------------------- PG2 ---------------------------------------

# DOT CREATION

## Dot object instantiation

Inside the dot class we create the methods or functions on() and off() which will allow us to turn the dot ON/OFF at will over the screen. This way we can consider the dot is like a dot of light, like a light bulb that we can control and switch it ON/OFF to produce different kind of effects.

## P5JS main functions

In P5JS everything happens inside two main functions:

> setup()
Anthing that we define here will be called only one time.

>  update()
Anything we define here will be called all the time.

## Timing

By default in P5JS update() function the time defined by Frame Per Seconds **(FPS)** is of 60FPS.

If we want to change the frame rate or the number of repetitions in the loop we must define in the setup function the **frameRate**. This **framerate** will be called inside the update() function.

That way we can control the speed of our animation from 60FPS to just 1 FPS as an example.

In the example we call every second a function which set time out dot.on() every half second
(500 ms) giving the desired blinking effect.

## Blinking

After seeing how the blinking function works and its relation with timing, now we will show you a simple way of achieving the same result.

* We will leave the FPS as standard 60 FPS 
* We focus in animating the alpha channels - transparency- of the color.


In the example we call every second a function which set time out dot.on() every half second
(500 ms) giving the desired blinking effect.

--------------------------------------------- PG3 ---------------------------------------

# DOT ANIMATION

## Translation

To animate we need to find an argument to animate, in this case we will start to animate the coordiante X. The concept that will fuel the X coordinate movement will be a variable that changes constantly. 

In P5JS we have several variables that could be used for this role, in this case we will use **frameCount**. FrameCount changes constantly and drives X coordinate.

## Rebound

We could also simply add to x another value like speed or velocity. This variable will be able to control the amount we translate and the direction would be driven by a negative number. 

In this example we achieve a rebound effect by changing the velocity sign everytime we reach some conditions, in this case when we go further away than the width of the canvas or less than 0. The effect could be also include the Y coordinate to achieve a rebound in all ditections.

## Oscillation
### Modulo

The modulus operator allow us to define oscillations. 

These oscillations or cycles will be limited by the number we apply the modulus operator to. As an example if we apply to an ever increasing number like **frameCount** modulo 10. It will return us numbers betwee 0-9 and repeating this cycle again and again to inifinity. More examples:

* console.log(frameCount % 2)   => 0,1...cycle to infinity
* console.log(frameCount % 5)   => 0,1,2,3,4...cycle to inifnity
* console.log(frameCount % 10)  => 0,1,2,3,4,5,6,7,8,9...cycle to infinity

So the modulo operaror give us an ascending pattern limited by the number we apply the modulo to. We must repeat that the number we are applying the modulo in this example is **framCount** which grows all the time as a source of change.

> VORTEX MATH

**Vortex Math** is a type of Math called circular Math. It exists only between the number 0-9. 
In this case the frameCount % 10 => 0-9 would be at the heart of Vortex Math. So keep in mind this modulo as something very important to experiment and discover new interesting patterns.


### sin(), cos()
The modulo technique is great, but it can only easily produce loops that grow linearly and loop abruptly.An easy technique for making animations that appear to grow and recede smoothly is to calculate the **sin** of the **frameCount** variable.

The sin() function takes a single parameter, and evaluates to a number from -1 to 1. 

Most of the time we use the sin() function, you should use it in combination with two other values, which determine the amplitude of the oscillation (i.e., how big the numbers get) and the frequency of the oscillation (i.e., how fast it goes).

where x, y and z are all numbers. Making **y** bigger will make the oscillation slower; making **z** bigger will make the oscillation larger. The x value is the oscillation’s center point, i.e., what value is the “resting place” of the oscillation.

Finnally if we combine the power of the sin() function with the power of the cos() function we can achieve circular movements with even amounts. With uneven amounts we can achieve beautiful elliptical forms and shapes. Circles are the most perfect form in nature, so here we are touching something ... divine.

## Random

Generative Art starts getting more interesting when we add a surprise factor. This computer generated surprise factor is what is called a random result.

The random() function accepts either no value, meaning it will return a random value between 0-1. Or we can specify the minimum and maximum value we want and expect the function will return a value between those chosen ones.

--------------------------------------------- PG4 ---------------------------------------

# SLIDERS

The sliders, allow us to better visualize changes over our canvas creations. Sliders give us the opportunity to interact and experiment which values can fit more our design criteria.

To be able to use the sliders we need to import the DOM P5JS library. 
Use these two libraries at the top of your HTML file:

In the following peace of code we introduce the basics of sliders creation.
* Under the setup function create a slider object and define its parameters, position and style if any.
* Under the draw function we pick up the slider value and insert it to the canvas parameter we want to interact with.

## Slider structure

## Creation process
1. Define the global variables you want to use at the top of your script.
2. Include these variables inside the dot class with their default values.
3. Inside the setup() function define the sliders (createSlider, position and style).
4. Inside the update() function pass the values of the sliders to your global variables.
5. Now the slider value will drive yout global variable which affects the dot instance values.

* Example 1

## Play and learn
Sliders will help us to play with values. 

Through this play, we can see visually how numbers affect the movement, position, size and color of the different dots we have created. 

It's an interactive way of learning to design through play and feel.

* Example 1

In this line of code we create a new dot and pass as x value a sin() function driven by the frameCount and which speed is controlled by the variable slow affected by the incremented i value. Also affects the amplitude.
The y value is displaced by 35 units and the size remains constant.

--------------------------------------------- PG5 ---------------------------------------

# DOT-ROW

## Row multiplication
After understanding how works the dot conception, creation and animation now it's time to enter into the multiplication of the dot in the canvas. The multiplication it's a fundamental advantage of working with a computer which allow us to do things that by hand would be very difficult or would take a long time.

## Row List

* In this example we create a row list under the setup function. 
* Once this list is created we apply the map method to each of the dots.
* Now we are able to call any dot method we want to affect the dot's behaviour.
* One slider controls the Y position of the dots.
* One slider controls the randomness in Y direction.

--------------------------------------------- PG6 ---------------------------------------

# DOT-MATRIX

## Matrix creation
Now we understand how to create a row and how we can control each of the dot objects individually. We do it by creating a list of their spacial positions and then calling individually each of the functions to perform actions on them.

Creating a 2d Matrix of dots is the natural evloution. 

We will nest inside the first row loop another loop reperesanting our columns. That way we will have the control to create as many dots as we wish in our canvas and the power to control them individually.

Once the Matrix is defined, we will be able to recall the different methods we created in the past and any new one that can help us go in any new direction we wish to take.

## Matrix experiment-1
* We apply the random method to the matrix.
* We play with size, x, y and transparency to create a special effect
* We add sliders and button to reset to default position

## matrix experiment-2 
> matrix training
* Variation with slight size variation based on the sin() function.
* Random color in the grey scale for blinking light effects.

## matrix experiment-3
> desktop modulo cycle

* We apply the random method to the matrix.
* We play with the translate and modulo cycle in both axis.

--------------------------------------------- PG7 ---------------------------------------

# EXPERIMENTS

This examples have been taken from experiments I have been doing in the last year over online platforms like codepen and glitch. Take the time to read and understand the code, enjoy the beauty of generative art.

[CODEPEN EXAMPLES](https://codepen.io/collection/DJKJgP/)

[GLITCH EXAMPLES](https://glitch.com/@bernatferragut)

In the following experiments I have followed some design principles for simplicity:
* Only the dot object
* Only black and white colors
* Only transparence as accent

## Experiment-1
* Simple example of dots in circular motion.
* We can control the radius and speed of the dots with 2 sliders.
* Open the possibility to experiment with multiple orbital trajectories.

## Experiment-2
* Simple example of a particle randomly moving and rebounding the edges of the canvas.
* We have added velocity on **x** and **y** plus some gravity adding real physics to the movement.

## Experiment-2b
* Same example with several particles moving and rebounding on the edges of the canvas.

## Experiment-3
* Simple vertical particle system with one parameter to add randomness.
* A sabre of light to have fun with!

## Your experiments
* From now on you are on your own. May the force be with you...
* [P5JS online editor](https://editor.p5js.org/)

**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**

