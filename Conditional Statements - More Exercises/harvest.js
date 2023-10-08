function harvest(input) {

    let vineyardSize = Number(input[0]);
    let grapePerMeter = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrape = vineyardSize * grapePerMeter;
    let wineMade = (totalGrape * 0.40) / 2.5;


    if (wineMade >= wineNeeded) {
        console.log(`Good harvest this year! Total wine: ${(Math.floor(wineMade))} liters.`)

        let winePerWorker = (wineMade - wineNeeded) / workers;
        console.log(`${(Math.ceil(wineMade - wineNeeded))} liters left -> ${(Math.ceil(winePerWorker))} liters per person.`)
    } else {

        let wineNeededDiff = Math.abs(wineMade - wineNeeded);
        console.log(`It will be a tough winter! More ${(Math.floor(wineNeededDiff))} liters wine needed.`)
    }

}
harvest(["1020", "1.5", "425", "4"]);
