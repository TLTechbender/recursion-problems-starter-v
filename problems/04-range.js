/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
function range(start,end){
// Omo this recursion thing is no joke, It's making me feel like I don't know any javascript at all

//I just dey copy answers up and down
 if (end <= start) {
    return [];
  }

  const el = range(start + 1, end)
  return [start, ...el];

}

// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
