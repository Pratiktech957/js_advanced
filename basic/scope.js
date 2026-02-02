// scope(global,block,function)

function scopeDemo() {

    let sp = "function scope demo";
    console.log(sp)

    if (true) {
        let sp1 = "if function scope demo"
        console.log(sp1);

    }

    return scopeDemo;
}
scopeDemo()

// global scope
let a = 5696;

console.log(a)

// block scope
{
    let b = 456;
    console.log(b);
}

// function scope
function test() {

    if (true) {
        let b = 15;
        console.log(b)


    }
}

let api_v1 = test()
console.log(api_v1)