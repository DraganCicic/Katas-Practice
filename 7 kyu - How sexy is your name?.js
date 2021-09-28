// How sexy is your name? Write a program that calculates how sexy one's name is according to the criteria below.

// There is a preloaded dictionary of letter scores called SCORES(Python & JavaScript) / $SCORES (Ruby). Add up the letters (case-insensitive) in your name to get your sexy score. Ignore other characters.

//     SCORES = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
//               'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
//               'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
//               'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23}
// The program must return how sexy one's name is according to the "Sexy score ranking" chart.

//        score <= 60:   'NOT TOO SEXY'
//  61 <= score <= 300:  'PRETTY SEXY'
// 301 <= score <= 599:  'VERY SEXY'
//        score >= 600:  'THE ULTIMATE SEXIEST'

function sexyName(name) {
const score = name.toUpperCase().split('').reduce(((sum,ch) => sum + (SCORES[ch] || 0)), 0);
  if(score <=60) return 'NOT TOO SEXY';
  if(score <=300) return 'PRETTY SEXY';
  if(score < 600) return 'VERY SEXY';
  return 'THE ULTIMATE SEXIEST';
   
}

// ----------------------------------------------

function sexyName(name) {
  const n = [...name.toUpperCase()].reduce((a, b) => a + (SCORES[b] || 0), 0)
  return n <= 60 ? 'NOT TOO SEXY' : n <= 300 ? 'PRETTY SEXY' : n <= 599 ? 'VERY SEXY' : 'THE ULTIMATE SEXIEST' 
}

// ---------------------------------------------


const sexyName = (function() {
  const conditionDesc = [
    {cond: s => s <= 60, desc: 'NOT TOO SEXY'},
    {cond: s => s >= 61 && s <= 300, desc: 'PRETTY SEXY'},
    {cond: s => s >= 301 && s <= 599, desc: 'VERY SEXY'},
    {cond: s => s >= 600, desc: 'THE ULTIMATE SEXIEST'},
  ];

  const assignDesc = score => {
    let desc;
    conditionDesc.some(cd => cd.cond(score) ? (desc=cd.desc, true) : false );
    return desc;
  };
  
  const score = n => n.split('').reduce(
                (s, ch) => s + (SCORES[ch.toUpperCase()] || 0), 0);

  return function(name) {
    return assignDesc(score(name));
  }
})();


// --------------------------------------------
function sexyName(name) {
  let score = 0;
  for (let key in SCORES) {
    for (let letter of name) {
      if (letter.toUpperCase() === key) {
        score += SCORES[key];
      }
    }
  }
  return score <= 60 ? 'NOT TOO SEXY' 
    :  61 <= score && score <= 300 ? 'PRETTY SEXY'
    : 301 <= score && score <= 599 ? 'VERY SEXY'
    : score >= 600 ? 'THE ULTIMATE SEXIEST'
    : '';
}


// ------------------------------------------
function sexyName(name) {
  let arr = name.toUpperCase().split('');
  let score = 0;
  console.log(arr);
  arr.forEach((item) => {
    for (let key in SCORES) {
      if (key == item) {
        score = SCORES[key] + score;
      }
    }
  });
  console.log(score);
  if (score <= 60) {
    return 'NOT TOO SEXY';
  }
  if (score >= 61 && score <= 300) {
    return 'PRETTY SEXY';
  }
  if (score >= 301 && score <= 599) {
    return 'VERY SEXY';
  }
  if (score >= 600) {
    return 'THE ULTIMATE SEXIEST';
  }
}

// -------------------------------------------


function sexyName(name) {
  let totalScore = [...name].map(e => SCORES[e.toUpperCase()] || 0).reduce((a, b) => a + b, 0);
  return totalScore <= 60 ? 'NOT TOO SEXY':
         totalScore  <= 300 ? 'PRETTY SEXY':
         totalScore  <= 599 ? 'VERY SEXY': 'THE ULTIMATE SEXIEST'
}
