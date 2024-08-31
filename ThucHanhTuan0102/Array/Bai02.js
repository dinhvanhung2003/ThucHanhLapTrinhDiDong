//Bài 2
function calcAverageHumanAge(ages){
    // Tính tuổi người 
    const humanAges=ages.map(age=>(age<=2?2*age:16+age*4));
    // Lọc chó trưởng thành
    const adultDogs=humanAges.filter(age=>age>=18);
    // Tính trung bình tuổi người 
    const averageAge=adultDogs.reduce((acc,age)=>acc+age,0)/adultDogs.length;
    console.log(averageAge);
}
// Data 1
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// Data 2
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);