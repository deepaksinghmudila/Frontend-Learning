x = 7;
getName();
console.log(x);
console.log(getName);


var x;

function  getName() {
    
    console.log("Namaste Javascript");
}

var  getName2= function () {    
    console.log("Hoisting in javascript");
}

var getName3 = () => {
  console.log("Hoisting Concept");
};