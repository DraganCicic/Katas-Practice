// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

function all( arr, fun ){
  return arr.every(fun)
}


// ---------------------------------
function all(arr, fun)
{
  var length = arr.length;
  
  for (var i=0; i<length; ++i)
    if (!fun(arr[i]))
      return false;
  
  return true;
}

// ------------------------------

function all(arr, fun){
  let res = [];
  for (let i in arr) {
    if (fun(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res.length == arr.length ? true : false;
}

// ----------------------------


function all( arr, fun ){
  return (fun(arr) === true) ? true : false;// ...
}
