function maxSubArraySum(array, num) {
    if (num > array.length) return null;

    let max = -Infinity;

    for (let i = 0; i < array.length - num; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += array[i + j];
        }

        if (temp > max) {
            max = temp;
        }
    }
    console.log(max)
    return max;
}

maxSubArraySum([1,2,3,5,7,3,2,3,5,1,2], 3);