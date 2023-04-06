// all the assignments go in here
const country = 'India';
const continent = 'Asia';
const population = 1_340_000_000;
console.log(
  `My country is ${country} and is part of ${continent} continent with a population of ${population}.`
);

const isIsland = false;
let language;
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof language);

language = 'Hindi';

console.log(
  `If the country is split in half each part will have a population of ${
    population / 2
  }.`
);
console.log(`A child born will make the population ${population + 1}.`);
const populationOfFinland = 6_000_000;
console.log(
  `Population of ${country} is greater than Finland: ${
    population > populationOfFinland
  }`
);
console.log(
  `Population of ${country} is greater than average population: ${
    population > 33_000_000
  }`
);
const description = `${country} is in ${continent} and its population is ${population} and ${
  (population * 4) / 5
} people speak ${language}`;
console.log(description);

if (population > 33_000_000) {
  console.log(`${country}'s population is greater than average.`);
} else {
  console.log(`${country}'s population is below average.`);
}

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

const numNeighbours = Number(
  prompt('Enter number of neighbours does your country have?')
);
if (numNeighbours === 1) {
  console.log(`Only ${numNeighbours} border!`);
} else if (numNeighbours > 1) {
  console.log(
    `More than 1 border! Total of ${numNeighbours} borders touching!!`
  );
} else {
  console.log('No Neigbours');
}

if (population < 50_000_000 && language === 'English' && !isIsland) {
  console.log(`'You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria!`);
}

switch (language.toLowerCase()) {
  case 'chinese':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

population > 33_000_000
  ? console.log(`${country}'s population is above average population`)
  : console.log(`${country}'s population is below average population`);
