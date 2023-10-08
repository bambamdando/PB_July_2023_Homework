function oscars(input) {


    let actor = input[0];
    let startingPoints = Number(input[1]);
    let numberOfJudges = Number(input[2]);

    for (let index = 3; index < input.length; index++) {

        let judgeName = input[index];
        index++
        let judgePoints = Number(input[index]);
        let currentJudgePoints = judgeName.length * judgePoints / 2;

        startingPoints += currentJudgePoints;

        if (startingPoints > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
            break;
        }
    }
    if (startingPoints <= 1250.5) {
        console.log(`Sorry, ${actor} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);