const airline = 'TAP Air Portugal';
const plane = 'A380';

console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);
console.log(airline.length);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const str = document
    .querySelector('textarea')
    .value.toLowerCase()
    .split('\n');

  let newArr = [];
  for (let word in str) {
    let newWord = str[word].split('_');
    // console.log(newWord);
    newArr = (
      newWord[0] +
      newWord[1][0].toUpperCase() +
      newWord[1].slice(1)
    ).trim();
    console.log(newArr.);
  }
});
