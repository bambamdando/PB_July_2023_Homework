function excursionCalculator(input) {

    let people = Number(input[0]);
    let season = input[1];

    let price = 0;

    if (people <= 5) {
        if (season === "spring") {
            price = people * 50;
        } else if (season === "summer") {
            price = people * 48.50 * 0.85;
        } else if (season === "autumn") {
            price = people * 60;
        } else {
            price = people * 86 * 1.08;
        }
        console.log(`${price.toFixed(2)} leva.`)
    }
    if (people > 6) {
        if (season === "spring") {
            price = people * 48;
        } else if (season === "summer") {
            price = people * 45 * 0.85;
        } else if (season === "autumn") {
            price = people * 49.50;
        } else {
            price = people * 85 * 1.08;
        } console.log(`${price.toFixed(2)} leva.`)
    }



}
excursionCalculator(["5", "spring"]);