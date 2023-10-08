function changeBureau(input) {

    let btc = Number(input[0]);
    let Yuans = Number(input[1]);
    let comission = Number(input[2]);

    let btcToBgn = btc * 1168;
    let YuansToUsd = Yuans * 0.15;
    let usdToBgn = YuansToUsd * 1.76;

    let totalSumBgn = btcToBgn + usdToBgn;

    let eur = totalSumBgn / 1.95;
    let comissionSum = eur * comission / 100;
    let grandSum = eur - comissionSum;

    console.log(grandSum.toFixed(2));

}
changeBureau(["20", "5678", "2.4"])

