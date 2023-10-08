function mountainRun(input) {

    let recordInSecs = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let timeToReachPeak = distanceInMeters * timeForOneMeter;
    let delay = Math.floor(distanceInMeters / 50) * 30;

    let grandTime = timeToReachPeak + delay;

    if (grandTime < recordInSecs) {
        console.log(`Yes! The new record is ${grandTime.toFixed(2)} seconds.`);

    } else {
        console.log(`No! He was ${(grandTime - recordInSecs).toFixed(2)} seconds slower.`);
    }

}
mountainRun(["5554.36", "1340", "3.23"]);