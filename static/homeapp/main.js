// non-experimental stable version of code--modified code with water-fountain
// like effects can be found in the file named modified.js

$('.enter_link').click(function() { 
    $('#imgcontainer').fadeOut(500);
 });

$(document).ready(function(){
canvas=document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context=canvas.getContext("2d");

function clearCanvas() {
  context.fillStyle="rgb(32, 32, 32)";
  context.fillRect(0,0,canvas.width, canvas.height);
}


class Vector {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  add (vector){
    this.x = this.x + vector.x;
    this.y = this.y + vector.y;
  }
}

function inbounds(x, y, w, h){
  if (x > canvas.width || x+w < 0 || y+h < 0 || y > canvas.height){
    return false;
  } else {
    return true;
  }
}

class RandomGenerator{
  constructor(){
    this.number = -1
  }
  
  generate(){
    if (Math.random() < 0.5){
      this.number = -1;
    }
    else{
      this.number = 1
    }
    return this.number;
  }
}

class Smoke {
  constructor(x, y){
    this.color = "orange";
    this.size = 5;
    this.leftright = new RandomGenerator();
    this.position = new Vector(x, y);
    this.velocity = new Vector(0,0);
    this.acceleration = new Vector(this.leftright.generate() * (0.1 + Math.random()),0.5 + Math.random());
    this.lifespan = 0;
  }
  animate(){
    this.lifespan = this.lifespan + 1;
    this.size = 4.5 - this.lifespan/10;
    var position = this.position;
    context.fillStyle = this.color;
    context.fillRect(position.x, position.y, this.size, this.size);
     this.velocity.add(this.acceleration);
     position.add(this.velocity);
  }
}

class SmokeTrail{
  constructor(rocket){
    this.smokes = [];
    this.rocket = rocket;
    this.position = new Vector();
    this.smokesPerAnimate = 20;
  }
  
  animate(){
    var smokes = this.smokes;
    var rocket = this.rocket;
    for(var x = 0; x < this.smokesPerAnimate; x++){
      smokes.push(new Smoke((rocket.position.x + rocket.width/4), (rocket.position.y + rocket.height)))
    }
    
    for(var x = 0; x < smokes.length; x++){
      var smoke = smokes[x]; 
      
      if(!inbounds(smoke.position.x, smoke.position.y, smoke.size, smoke.size)){
        smokes.splice(x, 1);
        x--;
      }
      
      
      smoke.animate();
    }
  }
}


class Rocket {
  constructor(a,b){
    this.color = "white";
    this.height = 40;
    this.width = 5;
    this.a = a;
    this.b = b;
    this.position = new Vector(canvas.width * a/100, canvas.height * b/100- this.height-20);
    this.velocity = new Vector(0,0);
    this.acceleration = new Vector(0,-.08)
    this.smokeTrail = new SmokeTrail(this);
    // this.smoke = new Smoke();
  }
  
   reset(){
     this.velocity = new Vector(0,0);
     this.position = new Vector(canvas.width * this.a/100, canvas.height * this.b/100- this.height-20);
     this.acceleration = new Vector(0,-.08);
   }
  
  animate() {
    var position = this.position;
    
     this.velocity.add(this.acceleration);
     position.add(this.velocity);
    
    if(!inbounds(position.x, position.y, this.width, this.height)){
      //show button to enter website
      this.reset();
    }
    
    this.smokeTrail.animate();
    
    context.fillStyle = this.color;
    context.fillRect(position.x, position.y, this.width, this.height);
  }
}

rocket2 = new Rocket(70, 100);
function loop() {
  clearCanvas();
  rocket2.animate();
  //is this working
}
$(document).ready(function(){
  setInterval(loop, 1000/60);
})

})