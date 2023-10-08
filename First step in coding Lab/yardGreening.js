function yard(input) {

    let cbm2 = Number(input[0]);

    let priceWholeYard = cbm2 * 7.61;
    let discount = 0.18;

    let discountDeduction = priceWholeYard * discount;

    let finalSum = priceWholeYard - discountDeduction;

    console.log
        (`The final price is: ${finalSum} lv. 
        The discount is: ${discountDeduction} lv.`);

}
yard(["550"]);


//The final price is: 3432.11 lv. The discount is: 753.39 lv.