function sleepyTomCat(input) {

    let daysOff = Number(input[0]);
    let norm = 30000;
    let year = 365;
    let minutesForGameInWorkDay = 63;
    let minutesForGameInOffDay = 127;

    let daysOffPlayTime = daysOff * minutesForGameInOffDay;
    let workDaysPlayTime = (year - daysOff) * minutesForGameInWorkDay;
    let totalPlayTime = daysOffPlayTime + workDaysPlayTime;

    if (norm >= totalPlayTime) {
        console.log("Tom sleeps well")
        console.log(`${Math.floor((norm - totalPlayTime) / 60)} hours and ${(norm - totalPlayTime) % 60} minutes less for play`)

    } else {
        console.log("Tom will run away");
        console.log(`${Math.floor((totalPlayTime - norm) / 60)} hours and ${(totalPlayTime - norm) % 60} minutes more for play`)
    }

}
sleepyTomCat(["20"]);