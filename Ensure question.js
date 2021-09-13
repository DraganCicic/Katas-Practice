// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.


function ensureQuestion(s) {
  const lastChar = s.charAt(s.length - 1)
  if (lastChar === "?"){
    return s
    
  }
  return `${s}?`
  
}
