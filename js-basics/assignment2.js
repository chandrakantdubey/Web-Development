function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population.toLocaleString(
      'en-IN'
    )} population and its capital is ${capitalCity}`
  );
}
describeCountry('India', 1_340_000_000, 'Delhi');
describeCountry('Russia', 144_000_000, 'Russia');
describeCountry('Norway', 5_400_000, 'Oslo');

function percentageOfWorld1(population) {
  return ((population / 7_900_000_000) * 100).toFixed(2);
}
console.log(percentageOfWorld1(1_340_000_000));
console.log(percentageOfWorld1(144_000_000));
console.log(percentageOfWorld1(5_400_000));

const percentageOfWorld2 = function (population) {
  return ((population / 7_900_000_000) * 100).toFixed(2);
};
console.log(percentageOfWorld2(1_340_000_000));
console.log(percentageOfWorld2(144_000_000));
console.log(percentageOfWorld2(5_400_000));

const percentageOfWorld3 = population => {
  return ((population / 7_900_000_000) * 100).toFixed(2);
};
console.log(percentageOfWorld3(1_340_000_000));
console.log(percentageOfWorld3(144_000_000));
console.log(percentageOfWorld3(5_400_000));

function describePopulation(country, population) {
  return `${country} has ${
    population / 1_000_000
  } million people, which is about ${percentageOfWorld1(population)}%`;
}
console.log(describePopulation('India', 1_340_000_000));
console.log(describePopulation('Russia', 144_000_000));
console.log(describePopulation('Norway', 5_400_000));

const populations = [1_340_000_000, 144_000_000, 5_400_000, 33_000_000];
console.log(populations.length === 4);
const percentages = [];
for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);

const neighbours = ['Sri Lanka', 'Bhutan', 'Nepal', 'Bangladesh'];
neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('Bangladesh')] = 'Myanmar';
console.log(neighbours);

const myCountry = {
  country: 'India',
  capital: 'Delhi',
  language: 'Hindi',
  population: 1_340_000_000,
  neighbours: ['Sri Lanka', 'Bhutan', 'Nepal', 'Bangladesh'],
};

console.log(
  `${myCountry.country} has ${
    ((myCountry.population / 1_000_000) * 4) / 5
  } million ${myCountry.language.toLowerCase()}-speaking people, ${
    myCountry.neighbours.length
  } neigbouring ${
    myCountry.neighbours.length > 1 ? 'countries' : 'country'
  } and its capital is ${myCountry.capital}.`
);
myCountry.population += 2_000_000;
console.log(myCountry.population);
myCountry['population'] -= 2_000_000;
console.log(myCountry.population);

myCountry.describe = function () {
  console.log(
    `${this.country} has ${
      ((this.population / 1_000_000) * 4) / 5
    } million ${this.language.toLowerCase()}-speaking people, ${
      this.neighbours.length
    } neigbouring ${4 > 1 ? 'countries' : 'country'} and its capital is ${
      this.capital
    }.`
  );
};
myCountry.describe();
myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length < 0 ? true : false;
};
myCountry.checkIsland();
console.log(myCountry.isIsland);

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(listOfNeighbours[i][j]);
  }
}

console.log('Using while loop');

let i = 0;
while (i < listOfNeighbours.length) {
  let j = 0;
  while (j < listOfNeighbours[i].length) {
    console.log(listOfNeighbours[i][j]);
    j++;
  }
  i++;
}
