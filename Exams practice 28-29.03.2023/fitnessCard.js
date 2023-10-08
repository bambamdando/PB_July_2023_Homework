function fitnessCard(input) {

    let budget = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let price = 0;

    switch (sex) {
        case "m":
            if (sport == "Gym") {
                price = 42;
            } else if (sport == "Boxing") {
                price = 41;
            } else if (sport == "Yoga") {
                price = 45;
            } else if (sport == "Zumba") {
                price = 34;
            } else if (sport == "Dances") {
                price = 51;
            } else {
                price = 39;
            }
            if (age <= 19) {
                price *= 0.80;
            }
            break;
        case "f":
            if (sport == "Gym") {
                price = 35;
            } else if (sport == "Boxing") {
                price = 37;
            } else if (sport == "Yoga") {
                price = 42;
            } else if (sport == "Zumba") {
                price = 31;
            } else if (sport == "Dances") {
                price = 53;
            } else {
                price = 37;
            }
            if (age <= 19) {
                price *= 0.80;
            }
            break;
    }

    let diff = price - budget;

    if (budget > price) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }
}
fitnessCard(["10", "m", "50", "Pilates"]);