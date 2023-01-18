// LEETCODE #7 REVERSE INTEGER
// --------------------------------

// function that returnes reversed integer
const reverseInt = (x) => {
  return Number(x.toString().split("").reverse().join(""));
};

var reverse = function (x) {
  const maxLim = Math.pow(2, 31) - 1;
  const minLim = Math.pow(-2, 31);
  let output = x > 0 ? reverseInt(x) : reverseInt(Math.abs(x)) * -1;
  if (output >= minLim && output <= maxLim) {
    return output;
  } else {
    return 0;
  }
};

// Examples
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(900000));
console.log(reverse(1534236469));
