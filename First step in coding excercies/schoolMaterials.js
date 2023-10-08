function SchoolMaterials(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discount = Number(input[3]);


    let pricePens = pens * 5.80;
    let priceMarkers = markers * 7.20;
    let cleanerPrice = cleaner * 1.20;


    let allMaterialsPrice = pricePens + priceMarkers + cleanerPrice
    let priceWithDiscount = allMaterialsPrice - (allMaterialsPrice * discount / 100);

    console.log(priceWithDiscount);


    //Цена на пакетите химикали => 2 * 5.80 = 11.60 лв. Цена на пакетите маркери => 3 * 7.20 = 21.60 лв. Цена на препарата => 4 * 1.20 = 4.80 лв. Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв. 25% = 0.25 Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв.

}
SchoolMaterials(["2 ", "3 ", "4 ", "25 "])