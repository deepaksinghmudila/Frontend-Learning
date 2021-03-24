/************** BLOCK SCOPE IN JS  ********************/
/*
{
  var x = 10;
  let y = 100;
  const z = 1000;
  console.log(x);
  console.log(y);
  console.log(z);
}

console.log(x);
console.log(y);
console.log(z);
*/

/********* SHADOWING IN JS  ****************/
/*
let y = 11;
{
  var x = 10; // t has shadowed the global value of x.
  let y = 100;
  const z = 1000;
  console.log(x);
  console.log(y);
  console.log(z);
}

//console.log(x);
console.log(y);
//console.log(z);
*/

/****** shadowing follows lexical environment ******/

const a = 10;
{
    const a = 20;
    {
        const a = 30;
        console.log(a);
    }
}