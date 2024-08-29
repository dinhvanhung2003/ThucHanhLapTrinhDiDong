let Dolphins = [96, 108, 89];
let Koalas = [89, 91, 110];
let DolphinsAvg = (Dolphins[0] + Dolphins[1] + Dolphins[2]) / 3;
let KoalasAvg = (Koalas[0] + Koalas[1] + Koalas[2]) / 3;
console.log("Data")
if (DolphinsAvg > KoalasAvg) {
    console.log("Dolphins win");
} else if (DolphinsAvg < KoalasAvg) {
    console.log("Koalas win")
} else { console.log("Hoa") }
//Data Bonus 1 
console.log("Data Bonus 1")
let DolphinsB1 = [97, 112, 101];
let KoalasB1 = [109, 95, 123];
let DolphinsAvgB1 = (DolphinsB1[0] + Dolphins[1] + Dolphins[2]) / 3;
let KoalasAvgB1 = (Koalas[0] + Koalas[1] + Koalas[2]) / 3;
if (DolphinsB1 > KoalasB1 && DolphinsB1 >= 100) {
    console.log("Dolphins win")
} else if (KoalasB1 > DolphinsB1 && KoalasB1 >= 100) { console.log("Koalas win") } else if (KoalasB1 === DolphinsB1) { console.log("Hoa") } else { console.log("No team win") }
//Data Bonus 2 
console.log("Data Bonus 2")
let DolphinsB2 = [97, 112, 101];
let KoalasB2 = [109, 95, 123];
if (DolphinsAvg > KoalasB1 && DolphinsB1 >= 100) { console.log("Dolphins win") } else if (KoalasB1 > DolphinsB1 && KoalasB1 >= 100) { console.log("Koalas win") } else if (KoalasB1 === DolphinsB1) { console.log("Hoa") } else { console.log("No team win") }