function hospital(input) {

    let period = Number(input[0]);

    let doctors = 7
    let treated = 0;
    let untreated = 0;

    for (let index = 1; index <= period; index++) {
        let patientsCurrentDay = Number(input[index]);
        if (index % 3 === 0 && untreated > treated) {
            doctors++
        }

        if (doctors >= patientsCurrentDay) {
            treated += patientsCurrentDay;
        } else if (doctors < patientsCurrentDay) {
            treated += doctors
            untreated += patientsCurrentDay - doctors
        }


    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);

}
hospital(["4", "7", "27", "9", "1",]);