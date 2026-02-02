console.log(a)
var a = 45;



// var c = undefined goes to top of the code then console.log(c) then c= 45 

var d = undefined;
console.log(d);
d = 45;


// let not like that var if not declare or intialization let then its shows a error temporal dead zone....

// console.log(b)
// let b = 25


// temporal deadZone are not in var but in let 

// var is a function scope it doesnot respect the block scope...
var x = 1;
{
    var x = 2;
}
console.log(x);

var v = 10;

{
    var b = 20;
    console.log("inside:", b);


}
console.log("inside:", v);
