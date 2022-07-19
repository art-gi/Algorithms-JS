function recursiveSum(arr, index) {

    if (index >= arr.length -1) {
        return arr[index];
    }
    return arr[index] + recursiveSum(arr, index + 1);

}
console.log(recursiveSum([1, 2, 3, 4], 0));
