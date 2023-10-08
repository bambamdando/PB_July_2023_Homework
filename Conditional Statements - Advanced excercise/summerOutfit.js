function summerOutfit(input) {

    let degrees = Number(input[0]);
    let periodOfTheDay = input[1];

    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {
        if (periodOfTheDay === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (periodOfTheDay === "Afternoon" || periodOfTheDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } if (degrees > 18 && degrees <= 24) {
        if (periodOfTheDay === "Morning" || periodOfTheDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (periodOfTheDay === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } if (degrees >= 25) {
        if (periodOfTheDay === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (periodOfTheDay === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (periodOfTheDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }

    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16", "Morning"]);