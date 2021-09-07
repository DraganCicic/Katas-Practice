// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
  let result = numbers.split(' ');
  return `${Math.max(...result)} ${Math.min(...result)}`;
}



function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}


function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number)
  
  var min = Math.min.apply(null, numbers)
  var max = Math.max.apply(null, numbers)
  
  return max + ' ' + min
}
