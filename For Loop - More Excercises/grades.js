function grades(input) {

    let students = Number(input[0])
    let weakGrade = 0;
    let averageGrade = 0;
    let goodGrade = 0;
    let excellentGrade = 0;
    let sumOfAverageGrades = 0;

    let index = 1;
    let currentGrade = Number(input[index])

    while (index <= students) {
        currentGrade = Number(input[index])
        if (currentGrade >= 2 && currentGrade < 3) {
            weakGrade++;
        } else if (currentGrade >= 3 && currentGrade < 4) {
            averageGrade++;
        } else if (currentGrade >= 4 && currentGrade < 5) {
            goodGrade++;
        } else {
            excellentGrade++;
        }
        sumOfAverageGrades += Number(input[index])
        index++;

    }


    console.log(`Top students: ${((excellentGrade / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((goodGrade / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((averageGrade / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((weakGrade / students) * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumOfAverageGrades / students).toFixed(2)}`);

}
grades([6,
    2,
    3,
    4,
    5,
    6,
    2.2])