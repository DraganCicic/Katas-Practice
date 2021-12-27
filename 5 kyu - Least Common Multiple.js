// Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. In the case that there are no arguments (or the provided array in compiled languages is empty), return 1.


var lcm = function (...args) {
  const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
  return args.reduce(lcm,1)
};

// ---------------------------


var lcm = function () {
  function gcd(a,b) {
    if (a == 0) return b;
    return gcd(b%a, a);
  }
  return Array.prototype.slice.apply(arguments).reduce(function(a,b) {return a*b / gcd(a,b);}, 1);
};
