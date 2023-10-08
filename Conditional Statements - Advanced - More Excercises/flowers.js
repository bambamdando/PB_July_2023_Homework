function flowers(input) {

    let hrizantems = Number(input[0]);
    let roses = Number(input[1]);
    let tullips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let pricePerHrizantema = 0;
    let pricePerRose = 0;
    let pricePerTullip = 0;

    if (season == "Spring" || season == "Summer") {
        pricePerHrizantema = 2;
        pricePerRose = 4.10;
        pricePerTullip = 2.50;

    } else {
        pricePerHrizantema = 3.75;
        pricePerRose = 4.50;
        pricePerTullip = 4.15;
    }

    if (isHoliday == "Y") {
        pricePerHrizantema *= 1.15;
        pricePerRose *= 1.15;
        pricePerTullip *= 1.15;
    }

    let bouquet = (hrizantems * pricePerHrizantema) + (roses * pricePerRose) + (tullips * pricePerTullip);
    let totalFlowers = hrizantems + roses + tullips;

    if (tullips > 7 && season == "Spring") {
        bouquet *= 0.95;
    } else if (roses >= 10 && season == "Winter") {
        bouquet *= 0.90;
    }

    if (totalFlowers > 20 && (season == "Spring" || season == "Summer" || season == "Winter" || season == "Autumn")) {
        bouquet *= 0.80;
    }

    let bouquetPlusPackage = bouquet + 2;

    console.log(bouquetPlusPackage.toFixed(2));
}
flowers(["2", "4", "8", "Spring", "Y"])