let markMass1 = 78;
let markMass2 = 95;
let markHeight1 = 1.69;
let markHeight2 = 1.88;
let johnMass1 = 92;
let johnMass2 = 85;
let johnHeight1 = 1.95;
let johnHeight2 = 1.76;

let bmiMark1 = markMass1 / (markHeight1 ** 2);
let bmiMark2 = markMass2 / (markHeight2 ** 2);
let bmiJohn1 = johnMass1 / (johnHeight1 ** 2);
let bmiJohn2 = johnMass1 / (johnHeight2 ** 2);

console.log("Data 1")
if (bmiMark1 > bmiJohn1) {
    console.log(`Mark's BMI ${bmiMark1} is higher than John's ${bmiJohn1}`)
} else {
    console.log(`John's BMI ${bmiJohn1} is higher than Mass's ${bmiMark1}`)
}
console.log("Data 2")
if (bmiMark1 > bmiJohn1) {
    console.log(`Mark's BMI ${bmiMark1} is higher than John's ${bmiJohn1}`)
} else {
    console.log(`John's BMI ${bmiJohn1} is higher than Mass's ${bmiMark1}`)
}