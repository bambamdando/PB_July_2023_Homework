function equalPairs(input) {

    let sumPair = 0;
    let pairsArr = [];

    for (let i = 1; i < input.length; i++) {
        sumPair += Number(input[i]);
        if (i % 2 == 0) {
            pairsArr.push(sumPair)
            sumPair = 0;
        }
    }
    let maxNum = Math.max(...pairsArr);
    let minNum = Math.min(...pairsArr);

    let diff = maxNum - minNum;

    for (let j = 0; j < pairsArr.length; j++) {
        if (pairsArr.length > 5) {
            diff = pairsArr[pairsArr.length - 1] - pairsArr[pairsArr.length - 2];
        }
    }

    for (let k = 0; k < pairsArr.length; k++) {
        if (pairsArr.length < 2) {
            let value = pairsArr[k];
            console.log(`Yes, value=${value}`);
            return;
        }
        else if (pairsArr[k] == pairsArr[1]) {
            let value = pairsArr[k];
            console.log(`Yes, value=${value}`);
            return;
        } else {
            console.log(`No, maxdiff=${diff}`);
            return;
        }
    }
}
equalPairs([7,
    34,
    -33,
    52,
    12,
    -32,
    32,
    23,
    41,
    7,
    25,
    34,
    23,
    124,
    21]);