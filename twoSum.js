// LEETCODE #1 TWO SUM
// ------------------------------------------

const norm = (x) => (x = Number(x.reverse().join("")));
var addTwoNumbers = function (l1, l2) {
  const output = norm(l1) + norm(l2);

  return output
    .toString()
    .split("")
    .reverse()
    .map((x) => Number(x));
};

//Examples
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
