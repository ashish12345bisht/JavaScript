//for loop
console.log("#####    Simple for loop    #####")
for(let i=0;i<6;i++){
    console.log(i);
}

// to get index - using for-in
console.log("#####    For-in loop    #####")
var arr=[2,2,3,4]
for(var i in arr){
    console.log("array ",i);
}

// to get index - using for-of
console.log("#####    For-of loop    #####")
var title=["iron man", "captain america", "hulk", "thor"]
for(var i of title){
    console.log("array ",i);
}

//while loop
console.log("#####    While loop    #####")
let x=0;
while(x<6)
{
    console.log(x);
    x++;
}

//do-while loop
console.log("#####    do-While loop    #####")
let y=0;
do
{
    console.log(y);
    y++;
}while(y<6);

