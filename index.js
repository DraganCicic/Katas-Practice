// Remove First and Last Character

function removeChar(str){
    return str.slice(1,-1)
   
   };
   


  
// Short Long Short
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}


// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }


//   Triple Trouble
//   Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!


  function tripleTrouble(one, two, three){
    let result = "";
    for ( let i=0 ; i < one.length; i++){
      result += one[i] + two[i] + three[i];
   }
  return result;
  }