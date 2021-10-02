// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(n){
  return n % 2 == 0 ? n * 8 : n * 9
}
// ---------------------------------
function simpleMultiplication(value){
    
    if(value%2===0 ){
     return value *8
    }
    else{
    return value* 9;
    }    
}
// ---------------------------------
function simpleMultiplication(number){
    return (number % 2 == 0)? number * 8 : number * 9;
}
