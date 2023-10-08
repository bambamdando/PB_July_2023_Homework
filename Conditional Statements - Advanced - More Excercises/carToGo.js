function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let classOfCar = "";
    let type = "";
    let priceForCar = 0;


    if (budget <= 100) {
        classOfCar = "Economy class";

        if (season == "Summer") {
            type = "Cabrio";
            priceForCar = budget * 0.35;
        } else {
            type = "Jeep";
            priceForCar = budget * 0.65;
        }
    } else if (budget > 100 && budget <= 500) {
        classOfCar = "Compact class";

        if (season == "Summer") {
            type = "Cabrio";
            priceForCar = budget * 0.45;
        } else {
            type = "Jeep";
            priceForCar = budget * 0.80;
        }
    } else {
        classOfCar = "Luxury class"
        type = "Jeep";
        priceForCar = budget * 0.90;
    }

    console.log(classOfCar);
    console.log(`${type} - ${priceForCar.toFixed(2)}`)

}
carToGo(["450", "Summer"]);