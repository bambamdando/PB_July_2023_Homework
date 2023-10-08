function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;

    let sumGrade = 0;
    let i = 1;

    let badGradeCounter = 0;
    let hasExcluded = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            badGradeCounter++;
            if (badGradeCounter === 2) {
                console.log(`${name} has been excluded at ${i} grade`);
                hasExcluded = true;
                break;
            }
            continue;
        }

        sumGrade += grade;
        i++;
    }

    if (!hasExcluded) {
        let avg = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }

}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);
