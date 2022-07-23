function factoial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factoial(n - 1)
}
console.log(factoial(10));