function truckDriver(input) {

    let season = input[0];
    let kmsPerMonth = Number(input[1]);

    let pricePerKm = 0;

    if (kmsPerMonth <= 5000) {
        if (season == "Spring" || season == "Autumn") {
            pricePerKm = 0.75;
        } else if (season == "Summer") {
            pricePerKm = 0.90;
        } else {
            pricePerKm = 1.05;
        }
    } else if (kmsPerMonth > 5000 && kmsPerMonth <= 10000) {
        if (season == "Spring" || season == "Autumn") {
            pricePerKm = 0.95;
        } else if (season == "Summer") {
            pricePerKm = 1.10;
        } else {
            pricePerKm = 1.25;
        }
    } else if (kmsPerMonth > 10000 && kmsPerMonth <= 20000) {
        pricePerKm = 1.45;
    }

    let moneyWithTaxes = (pricePerKm * kmsPerMonth) * 4 * 0.90;
    console.log(moneyWithTaxes.toFixed(2));
}

truckDriver(["Summer", "3455"]);