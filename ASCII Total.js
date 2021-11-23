// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291





function uniTotal(str){
  return str.split('').reduce(function(last,now){
    return last+now.charCodeAt();
  },0);
}

// --------------------

function uniTotal(str) {
  let total = 0;
  
  for(let char of str) {
    // Use codePointAt to avoid incorrect result when Unicode Code large than 0xFFFF
    total += char.codePointAt(char);  
  }
  return total;
}
