function countTenPlus(array) {
    var counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            counter++;
        }
    }
    return counter;
}

var array = [19, 7, 23, 5, 14, 27, 30, 1, 18, 12, 19, 7, 23, 5, 14, 27, 30, 1, 18, 12];
console.log(countTenPlus(array));