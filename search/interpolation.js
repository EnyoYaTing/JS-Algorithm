/* Interpolation Search */

const Interpolation = (key, arr) {
    let l, m, r;
    l = 0;
    r = arr.length-1;
    n = arr.length;

    while(l <= r) {
        // m = l + ((r-l)/(arr[r]-arr[l]))

        if (arr[m] === key) {
            return m;
        } else {
            if (arr[m] > key) {
                m = l+1;
            } else {
                m = r-1;
            }
        }
    }
}