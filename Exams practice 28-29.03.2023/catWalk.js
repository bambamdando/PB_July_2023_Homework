function catWalk(input) {

    let minutesPerWalk = Number(input[0]);
    let numbersOfWalk = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let caloriesBurntPerMinute = 5;

    let totalMinutesForWalkPerDay = numbersOfWalk * minutesPerWalk;
    let caloriesBurnedPerDay = totalMinutesForWalkPerDay * caloriesBurntPerMinute;
    let halfAcceptedByCatCalories = caloriesPerDay * 0.50;

    if (caloriesBurnedPerDay >= halfAcceptedByCatCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurnedPerDay}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurnedPerDay}.`);
    }

}
catWalk(["15", "2", "500"])