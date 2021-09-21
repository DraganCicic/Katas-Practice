// Create a function called shortcut to remove all the lowercase vowels in a given string.


function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}


function shortcut(string){
  var vowels = "aeiou";
  var output = "";
  for (var i = 0; i < string.length; i++) {
    if (!(vowels.indexOf(string[i]) > -1)) {
      output += string[i];
    }
  }
  return output;
}
