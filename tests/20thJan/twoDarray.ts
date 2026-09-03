let arr:number[][]=[[10,20,30],[40,50,60]];
for(let i=0;i<arr.length;i++)//rows
{
    for(let j=0;j<arr[0].length;j++)//columns
    {
        console.log(arr[i][j]);
    }
}

//printing the array using for ..in loop
for(let i in arr) //rows
{
    for(let j in arr[i]) //column
    {
        console.log(arr[i][j]);//arr[0][]
    }
}