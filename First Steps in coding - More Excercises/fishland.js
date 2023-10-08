function fishland(input) {

    let MakrelePricePerKg = Number(input[0]);
    let streuenPricePerKg = Number(input[1]);
    let bonitoKgs = Number(input[2]);
    let safridKgs = Number(input[3]);
    let seashellsKgs = Number(input[4]);

    let bonitoPricePerKg = MakrelePricePerKg + MakrelePricePerKg * 0.60;
    let grandPriceForBonito = bonitoPricePerKg * bonitoKgs;

    let safridPricePerKg = streuenPricePerKg + streuenPricePerKg * 0.80;
    let grandPriceForSafrid = safridPricePerKg * safridKgs;

    let seashellsPricePerKg = seashellsKgs * 7.50;

    let totalSum = grandPriceForBonito + grandPriceForSafrid + seashellsPricePerKg;

    console.log(totalSum.toFixed(2))


}
fishland(["6.90", "4.20", "1.5", "2.5", "1"]);