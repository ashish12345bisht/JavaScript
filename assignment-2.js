var arr=[1,2,3,44,55,6];
var i=0;
var j=arr.length-1
while(i<=j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    i++
    j--
}
console.log(arr)
//---------------
var s="students"
var j=s.length-1
var ans=""
while(j>=0)
{
    ans+=s[j]
    j--;
}
console.log(ans)
