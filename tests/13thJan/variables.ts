var a=10;
console.log(a); //10

let b=20;
console.log(b); //20

const c=30;
console.log(c);


//function scopped variable : var
function scope()
{
    if(true)
    {
        var msg="Hi there";
        console.log(msg);// Hi there 
    }
    console.log(msg);// Hi there
}
scope();

//block scopped varible : let & const
function scope1()
{
    if(true)
    {
        let msg="Hi there";
        console.log(msg); //Hi there
    }
    console.log(msg);//compile time 
}
scope1();




let score = 100;
score = "hundred"; // compile time error: Type 'string' is not assignable to type

let user: string | null = null;

