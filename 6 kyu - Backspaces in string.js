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

// ------------------------------


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

// -----------------------------


function clean_string(s) {
  var result = '';
  s.split('').forEach(function(char) {
    if (char !== '#') {
      result += char;
    } else if (char === '#' && result.length) {
      result = result.substr(0, result.length - 1);
    }
  });
  return result;    
}
// ------------------------------


function cleanString(s) {
  let result = []; s.split('').map( e => { e === '#' ? result.pop() : result.push(e)
  })
  return result.join('');
};

// ------------------------------

function cleanString(s) {
  let result = [];
  s.split('').map(e => {
    if(e === '#') {
      result.pop();
    } else {
      result.push(e)
    }
  })
  return result.join('');
};



// ------------------------------


function cleanString(s) {
    var output = "";

    for (const letter of s) {
        if (letter === '#') {
            output = output.slice(0, -1);
        }
        else {
            output += letter;
        }
    }

    return output;
};


// ---------------------------------


function cleanString(s) {
  return s.split('')
    .reduce(
      (acc, letter) => letter !== '#' ? [...acc, letter] : acc.slice(0, -1)
      , [])
    .join('');
	
}
	
	
// --------------------------------
	
	
  const res = []
  for(let i of s){
    if(i === '#'){res.pop()}
    else{res.push(i)}
  }
  return res.join('')
};


// --------------------------------

function cleanString(s) {

  let result = ''
  for(let i=0; i<s.length;i++){
    //taking care of the letters of the string
    if(s[i] !== "#"){
      result += s[i]
    } else {
      //remove the last letter of result
      result = result.slice(0, -1)
    }
  }
  return result
};

// -------------------------------------


function cleanString(s) {
  let result = []
  s.split("").forEach((ele)=>{
    ele == "#" ? result.pop() : result.push(ele)
  })
  return result.join("")
};

// -------------------------------------
