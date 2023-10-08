function repainting(input) {

    let nylonNeededCbm2 = Number(input[0]);
    let paintNeededLiters = Number(input[1]);
    let thinnerNeededLiters = Number(input[2]);
    let hoursForWork = Number(input[3]);

    let nylonSum = (nylonNeededCbm2 + 2) * 1.50;
    let paintSum = (paintNeededLiters * 1.10) * 14.50;
    let thinnerSum = (thinnerNeededLiters * 5);
    let bagsPrice = 0.40;

    let priceForGoods = nylonSum + paintSum + thinnerSum + bagsPrice;
    let priceForWork = (priceForGoods * 0.30) * hoursForWork;

    let grandTotal = priceForGoods + priceForWork;

    console.log(grandTotal);



}
repainting(["10 ", "11 ", "4 ", "8 "])