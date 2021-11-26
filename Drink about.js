// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"



function peopleWithAgeDrink(old) {
  if (old>=21)return "drink whisky";
  if (old<14)return"drink toddy"
  if (old<18)return"drink coke"
  if (old<21)return"drink beer"
};
// -------------------------------

function peopleWithAgeDrink(age){
  if(age < 14)
    drink = 'toddy';
  else if(age < 18)
    drink = 'coke'
  else if(age < 21)
    drink = 'beer';
  else if(age => 21)
    drink = 'whisky';

  return 'drink ' + drink;
}

// ----------------------------

var peopleWithAgeDrink = function(old) {
  if(old<14){
    return "drink toddy";
  }
  else if(old<18){
    return "drink coke";
  }
  else if(old<21){
    return "drink beer";
  }
  else {
    return "drink whisky";
  }
};
