function equipment(input) {

    let yearTax = Number(input[0]);

    let priceShoes = yearTax * 0.60;
    let priceJersey = priceShoes * 0.80;
    let ball = priceJersey / 4;
    let accesoaries = ball / 5;

    let totalSum = yearTax + priceShoes + priceJersey + ball + accesoaries;

    console.log(totalSum);

}
equipment(["365"])