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


function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}

  var letter = string.split(‘’);
  var arr = [];
  for(let i = 0; i < letter.length; i++) {
    if(!(letter[i] == ‘a’ || letter[i] == ‘e’|| letter[i] == ‘i’ ||letter[i] == ‘o’ || letter[i] == ‘u’)) {
      arr.push(letter[i])
    }
  }
  return arr.join(‘’)
}
