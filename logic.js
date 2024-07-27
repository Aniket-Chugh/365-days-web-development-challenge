let a=10;
console.log(a);
function fn(){
    console.log("i am fn");
    function fn2(){
        console.log("i am inner")
        
    }
    console.log("i am fun2")
fn2();
console.log("fn3");
}


fn();

// the inner fun can not be used globbaly

fn2();

console.log(a);
