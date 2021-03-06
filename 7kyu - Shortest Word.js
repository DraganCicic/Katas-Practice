// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



function findShort(s){
  let result = Math.min(...s.split(" ").map((word) => word.length));
  return result
  
}
// ----------------------------------------------------------------

function findShort(s){
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}
// ----------------------------------------------------------------

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

// ----------------------------------------------------------------

function findShort(s){
  var arr = s.split(' ');
  var min = arr[0].length;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  return min
}
