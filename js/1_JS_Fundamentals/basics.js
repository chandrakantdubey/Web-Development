// JS does not require to declare the data type explicitly.
// there are 8 data types divided as primitves(7) and object
// Primitive datatypes
let num = 45;
console.log(typeof num);
let firstName = 'Chandrakant';
console.log(typeof firstName);
let boolean = false;
console.log(typeof num);
let undefinedtype;
console.log(typeof undefinedtype);
console.log(typeof null);
console.log(typeof NaN);
console.log(null == undefined);
console.log(null === undefined);
console.log(typeof Symbol);
console.log(typeof BigInt);

// L-1/L-2/L-3
const country = 'India';
const continent = 'Asia';
let population = 1310;
const isIsland = false;
const language = 'Hindi';
console.log(
  typeof country,
  typeof continent,
  typeof population,
  typeof isIsland,
  typeof language
);

// L-4/L-5
let halfPop = population / 2;
console.log(`Half of ${country}'s population is: ${halfPop} million.`);
let popIncr = population + 1;
console.log(
  `Today population of ${country} increased by 1 to become: ${popIncr}`
);
let finlandPop = 6;
console.log(
  `Population of ${country} is more than Finland: ${population > finlandPop} `
);
const avgPop = 33;
let description = `${country} is in ${continent} and more than ${halfPop} million speak ${language}`;
console.log(description);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀 windows + . is used to add emoji to the string 🤣🤣
*/
// let massJohn = 78;
// let heightJohn = 1.69;
// let massMark = 92;
// let heightMark = 1.95;
let massJohn = 95;
let heightJohn = 1.88;
let massMark = 85;
let heightMark = 1.76;
let BMIJohn = massJohn / heightJohn ** 2;
let BMIMark = massMark / heightMark ** 2;
let markHigherBMI = BMIJohn > BMIMark;
console.log(markHigherBMI);
////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
if (BMIJohn > BMIMark)
  console.log(`John's BMI: ${BMIJohn} is greater than Mark's BMI: ${BMIMark}`);
else console.log(`John's BMI: ${BMIJohn} is less than Mark's BMI: ${BMIMark}`);

// L-6
if (population > 33)
  console.log(`${country}'s population greater than average`);
else console.log(`${country}'s population less than average`);

// L-7 type conversion(explicit) and coercion(implicit)
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// L-8
// falssy values: {0,-0,"",Undefined,null,NaN}, truthy values: everything except 6-falssy values.
console.log(
  Boolean(0),
  Boolean(''),
  Boolean(-0),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
);
console.log(Boolean(123), Boolean('Chandrakant'), Boolean([]));

// L-9
let numNeighbours;
// numNeighbours = prompt();// i/p from prompt is string.
// loose equality == type covercion occurs
numNeighbours = '1';
if (numNeighbours == 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else console.log('No borders');
// strict equality === type covercion does not occur
numNeighbours = '1';
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else console.log('No borders');
// type conversion
numNeighbours = '1';
if (Number(numNeighbours) === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else console.log('No borders');

// L-10
// testing for &&
if (population < 50 && language === 'English' && !isIsland)
  console.log(`${country} does meet your criteria`);
else console.log(`${country} does not meet your criteria`);
// testing for ||
if (population < 50 || language === 'English' || !isIsland)
  console.log(`${country} does meet your criteria`);
else console.log(`${country} does not meet your criteria`);

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// let Dolphins = [88,91,110];
// let Koalas = [10,95,12];
let Dolphins = [97, 112, 101];
let Koalas = [109, 95, 126];
let avgDolphins = 0;
let avgKoalas = 0;
for (let i = 0; i < Array.length; i++) {
  avgDolphins += Dolphins[i];
  avgKoalas += Koalas[i];
}
if (avgDolphins >= 100 && avgKoalas >= 100) {
  if (avgDolphins > avgKoalas) console.log('Dolphins win');
  else if (avgDolphins < avgKoalas) console.log('Koalas win');
  else console.log('Draw');
} else if (avgDolphins >= 100 || avgKoalas >= 100) {
  if (avgDolphins > avgKoalas) console.log('Dolphins win');
  else if (avgDolphins < avgKoalas) console.log('Koalas win');
} else console.log('NO WINS');

// L-11
let natLan = 'Chinese';
switch (natLan) {
  case 'Chinese':
  case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'Hindi':
    console.log('Number 4');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too 😊');
}

// L-12
// simple
population > 33
  ? console.log(`${country}'s population is greater than 33 million`)
  : console.log(`${country}'s population is below average`);
// into a variable
let descrp =
  population > 33
    ? `${country}'s population is greater than 33 million`
    : `${country}'s population is below average`;
console.log(descrp);
// into a template literal as expression
console.log(
  `${
    population > 33
      ? `${country}'s population is greater than 33 million`
      : `${country}'s population is below average`
  }`
);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let billVal = 50;
console.log(
  `The bill is ${billVal} and the tip is ${
    billVal >= 50 && billVal <= 300
      ? billVal * 0.15
      : billVal > 300
      ? billVal * 0.2
      : 0
  } the total is ${
    billVal +
    (billVal >= 50 && billVal <= 300
      ? billVal * 0.15
      : billVal > 300
      ? billVal * 0.2
      : 0)
  }`
);
console.log();
