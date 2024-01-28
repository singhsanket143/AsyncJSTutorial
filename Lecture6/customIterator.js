function customIterator(arr) {
    let idx = 0;

    function next() {
        if(idx == arr.length) {
            return {value: undefined, done: true};
        }

        const nextElement = arr[idx];
        idx++;
        return {value: nextElement, done: false}
    }
    return { next };
}

