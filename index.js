/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
print('What do you want to say to Grandma!!');
let count = 0;
const bl = true;
while (bl) {
  const str = prompt('');
  if (str === 'BYE') {
    count += 1;
  } else {
    count = 0;
  }
  if (count === 3) {
    break;
  }
  if (isUppercase(str)) {
    const ran = getRandomValue(1930, 1950);
    print(`NO, NOT SINCE ${ran}`);
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
