function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearlyInterestRate = Number(input[2]);

    let rate = depositSum * 0.057;
    let ratePerMonth = rate / 12;

    let finalSum = depositSum + depositTerm * ((depositSum * yearlyInterestRate / 100) / 12)

    console.log(finalSum);

}
depositCalculator(["200 ", "3 ", "5.7 "])