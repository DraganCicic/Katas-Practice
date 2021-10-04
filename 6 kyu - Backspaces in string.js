// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""





function clean_string(s) {
  s=s.split``
	for (let i=0;i<s.length;i++){
    if (s[i]==='#'){
      s[i]=''
      s[i-1]=''
      s=s.filter(v=>v!=='')
      i-=2
    }
  }
  return s.join``
};
// ------------------------------

function cleanString(s) {
  let result = [];
  [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
  return result.join("");
}


// -------------------------------

function cleanString(s) {
  let string = s;
  let newString = "";

  for (i=0; i<s.length; i++) {
    if ( string[i] === "#" ) {
      newString = newString.substring(0, newString.length - 1)
    } else {
      newString = [newString.slice(0, newString.length), s[i], newString.slice(newString.length)].join('');
    }
  }
  return newString;
};
