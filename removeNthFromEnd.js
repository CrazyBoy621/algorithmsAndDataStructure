// LEETCODE #19 REMOVE Nth FROM END

var removeNthFromEnd = function (head, n) {
  head.splice(head.length - n, 1);
  return head;
};

//EXAMPLES
console.log(removeNthFromEnd([1, 2, 3, 4, 5], 3));
console.log(removeNthFromEnd([1], 1));
console.log(removeNthFromEnd([1, 2], 1));
