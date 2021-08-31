// Write function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let string = x.toLowerCase()
  let reverseVersion = x.split("").reverse().join("").toLowerCase(x)
  
  if(string === reverseVersion){
    return true  
    }else{
      return false
    }
  }
