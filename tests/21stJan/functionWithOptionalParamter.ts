function marriage(bride:string, groom:string, relative?:boolean)
{
    if(relative===undefined)
    {
        console.log("its a simple marriage just bride, groom & some cake"+ bride,groom);
    }
    else
    {
        console.log("big fat indian wedding: full of drama"+ bride,groom,relative);
    }
}

marriage("angel","harry");
marriage("angel","harry",true);