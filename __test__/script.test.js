// -  'toBe()'
// -  'toHaveLength()'
// -  'toBeTruthy()'
// -  'toHaveBeenCalled()'
// -  'toHaveReturned()'

// const { TestWatcher } = require("jest");

// module.exports.reverse = reverse;
// 1. Write a function that reverses a number.

// module.exports.alphabetorder = alphabetorder;
// Write a function that returns a passed string with letters in alphabetical order.

// module.exports.capitalize = capitalize;
// Write a function that accepts a string as a parameter and converts the first letter of each word of the string to uppercase.

// module.exports.isPrime = isPrime;
// 4. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// module.exports.duplicate = duplicate;
// Write a function to extract unique characters from a string.


// const objects = require("../script.js");

// test("Test for player name", () => {
//   expect(objects.).toBe("Yusuf");
// });

// test("Test how long is players first name", () => {
//   expect(objects.player1.name).toHaveLength(5);
// });

// test("Is this functions returns hand", () => {
//     expect(objects.getHand).toBeTruthy()
// })

const functions = require('../script')

//  'toBe()'
test("Test if the reverse is working", () => {
    expect(functions.reverse("1234")).toBe("4321")
})

//  -  'toHaveLength()'

test("Test what's the length of the input", () => {
    expect(functions.alphabetorder("yusuf")).toHaveLength(5)
})

//  -  'toBeTruthy()'
test("Test if the input is correct", () => {
    expect(functions.capitalize("yusuf")).toBeTruthy()
})


//  - 'toHaveBeenCalled()' I didn't have valid faction so I had to write a callback

function allMovies(callback, actor) {
    if (actor !== 'al pacino') {
      callback(actor);
    }
  }
      test('movies without al pacino', () => {
      const thismovie = jest.fn();
      allMovies(thismovie, 'brad pitt');
      expect(thismovie).toHaveBeenCalled();
    });


//  -  'toHaveReturned()'

test("test blabla", () => {
    const heyhey = jest.fn(() => 
    function isPrime(number) {
        for(let i = 2; i < number; i++)
          if(number % i === 0) return false;
        return number > 1;
      })
    heyhey();
    expect(heyhey).toHaveReturned();
})