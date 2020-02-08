/* Sequential Search from the beginning of array to the end */

var name_list = ["Amy", "Ken", "Mary", "Justin", "Sherry", "Tom", "Sophia"]

const findMember = (name, arr) => {
    const LEN = arr.length;

    for(let i=0; i<LEN; i++) {
        if (arr[i] === name) {
            return i;
        }
    }
    return false;
}

console.log(findMember("Tom", name_list));  // position = index = 5
console.log(findMember("Juliy", name_list));  // false;