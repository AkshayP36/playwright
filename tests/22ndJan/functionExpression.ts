/*
function multiply(a:number,b:number)
{
    console.log(a*b);
}

multiply(10,20);
*/

//to function expression
let multiply=function (a:number,b:number)
{
    console.log(a*b);
}
multiply(4,3);

let myCalculator=multiply;
myCalculator(12,4);