function cinema(input) {

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let price = 0;

    if (type === "Premiere") {
        price = rows * columns * 12;
    } else if (type === "Normal") {
        price = rows * columns * 7.50;
    } else if (type === "Discount") {
        price = rows * columns * 5;
    }
    console.log(price.toFixed(2));

}
cinema(["Premiere", "10", "12"]);