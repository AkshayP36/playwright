let data:[number, ...string[]]=[10,"abc","xyz","harry potter"];

let data1:[number, ...string[]]=[10];

let data2:[...string[], number]=["john", "harry","potter",10];

//rest paramter are not allowed in array

//tuple with only rest paramter
let data3:[...string[]]=["abc","xyz","lmn"];

let data4:[...string[]];