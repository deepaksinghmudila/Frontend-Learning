function x() {
    
    var a = 90;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
//console.log(z());
z();