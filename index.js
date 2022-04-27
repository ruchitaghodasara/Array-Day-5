var arr = [1, 2, 4, 5, 6, 2, 1, 3, 2, 6];
console.log(arr[Math.floor((arr.length - 1) / 2)]);

const mixedDataTypes = ['"Hello', 'Hi', [1, 2, 3], 2, { 1: 1, 3: 4 }, 3];
console.log(mixedDataTypes.length);
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
  'Accenture',
];

console.log(itCompanies, itCompanies.length);
console.log(
  itCompanies[0],
  itCompanies[itCompanies.length - 1],
  itCompanies[Math.round((itCompanies.length - 1) / 2)],
  itCompanies[Math.floor((itCompanies.length - 1) / 2)]
);
console.log(itCompanies.join(' '));

for (let i = 0; i < itCompanies.length; i++) {
  var uppercase = itCompanies[i].toUpperCase();
  console.log(itCompanies[i], uppercase);
}

function arrayValue(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      console.log(array[i]);
    } else {
      console.log('company is not found');
    }
  }
}

arrayValue(itCompanies, 'Microsoft');

function charFind(array, char) {
  let mp = new Map();
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(char)) {
      console.log(array[i]);
    }
  }
}
charFind(itCompanies, 'o');
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice(Math.floor((itCompanies.length - 1) / 2)));
console.log(itCompanies.shift());
console.log(itCompanies.splice(Math.floor((itCompanies.length - 1) / 2)), 1);
console.log(itCompanies, itCompanies.pop());
console.log(itCompanies.splice(0, itCompanies.length), itCompanies);
