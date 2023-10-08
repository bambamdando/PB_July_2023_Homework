function schoolCamp(input) {

    let season = input[0];
    let typeOfGroup = input[1];
    let sizeOfGroup = Number(input[2]);
    let daysHoliday = Number(input[3]);

    let pricePerStudent = 0;
    let sport = "";


    if (season == "Winter") {
        if (typeOfGroup == "boys" || typeOfGroup == "girls") {
            pricePerStudent = 9.60;
        } else {
            pricePerStudent = 10;
        }
    } else if (season == "Spring") {
        if (typeOfGroup == "boys" || typeOfGroup == "girls") {
            pricePerStudent = 7.20;
        } else {
            pricePerStudent = 9.50;
        }
    } else {
        if (typeOfGroup == "boys" || typeOfGroup == "girls") {
            pricePerStudent = 15;
        } else {
            pricePerStudent = 20;
        }
    }

    let endPrice = (sizeOfGroup * pricePerStudent) * daysHoliday;

    if (sizeOfGroup >= 50) {
        endPrice *= 0.50;
    } else if (sizeOfGroup >= 20 && sizeOfGroup < 50) {
        endPrice *= 0.85;
    } else if (sizeOfGroup >= 10 && sizeOfGroup < 20) {
        endPrice *= 0.95;
    }

    if (season == "Winter") {
        if (typeOfGroup == "girls") {
            sport = "Gymnastics"
        } else if (typeOfGroup == "boys") {
            sport = "Judo"
        } else {
            sport = "Ski"
        }
    } else if (season == "Spring") {
        if (typeOfGroup == "girls") {
            sport = "Athletics";
        } else if (typeOfGroup == "boys") {
            sport = "Tennis";
        } else {
            sport = "Cycling"
        }
    } else {
        if (typeOfGroup == "girls") {
            sport = "Volleyball";
        } else if (typeOfGroup == "boys") {
            sport = "Football"
        } else {
            sport = "Swimming"
        }
    }

    console.log(`${sport} ${endPrice.toFixed(2)} lv.`);

}
schoolCamp(["Winter", "mixed", "9", "15"]);