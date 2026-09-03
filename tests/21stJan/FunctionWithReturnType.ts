function add(a:number,b:number)//a,b Paramter
{
    return(a+b);
}
let result=add(23,77); //23 & 77 : Arguments
console.log(result); //catching a return value is not mandetory

function multiply(a:number,b:number):number
{
    return(a*b);//
}


function divide(a:number,b:number):void
{
    console.log(a/b);
    return(a/b);
}

