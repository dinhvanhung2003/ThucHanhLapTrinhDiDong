const calcAverageHumanAgeChained = ages =>
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  
  // Test data 1
  console.log(calcAverageHumanAgeChained([5, 2, 4, 1, 15, 8, 3]));
  
  // Test data 2
  console.log(calcAverageHumanAgeChained([16, 6, 10, 5, 6, 1, 4]));