// Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// #Examples

// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}


// --------------------------


var min = function(list){
  let min = list[0];
  for (let i of list) {
    if (i < min) {
      min = i;
    }
  }
    return min;
}

var max = function(list){
  let max = list[0];
  for (let i in list) {
    if (list[i] > max) {
      max = list[i];
    }
  } 
    return max;
}
