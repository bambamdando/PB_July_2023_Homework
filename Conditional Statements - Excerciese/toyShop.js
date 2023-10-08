function toyshop(input) {

    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let speakingDolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalToysPrice = puzzles * 2.60 + speakingDolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let totalToysCount = puzzles + speakingDolls + bears + minions + trucks;

    if (totalToysCount >= 50) {
        totalToysPrice = totalToysPrice * 0.75;

    }
    totalToysPrice = totalToysPrice * 0.90;

    if (totalToysPrice >= tripPrice) {

        console.log(`Yes! ${(totalToysPrice - tripPrice).toFixed(2)} lv left.`)
    }
    else {

        console.log(`Not enough money! ${(tripPrice - totalToysPrice).toFixed(2)} lv needed.`);
    }

}
toyshop(["40.8", "20", "25", "30", "50", "10"])