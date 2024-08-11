// Array from:- used to create an array from ant other object
Array.from("Rathod")


// reduce method:-- Reduce an array to a single value

let arr = [1,2,3,6,7]

const red=(a,b)=>{
    return a+b

}
console.log(arr.reduce(red));




// filter method: it is an array with values that passes test and creates a new array

let  arr = [1,22,33,4,5,7,23];

let newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr);

const lessThanSeven = (e)=>{
    if(e<7){
        return true
    }
    return false
}
console.log(arr.filter(lessThanSeven));



// map method in js
creates a new array by performig some operation on each array element

// example: using for loop
let arr = [1,2,7,11];
let newArr = []
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element**2);
    
}
console.log(newArr);

// using map method

let arr=[1,33,44,55]

let  newArr = arr.map((e)=>{
   return e**2
})  
console.log(newArr);