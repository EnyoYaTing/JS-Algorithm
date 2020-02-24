/* Merge Sort - a divided and conquer approach O(n log n) */
/* Reference : https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort/ */

const mergeSort = (arr) => {
    // do not need to sort if array is empty or has only one integer
    if (arr.length <= 1) {
        return arr;
    }

    // divide the arr into two separate arr 
    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}


const merge = (left, right) => {
    var result = [];
    
    while (left.length || right.length) {
        // compare the first number of left arr & right arr
        if (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift()) 
            } else {
                result.push(right.shift())
            }
        // deal with the last one number of the left or right    
        } else if (left.length) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }
    return result;
}

var num = [5, 6, 1, 9, 4, 7, 2, 3, 0];
console.log(mergeSort(num));