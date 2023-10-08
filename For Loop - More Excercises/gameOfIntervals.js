function gameOfIntervals(input) {

    let turns = Number(input[0]);
    let score = 0;
    let lowNumbers = 0;
    let averageNumbers = 0;
    let goodNumbers = 0;
    let excellendNumbers = 0;
    let perfectNumbers = 0;
    let invalidNumbers = 0;

    let currentNum = 0;

    for (let i = 1; i <= turns; i++) {
        currentNum = Number(input[i]);
        if (currentNum >= 0 && currentNum < 10) {
            score += currentNum * 0.20;
            lowNumbers++;
        } else if (currentNum >= 10 && currentNum < 20) {
            score += currentNum * 0.30;
            averageNumbers++;
        } else if (currentNum >= 20 && currentNum < 30) {
            score += currentNum * 0.40;
            goodNumbers++;
        } else if (currentNum >= 30 && currentNum < 40) {
            score += 50;
            excellendNumbers++;
        } else if (currentNum >= 40 && currentNum <= 50) {
            score += 100;
            perfectNumbers++;
        } else if (currentNum < 0 || currentNum > 50) {
            score /= 2;
            invalidNumbers++;
        }
    }
    console.log(`${score.toFixed(2)}`);
    console.log(`From 0 to 9: ${((lowNumbers / turns) * 100).toFixed(2)}%`)
    console.log(`From 10 to 19: ${((averageNumbers / turns) * 100).toFixed(2)}%`)
    console.log(`From 20 to 29: ${((goodNumbers / turns) * 100).toFixed(2)}%`)
    console.log(`From 30 to 39: ${((excellendNumbers / turns) * 100).toFixed(2)}%`)
    console.log(`From 40 to 50: ${((perfectNumbers / turns) * 100).toFixed(2)}%`)
    console.log(`Invalid numbers: ${((invalidNumbers / turns) * 100).toFixed(2)}%`)
}
gameOfIntervals([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20]);