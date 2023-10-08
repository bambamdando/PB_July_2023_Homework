function walking(input) {

    let targetSteps = 10000;
    let index = 0;
    let stepsSum = 0;

    while (true) {
        let command = input[index];

        if (command === "Going home") {
            index++;
            let stepsToHome = Number(input[index]);
            stepsSum += stepsToHome;
            break;
        }

        let stepsPerDay = Number(command);
        stepsSum += stepsPerDay;

        if (stepsSum >= targetSteps) {
            break;
        }

        index++;
    }

    if (stepsSum >= targetSteps) {
        console.log("Goal reached! Good job!");
        console.log(`${stepsSum - targetSteps} steps over the goal!`);
    } else {
        console.log(`${targetSteps - stepsSum} more steps to reach goal.`);
    }
}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])