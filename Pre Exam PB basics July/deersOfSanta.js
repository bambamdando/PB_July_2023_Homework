function deersOfSanta(input) {

    let DaysAbsence = Number(input[0]);
    let leftFoodKg = Number(input[1]);
    let deer1Kg = Number(input[2]);
    let deer2Kg = Number(input[3]);
    let deer3Kg = Number(input[4]);

    let neededFoodDeer1 = DaysAbsence * deer1Kg;
    let neededFoodDeer2 = DaysAbsence * deer2Kg;
    let neededFoodDeer3 = DaysAbsence * deer3Kg;

    let totalFoodNeeded = neededFoodDeer1 + neededFoodDeer2 + neededFoodDeer3;

    if (totalFoodNeeded < leftFoodKg) {
        console.log(`${Math.floor(leftFoodKg - totalFoodNeeded)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(totalFoodNeeded - leftFoodKg)} more kilos of food are needed.`)
    }


}
deersOfSanta(["2", "10", "1", "1", "2"]);
