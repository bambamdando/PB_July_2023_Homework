function tradeCommissions(input) {

    let town = input[0];
    let salesVolume = Number(input[1]);
    let comission = 0;

    if (town === "Sofia") {
        if (salesVolume <= 500) {
            comission = salesVolume * 0.05;
        } else if (salesVolume > 500 && salesVolume <= 1000) {
            comission = salesVolume * 0.07;
        } else if (salesVolume > 1000 && salesVolume <= 10000) {
            comission = salesVolume * 0.08;
        } else {
            comission = salesVolume * 0.12;
        }
    } if (town === "Varna") {
        if (salesVolume <= 500) {
            comission = salesVolume * 0.045;
        } else if (salesVolume > 500 && salesVolume <= 1000) {
            comission = salesVolume * 0.075;
        } else if (salesVolume > 1000 && salesVolume <= 10000) {
            comission = salesVolume * 0.10;
        } else {
            comission = salesVolume * 0.13;
        }
    } if (town === "Plovdiv") {
        if (salesVolume <= 500) {
            comission = salesVolume * 0.055;
        } else if (salesVolume > 500 && salesVolume <= 1000) {
            comission = salesVolume * 0.08;
        } else if (salesVolume > 1000 && salesVolume <= 10000) {
            comission = salesVolume * 0.12;
        } else {
            comission = salesVolume * 0.145;
        }
    }

    if (town != "Sofia" && town != "Varna" && town != "Plovdiv") {
        console.log("error")

    } else if (salesVolume < 0) {
        console.log("error")
    } else {
        console.log(comission.toFixed(2));
    }

}
tradeCommissions(["Varna", "-50"])