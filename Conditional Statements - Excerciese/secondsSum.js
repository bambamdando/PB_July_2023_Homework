function secondsSum(input) {

    let racerOne = Number(input[0]);
    let racerTwo = Number(input[1]);
    let racerThree = Number(input[2]);

    let totalTime = racerOne + racerTwo + racerThree;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }


}
secondsSum(["35", "45", "44"]);