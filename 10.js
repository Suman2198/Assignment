No because a constructor function is initialized with a number of parameters, which would be assigned as properties of this, referring to the function itself.
function Hero(name,level){
  this.name = name;
  this.level = level;
}
