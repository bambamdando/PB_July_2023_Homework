function energyBooster(input) {

    let fruit = input[0];
    let size = input[1];
    let setSize = Number(input[2]);

    let pricePerQuantity = 0;
    let quantity = 0;

    if (fruit == "Watermelon") {
        if (size == "small") {
            quantity = 2;
            pricePerQuantity = 56;
        } else {
            quantity = 5;
            pricePerQuantity = 28.70
        }
    } else if (fruit == "Mango") {
        if (size == "small") {
            quantity = 2;
            pricePerQuantity = 36.66;
        } else {
            quantity = 5;
            pricePerQuantity = 19.60;
        }
    } else if (fruit == "Pineapple") {
        if (size == "small") {
            quantity = 2;
            pricePerQuantity = 42.10;
        } else {
            quantity = 5;
            pricePerQuantity = 24.80;
        }
    } else if (fruit == "Raspberry") {
        if (size == "small") {
            quantity = 2;
            pricePerQuantity = 20;
        } else {
            quantity = 5;
            pricePerQuantity = 15.20;
        }
    }

    let totalOrder = (quantity * pricePerQuantity) * setSize;

    if (totalOrder >= 400 && totalOrder <= 1000) {
        totalOrder *= 0.85;
    } else if (totalOrder > 1000) {
        totalOrder *= 0.50;
    }

    console.log(`${totalOrder.toFixed(2)} lv.`);

}
energyBooster(["Pineapple", "small", "1"]);