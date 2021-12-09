const myFirstFunction=function(){
    console.log("const function");
}
myFirstFunction();

function returnHello(){
    return "hello";
}
function greeting(name,msg){
    console.log(name+" "+msg);
}
greeting("ashish",returnHello());

function first(){
    return "whats up!!";
}
function second(msg,name){
    console.log(name+" "+msg);
}
second(first(),"Ashish");

const third=function(){
    return function(){
        console.log("ashish");
    }
}
const fourth = third();
fourth();