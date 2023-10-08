function matchTickets(input) {

    let budget = Number(input[0]);
    let ticket = input[1];
    let peopleInGroup = Number(input[2]);

    let ticketPrice = 0;

    if (ticket === "VIP") {
        ticketPrice = 499.99;
    } else {
        ticketPrice = 249.99;
    }

    let transportPrice = 0;

    if (peopleInGroup >= 1 && peopleInGroup <= 4) {
        transportPrice = budget * 0.75;
    } else if (peopleInGroup >= 5 && peopleInGroup <= 9) {
        transportPrice = budget * 0.60;
    } else if (peopleInGroup >= 10 && peopleInGroup <= 24) {
        transportPrice = budget * 0.50;
    } else if (peopleInGroup >= 25 && peopleInGroup <= 49) {
        transportPrice = budget * 0.40;
    } else {
        transportPrice = budget * 0.25;
    }

    let allCosts = (peopleInGroup * ticketPrice) + transportPrice;

    if (allCosts <= budget) {
        console.log(`Yes! You have ${(budget - allCosts).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(allCosts - budget).toFixed(2)} leva.`)
    }

}
matchTickets(["30000", "VIP", "49"]);