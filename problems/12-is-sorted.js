/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/
// I honestly didn't know what to do here, what a damn shame
//
function isSorted(array){
    if(array.length<2){
        return true;
             }

    const unsorted = array.slice(1);

    if(array[0]<array[1]){
        return isSorted(unsorted);
    }
return false;
};
// your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
