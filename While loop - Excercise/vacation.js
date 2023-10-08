function vacation(input) {

    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let consecutiveSpendDays = 0;
    let index = 2;
    let daysPassed = 0;

    while (true) {
        let activity = input[index];

        if (activity == "spend") {
            let sum = Number(input[index + 1]);
            availableMoney -= sum;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            consecutiveSpendDays++;
        } else {
            let sum = Number(input[index + 1]);
            availableMoney += sum;
            consecutiveSpendDays = 0;
        }

        index += 2;
        daysPassed++;

        if (consecutiveSpendDays >= 5) {
            console.log("You can't save the money.");
            console.log(`${daysPassed}`);
            return;
        } if (availableMoney >= neededMoney) {
            console.log(`You saved the money for ${daysPassed} days.`);
            return;
        } if (index >= input.length) {
            console.log(`You saved the money for ${daysPassed} days.`);
            return;
        }
    }

}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);