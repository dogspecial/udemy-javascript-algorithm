function calcNumber(num) {
    let indexNum = 1;

    const numCount = {};
    let tempNum = num;
    while(num > indexNum) {
        const remain = tempNum % 10;
        tempNum = Math.floor(tempNum / 10);
        numCount[remain] = !numCount[remain] ? 1 : numCount[remain]+1;
        indexNum *= 10;
    }

    return numCount;
}

function sameFrequency(num1, num2){
    const num1Count = calcNumber(num1);
    const num2Count = calcNumber(num2);

    const keysArr1 = Object.keys(num1Count);
    const keysArr2 = Object.keys(num2Count);

    for (let i = 0; i < keysArr1.length; i++) {
        if (!keysArr2.includes(keysArr1[i])) {
            return false;
        }
    }

    for (let i = 0; i < keysArr1.length; i++) {
        const index = keysArr1[i];
        const count1Value = num1Count[index];
        const count2Value = num2Count[index];
        if (count1Value !== count2Value) {
            return false;
        }
    }

    return true;
}

sameFrequency(22, 222);