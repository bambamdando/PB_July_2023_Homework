function hotelRoom(input) {

    let month = input[0]
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartamentPrice = 0;

    if (month === "May" || month === "October") {
        if (nights > 7 && nights <= 14) {
            studioPrice = (nights * 50) * 0.95;
            apartamentPrice = nights * 65;
        } else if (nights > 14) {
            studioPrice = (nights * 50) * 0.70;
            apartamentPrice = (nights * 65) * 0.90;
        } else {
            studioPrice = nights * 50;
            apartamentPrice = nights * 65;
        }
    } else if (month === "June" || month === "September") {
        if (nights > 14) {
            studioPrice = (nights * 75.20) * 0.80;
            apartamentPrice = (nights * 68.70) * 0.90;
        } else {
            studioPrice = nights * 75.20;
            apartamentPrice = nights * 68.7;
        }
    } else if (month === "July" || month === "August") {
        if (nights > 14) {
            studioPrice = nights * 76;
            apartamentPrice = (nights * 77) * 0.90;
        } else {
            studioPrice = nights * 76;
            apartamentPrice = nights * 77;
        }
    }


    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);