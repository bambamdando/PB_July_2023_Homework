function priceOfDelivery(input) {

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegyMenus = Number(input[2]);

    let chickenMenusForAll = chickenMenus * 10.35;
    let fishMenusForAll = fishMenus * 12.40;
    let vegyMenusForAll = vegyMenus * 8.15;

    let priceForAllMenus = chickenMenusForAll + fishMenusForAll + vegyMenusForAll;
    let desertPrice = priceForAllMenus * 0.200;
    let delivery = 2.50;

    let totalSum = priceForAllMenus + desertPrice + delivery;

    console.log(totalSum);

}
priceOfDelivery([" 2 ", " 4 ", " 3 "])