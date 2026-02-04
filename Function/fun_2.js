function start(){
    st = "started";
    console.log(st);
    st+= " and running";
    console.log(st);
    return st;


}

start();

let result=()=>{
    console.log("arrow function result");
}

result();

let res = function resultFunc(){
    console.log("function expression result");
}   

res();

function end(v){
    console.log(`${v} ended`);
}
end("function");
end(res());