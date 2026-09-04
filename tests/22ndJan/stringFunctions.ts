//Hello there, we are learning typescript

let str:string="Hello there, we are learning typescript";
//conver the string to uppercase
console.log(str.toUpperCase());

//conver the string to lowercase
console.log(str.toLowerCase());

let admin:string="   typescript    ";
console.log (admin.trimStart()); //typescript     

console.log(admin.trimEnd());

console.log(admin.trim());//will remove the spaces from the begining & from the end


let message:string="login successfull";
message.includes("login"); //true
message.includes("signIn");// false
message.includes("log");//

let str1:string="test automation test";
str1.indexOf("test");//0
str1.indexOf("automation")//5
str1.lastIndexOf("test");//16

let str2:string="playwright";
str.slice(0,4);//play

let csv="red,green,blue";
let splittedValue=csv.split(",");//[red,green,blue]
console.log(splittedValue);

let csv1="red green blue";
csv1.split(" ");//[red,green,blue]

let str3="ABC";
str3.charAt(0);//A
str3.charAt(2);//C

//multiline string
let str4=`hello
there`;
console.log(str4.charAt(5));
console.log(str4.charAt(6));

