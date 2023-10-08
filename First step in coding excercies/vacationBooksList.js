function vacationBookList(input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let neededTime = pages / pagesPerHour;
    let hoursNeeded = neededTime / days;

    console.log(hoursNeeded);


}
vacationBookList(["212 ", "20 ", "2 "])