// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}

// ----------------------------------------

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

// ---------------------------------------

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// --------------------------------------
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if( a != b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}

// -------------------------------------

function findUniq(arr) {
  let uniq = {},
      result;
  arr.forEach(function(item) {
    uniq[item] = uniq[item] + 1 || 1;
  });
  Object.keys(uniq).forEach(function(key) {
    if (uniq[key] == 1) {
      result = key;
    }
  });
  
  return parseFloat(result);
}
