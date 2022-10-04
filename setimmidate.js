let a = 2;
let b = 4;

function add(n1,n2){
    console.log(n1+n2);
}
setImmediate(()=>{
    add(a,b);
});

// add(a,b);
console.log("inside event loop is one");

