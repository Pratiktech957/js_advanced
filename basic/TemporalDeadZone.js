// console.log(a);

// let a = 45;

// Temporal dead zone cannot access a here is the example here js understand and know exist the value a at line no 3 but it cant access 



// console.log(a);

function age(n) {

    n += 1;
    console.log(n)

    return age;
}
let b = age(2544);
console.log(b)