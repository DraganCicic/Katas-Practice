// Your website is divided vertically in sections, and each can be of different size (height).
// You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
// Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

// Example:
// getSectionIdFromScroll( 300, [300,200,400,600,100] )

// will output number 1 as it's the second section.

// getSectionIdFromScroll( 1600, [300,200,400,600,100] )

// will output number -1 as it's past last section.

// Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).



function getSectionIdFromScroll(scrollY,sizes){
let sum = 0;
  for (let i=0; i<sizes.length ; i++){
    if(sum - 1 >= scrollY) return i-1
    else(sum+= sizes[i])
    if(sum-1>=scrollY) return i
    }
  return -1
  }
// --------------------------------------------

function getSectionIdFromScroll(y, s){
   var t=0;
   return s.findIndex(e=>(t+=e)>y);
}

// -------------------------------------------

{const f =getSectionIdFromScroll= (y, [size, ...arr], res = 0) => {
  if (y < size) return res
  if (!size) return -1
  return f(y - size, arr, ++res)
}}
// --------------------------------------------

function getSectionIdFromScroll(scrollY,sizes){
  let total = 0;
  for (let i = 0; i < sizes.length; i++) {
    total = total + sizes[i];
    if (scrollY < total) {
      return i;
    }
  }
  
  return -1;
}
// --------------------------------------------

function getSectionIdFromScroll(scrollY,sizes){
  var i=0;
  while (scrollY>=0)
    scrollY-=sizes[i++]
  return scrollY<0?--i:-1
}
