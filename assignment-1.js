var sampleArray = [1,2,3,4,5]
//----------------------------
function largestElement(arr){
    let maxElement = 0
    for(let i in arr)
    {
        if(maxElement<arr[i])
            maxElement = arr[i]
    }
    return maxElement
}
let max1 = largestElement(sampleArray)
console.log(max1)
//-------------------------

function squareArray(arr){
    let arr1 = []
    for(let i of sampleArray){
        arr1.push(i*i)
    }
    return arr1
}
let squaredArray = squareArray(sampleArray)
console.log(squaredArray)
//------------------------

function divisible(arr){
    let arr1=[]
    for(let i of sampleArray)
    {
        if(i%5==0){
            arr1.push(i)
        }
    }
    return arr1
}
let divisibleBy5 = divisible(sampleArray)
console.log(divisibleBy5)
//-----------------------
const sampleObject = {
    id: 1,
    name: 'ashish',
    sem: 7,
    rollNo: 185005,
    marks: 100,
}
console.log(sampleObject)