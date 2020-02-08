/* Binary Search for preordered array */
var num = [1, 13, 22, 34, 46, 53, 63, 77, 84, 95];

//iterative
const isin = (k, arr) => {
    let l, m, r;
    l = 0;
    r = arr.length-1;

    while (l <= r) {
        m = Math.ceil((r+l) / 2);
        if(k === arr[m]) {
            return m;
        } else {
            if(k > arr[m]) {
                l = m+1;
            } else {
                r = m-1;
            }
        }
    }

    return false;
}

console.log(isin(77, num, 10));

// recursion
const recBin = (k, arr, l, r) => {
    let m;

    if (l > r) {
        return false;
    }
    m = Math.ceil((l+r)/2);
    if (k === arr[m]) {
        return m;
    } else {
        if (k > arr[m]) {
            return recBin(k, arr, m+1, r);
        } else {
            return recBin(k, arr, l, m-1);
        }
    }
}

console.log(recBin(77, num, 0, 9));