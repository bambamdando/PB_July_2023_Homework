function onTimeForExam(input) {

    let hourOfExam = Number(input[0]);
    let minutesOfExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = hourOfExam * 60 + minutesOfExam;
    let timeArrive = hourArrive * 60 + minArrive;

    let diff = Math.abs(timeExam - timeArrive);
    let h = Math.floor(diff / 60);
    let min = diff % 60;

    if (timeArrive < timeExam && (diff > 30)) {
        console.log("Early");
        if (h > 0) {
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
    } else if (timeArrive <= timeExam) {
        console.log("On Time");
        if (min > 0) {
            console.log(`${min} minutes before the start`);
        }

    } else {
        console.log("Late");
        if (h > 0) {
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${min} minutes after the start`);
        }
    }

}
onTimeForExam(["9", "30", "9", "50"]);