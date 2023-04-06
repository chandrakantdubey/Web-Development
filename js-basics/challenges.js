const markW = 78;
const markH = 1.69;
const johnW = 92;
const johnH = 1.95;
const markBMI = markW / markH ** 2;
const johnBMI = johnW / johnH ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

console.log(
  `Mark's BMI(${markBMI.toFixed(1)}) is ${
    markHigherBMI ? 'higher' : 'less'
  } than John's(${johnBMI.toFixed(1)})!`
);

const Dolphins = [96, 108, 89];
const Koalas = [109, 95, 106];
const DolphinsAvg = (Dolphins[0] + Dolphins[1] + Dolphins[2]) / 3;
const KoalasAvg = (Koalas[0] + Koalas[1] + Koalas[2]) / 3;
if (DolphinsAvg === KoalasAvg && DolphinsAvg >= 100 && KoalasAvg >= 100) {
  console.log("It's a draw");
} else if (DolphinsAvg > KoalasAvg && DolphinsAvg >= 100) {
  console.log('Dolphins win over Koalas!');
} else if (KoalasAvg >= 100) {
  console.log('Koalas win over Dolphins');
} else {
  console.log('No one wins the trophy!');
}

const billValue = 275;
const tip =
  billValue >= 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `The bill was ${billValue}, the tip was ${tip.toFixed(
    2
  )} and the total value ${billValue + tip}.`
);

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
const DolphinsAvg2 = calcAverage(130, 123, 71);
const KoalasAvg2 = calcAverage(65, 44, 49);
function checkWinner(avg1, avg2) {
  if (avg1 >= avg2 * 2)
    console.log(`Dolphins win (${avg1.toFixed(0)} vs ${avg2.toFixed(0)})`);
  else if (avg2 >= avg1 * 2)
    console.log(`Koalas win (${avg2.toFixed(0)} vs ${avg1.toFixed(0)})`);
}
checkWinner(DolphinsAvg2, KoalasAvg2);

const calcTip = billValue => {
  return billValue >= 50 && billValue < 300
    ? billValue * 0.15
    : billValue * 0.2;
};
const billValues = [125, 555, 44];
const tips = [];
const totalValues = [];
for (let i = 0; i < billValues.length; i++) {
  tips.push(calcTip(billValues[i]));
  totalValues.push(billValues[i] + tips[i]);
}
console.log(tips);
console.log(totalValues);

const mark = {
  name: 'Mark',
  height: 1.69,
  weight: 78,
};
const john = {
  name: 'John',
  height: 1.95,
  weight: 92,
};
function calcBMI() {
  return (this.weight / this.height ** 2).toFixed(1);
}
mark.calcBMI = calcBMI;
john.calcBMI = calcBMI;
console.log(
  `${mark.name}'s BMI(${mark.calcBMI()}) is ${
    mark.calcBMI() > john.calcBMI() ? 'higher' : 'less'
  } than ${john.name}'s (${john.calcBMI()})!`
);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const billTips = [];
const billTotals = [];
for (let i = 0; i < bills.length; i++) {
  billTips.push(calcTip(bills[i]));
  billTotals.push(bills[i] + billTips[i]);
}
function calcBillAverage(arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg;
}
console.log(billTotals);
console.log(`Average bill ${calcBillAverage(billTotals)}`);

const tempArr = [17, 21, 23];
function printForecast(arr) {
  for (let i = 1; i <= arr.length; i++) {
    console.log(`${arr[i - 1]}°C in ${i} ${i > 1 ? 'days' : 'day'}`);
  }
}
printForecast(tempArr);
