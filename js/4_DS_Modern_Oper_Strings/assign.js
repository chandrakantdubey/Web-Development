const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let [players1, players2] = game.players;
console.log(players1, players2);

let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

let allPlayers = [...players1, ...players2];
console.log(allPlayers);

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals(...players) {
  console.log(`${players.length} goals scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

(team1 > team2 && console.log('Team 2 won')) ||
  (team1 < team2 && console.log('Team 1 won'));

// challenge 2
for (let [index, score] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(index) + 1}: ${score}`);
}

let sum = 0;
for (let val of Object.values(game.odds)) {
  sum += val;
}
console.log((sum / Object.values(game.odds).length).toFixed(2));

//challenge 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

let arrFromMap = [...gameEvents];
console.log(arrFromMap);

console.log(gameEvents.delete(64));
console.log(gameEvents);

console.log(
  `An event happened on average, every ${90 / gameEvents.size} minute.`
);

for (let [key, val] of gameEvents) {
  console.log(`${key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}: ${val}`);
}
