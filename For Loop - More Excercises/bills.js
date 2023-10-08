function bills(input) {

    let months = Number(input[0]);

    let waterPerMonth = 20;
    let internetPerMonth = 15;
    let sumOfOthers = 0;

    let electricity = 0;
    let water = 0;
    let internet = 0;
    let others = 0;

    let currentElBill = 0;

    for (let i = 1; i <= months; i++) {

        currentElBill = Number(input[i]);
        electricity += currentElBill;
        water += waterPerMonth;
        internet += internetPerMonth;
        others = (currentElBill + waterPerMonth + internetPerMonth) * 1.20;
        sumOfOthers += others;
        others = 0;

    }

    let average = (electricity + water + internet + sumOfOthers) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${sumOfOthers.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}
bills([8,
    123.54,
    231.54,
    140.23,
    100,
    122.4,
    430,
    178.52,
    64.2])
