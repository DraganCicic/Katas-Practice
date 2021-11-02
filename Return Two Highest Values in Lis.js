function twoHighest(arr) {
 return arr = arr.sort((a,b) => b - a).filter((x,i) => arr.indexOf(x) == i).slice(0,2);
}
