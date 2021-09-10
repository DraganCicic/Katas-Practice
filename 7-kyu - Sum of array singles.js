// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

function repeats(arr){
  let result = 0;
  
  for(let i = 0; i < arr.length; i ++) {
    
    const fillArr = arr.filter((elm, idx) => elm === arr[i]);
    
    fillArr.length === 1 ? result += fillArr[0] : 0
  }
    
  return result;
};

// ---------------------------------------------------------

function repeats(arr) {
  let i;
  let sum = 0;
  arr.sort((a, b) => {
    return a - b;
  });
  for (i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      sum += arr[i];
      i--;
    }
  }
  return sum;
};


// --------------------------------------------------------

function repeats(arr) {
  let set = new Set()
  arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
  return [...set].reduce((s,v) => s+v, 0)
}

// ---------------------------------------------------------



function repeats(arr){
   return arr
   .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
   .reduce((a, b) => a + b);
};
