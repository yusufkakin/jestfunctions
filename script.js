//QUESTION1

function reverse(num) {
  return String(num).split("").reverse().join("");
}


//QUESTION2

function alphabetorder(text) {
  return text.split('').sort().join('');
};


//QUESTION3

function capitalize(text){
return text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}


//QUESTION4

function isPrime(number) {
  for(let i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number > 1;
}


//QUESTION5

 function duplicate(text) {
  return text
    .split('')
    .filter(function(item, position, itself) {
      return itself.indexOf(item) == position;
    })
    .join('');
}

//QUESTION6

function mycallbackfunction(callback){
  callback()
}


module.exports.reverse = reverse;
module.exports.alphabetorder = alphabetorder;
module.exports.capitalize = capitalize;
module.exports.isPrime = isPrime;
module.exports.duplicate = duplicate;