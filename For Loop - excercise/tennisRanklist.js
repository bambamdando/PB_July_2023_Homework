function tennisRanklist(input) {

    let tourneysParticipated = Number(input[0]);
    let startingPoints = Number(input[1]);

    let winpoints = 0;
    let wins = 0;

    for (let index = 2; index < input.length; index++) {

        let currentStage = input[index];

        switch (currentStage) {
            case "W": winpoints += 2000;
                wins++;
                break;
            case "F": winpoints += 1200; break;
            case "SF": winpoints += 720; break;
        }
    }

    let averagePoints = winpoints / tourneysParticipated;
    console.log(`Final points: ${startingPoints + winpoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${(wins / tourneysParticipated * 100).toFixed(2)}%`)


}
tennisRanklist(["5",

    "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"])