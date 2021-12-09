const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11]
const isEven = num => num % 2 ===0
const sorter = ((a,b) => {
    if (isEven(a) && !isEven(b)) {
        return -1
    }
    if (!isEven(a) && isEven(b)) {
        return 1
    }
    return a - b
})
const oddEvenSort = arr => {
    arr.sort(sorter)
}
oddEvenSort(arr)
console.log(arr);