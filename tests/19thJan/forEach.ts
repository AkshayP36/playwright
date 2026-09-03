let employee: Array<string> = ["john", "mathew", "harry", "potter"];

//values
employee.forEach(function (value) {
    console.log(value);
}

);

//index + value
employee.forEach(function (value, index) {
    console.log(value, index);
    console.log(`the value is : ${value} & the index is : ${index}`);
}

)

