function christmasPreparation(input) {

    let rollsOfPaper = Number(input[0]);
    let rollsOfCloth = Number(input[1]);
    let litersOfGlue = Number(input[2]);
    let discount = Number(input[3]);

    let priceOfPaper = rollsOfPaper * 5.80;
    let priceOfCloth = rollsOfCloth * 7.20;
    let priceOfGlue = litersOfGlue * 1.20;

    let totalMaterialsPrice = priceOfPaper + priceOfCloth + priceOfGlue;
    let priceWithDiscount = (discount / 100) * totalMaterialsPrice;
    let res = totalMaterialsPrice - priceWithDiscount;

    console.log(res.toFixed(3))

}
christmasPreparation(["2", "3", "2.5", "25"]);