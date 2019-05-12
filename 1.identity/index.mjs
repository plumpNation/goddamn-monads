import Identity from './Identity';

// A simple addition using Identity
const additionResult =
  new Identity(5).bind(value1 => {
    return new Identity(2).bind(value2 => {
      return new Identity(value1 + value2);
    });
  });

console.log('additionResult', additionResult);

// If we declare the named function transform{N} it is easier to see what is
// happening.

/*
const result =
  new Identity(5).bind(function transform1(value) {
    return new Identity(2).bind(function transform2(value2) {
         Now both values are available as variables due to the closure.
      return new Identity(value + value2); // 7
    });
  });
*/

// An example to create a full name, basically addition, but with strings (concatenation)

const fullNameResult =
  new Identity('Jeff').bind(firstName =>
    new Identity('Burkey').bind(lastName =>
      new Identity(firstName + ' ' + lastName)));

console.log('fullNameResult', fullNameResult);
