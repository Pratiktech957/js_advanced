let a = 10;

{
    let a = 20;
    console.log("block scope:", a);
}

console.log("global scope:", a);