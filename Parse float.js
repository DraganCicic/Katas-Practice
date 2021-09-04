// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

function parseF(s) {
  
  if (typeof s === 'boolean' || typeof s === 'undefined' || (isNaN(Number(s)))) {
    return null;
  } else {
    return Number(s);
  }
}



function parseF(s) {
  
  if (typeof s === 'boolean' || typeof s === 'undefined') {
    return null;
  } else if (isNaN(Number(s))) {
    return null;
  } else {
    return Number(s);
  }
}
