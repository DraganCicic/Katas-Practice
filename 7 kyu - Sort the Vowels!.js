// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string


function sortVowels(s){
  if(typeof s !== 'string') return ""
  return s.split``.map( v => {
    if(/[aeoiu]/i.test(v)) return "|"+ v + "\n"
    else return v + "|" + "\n"}).join``.slice(0,-1)

}

//--------------------------------------------------


function sortVowels(s){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (typeof s === "string") return [...s].map(letter => vowels.includes(letter) ? `|${letter}` : `${letter}|`).join('\n');
  return '';
}
//--------------------------------------------------

function sortVowels(s){
  if (s==undefined) return '';
  var arr=[];
  for (var i=0; i<s.length; ++i)
    if (s[i]=='a'||s[i]=='e'||s[i]=='u'||s[i]=='i'||s[i]=='o'||s[i]=='A'||s[i]=='E'||s[i]=='U'||s[i]=='I'||s[i]=='O')
      arr.push('|'+s[i]);
    else
      arr.push(s[i]+'|');
  return arr.join('\n');
}

//--------------------------------------------------
function sortVowels(s){
  return typeof s === 'string' 
          ? s.split('')
             .map(el => /[aeuio]/gi.test(el) ? `|${el}` : `${el}|`)
             .join('\n')
          : '';
}
