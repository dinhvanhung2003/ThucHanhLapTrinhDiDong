// Bài 1
function checkDogs(dogsJulia,dogsKate){
    // Xóa mèo
    const correctedjulia=dogsJulia.slice(1,-2);
    // Tất cả chó
    const allDogs=correctedjulia.concat(dogsKate);
    // kiểm tra tuổi 
    allDogs.forEach((age,i) => {
        const dogType=age>=3?"an adult":"still a puppy";
        console.log(`Dog number ${i+1} is ${dogType} and is ${age} years old`);
    });
}
// Test data 1
    checkDogs([3,5,2,12,7],[4,1,15,8,3])
// Test data 2
    checkDogs([9,16,6,8,3],[10,5,6,1,4])
