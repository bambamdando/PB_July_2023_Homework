function timePlusMins(input) {
    let h = Number(input[0]);
    let m = Number(input[1]) + 15;

    if (m < 60) {
        if (m < 10) {
            console.log(`${h}:0${m}`);
        } else {
            console.log(`${h}:${m}`);
        }
    } else if (m >= 60) {
        h += 1;
        if (h === 24) h = 0;
        m = m % 60;
        if (m < 10) {
            console.log(`${h}:0${m}`)
        } else {
            console.log(`${h}:${m}`)
        }
    }
}
timePlusMins(["1", "46"]);