function x() {
    
    var a = 90;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();
//console.log(z());

// function forming closures only returns the reference of the variables not the value of them.
z();