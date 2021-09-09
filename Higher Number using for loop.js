// function with for loop, which returns higher number

function higherNumber(numArr){
let result = [];
for (let i=0; i<numArr.length; i++){
  if (numArr[i] > numArr[i + 1]){
    return " First is higher"
  }else{
    return "Second is higher"
  }
}
}
higherNumber([110,90])
