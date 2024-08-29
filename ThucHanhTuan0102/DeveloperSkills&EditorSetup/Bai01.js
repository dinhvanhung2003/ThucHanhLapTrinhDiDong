const printForeCast=(arr)=>{
    let forecastString="";
    for(let i=0;i<arr.length;i++){
        forecastString +=`...${arr[i]}*C in ${i+1} days`;
        console.log(forecastString+"");
    }
}
// Data 1
printForeCast([17,21,23])
// Data 2
printForeCast([12,5,-5,0,4])