/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
function flatten(arr) {
  const flattened = [];

  if (arr.length === 0) {
    return flattened;
  }

  const el1 = arr[0];
  const unflattened = [...arr.slice(1)];

  if (Array.isArray(el1)) {
    flattened.push(...flatten(el1), ...flatten(unflattened));
  } else {
    flattened.push(el1, ...flatten(unflattened));
  }

  return flattened;
}
// your code here
 // Omo, I still do not understand this one oooo,I have to do a lot of problems on recursion to really understand it, this is proving to be one tricky topic.....
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
