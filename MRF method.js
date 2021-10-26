//Map method

var arr=[1,2,3,4,5];
let res=arr.map((element)=>element*3);
console.log(res);

//Filter method

var arr1=[1,2,3,4,5];
var resu=arr1.filter((ele)=>ele%2===0);
console.log(resu);
//var student=[{name:'alice',marks:60},
//    {name:'bob',marks:70},
//    {name:'mark', marks:80}];

//var res=student.filter((ele)=>ele.marks > 60);
//console.log(res.map((ele)=>ele.name));

//Reduce method

var arr2=[1,2,3,4];
var resul=arr2.reduce((a,e)=>a+e,0);
console.log(resul);

// Spread Operator...

let arr3=['h','e','l','l','o'];
let result=[...arr3];
console.log(result);
// console.log(arr);
// console.log(...arr);



    
