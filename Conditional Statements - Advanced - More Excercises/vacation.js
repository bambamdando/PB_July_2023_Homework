function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let location = "";
    let placeToStay = "";

    if (budget <= 1000) {
        placeToStay = "Camp";
        if (season == "Summer") {
            location = "Alaska";
            price = budget * 0.65;
        } else {
            location = "Morocco";
            price = budget * 0.45;
        }
    } else if (budget > 1000 && budget <= 3000) {
        placeToStay = "Hut"
        if (season == "Summer") {
            location = "Alaska"
            price = budget * 0.80;
        } else {
            location = "Morocco";
            price = budget * 0.60;
        }
    } else {
        placeToStay = "Hotel";
        if (season == "Summer") {
            location = "Alaska"
            price = budget * 0.90;
        } else {
            location = "Morocco";
            price = budget * 0.90;
        }
    }

    console.log(`${location} - ${placeToStay} - ${price.toFixed(2)}`);

}
vacation(["2543.99", "Winter"]);