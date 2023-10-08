function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let type = "";
    let destination = "";

    if (season === "summer") {
        type = "Camp"
    } else {
        type = "Hotel"
    }

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.30;
        } else {
            price = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.40;
        } else {
            price = budget * 0.80;
        }
    } else {
        destination = "Europe";
        type = "Hotel";
        price = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);

}
journey(["50", "summer"]);