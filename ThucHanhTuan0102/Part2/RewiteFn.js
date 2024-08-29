// map 
const a=[1,2,3];

const fn=(item,index)=>{
    console.log("Item",item);
    console.log("Index",index);
}
const b=a.map(fn)
console.log(b);

// forEach
const numbers = [1,2,3,4,5];

function myNumber(item,index){
    console.log(`${item} at index ${index}`);
    
}
numbers.forEach(myNumber);


  
 
