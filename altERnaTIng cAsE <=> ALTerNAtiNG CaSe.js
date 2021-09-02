// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase


String.prototype.toAlternatingCase = function () {
  let result = "";
  this.split("").forEach(el => {
    if (el === el.toUpperCase()){
      result = `${result}${el.toLowerCase()}`
    } else{
      result = `${result}${el.toUpperCase()}`
    }
  })
  return result
}
