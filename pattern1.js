var x=1;
for(let i=0;i<3;i++)
{
    let s="";
    for(let j=1;j<3-i;j++)
    {
        s+="  ";
    }
    for(let j=0;j<x;j++)
    {
        s+="* ";
    }
    console.log(s);
    x+=2;
}