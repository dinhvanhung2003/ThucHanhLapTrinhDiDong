
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
  } else {
    console.log('No team wins');
  }
};


console.log("Data 1:");
checkWinner(avgDolphins1, avgKoalas1);

console.log("Data 2:");
checkWinner(avgDolphins2, avgKoalas2);
