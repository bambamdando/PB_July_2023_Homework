function vegetableMarket(input) {

    let priceForVegetables = Number(input[0]);
    let priceForFruits = Number(input[1]);
    let totalVegetablesInKg = Number(input[2]);
    let totalFruitsInKg = Number(input[3]);

    let euro = 1.94;

    let totalPriceVegetables = priceForVegetables * totalVegetablesInKg;
    let totalPriceFruits = priceForFruits * totalFruitsInKg;

    let grandTotal = (totalPriceVegetables + totalPriceFruits) / euro

    console.log(grandTotal.toFixed(2))


}
vegetableMarket(["0.194", "19.4", "10", "10"]);