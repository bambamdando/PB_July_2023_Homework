function footballLeague(input) {

    let capacity = Number(input[0]);
    let fans = Number(input[1]);

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    let currentSector = "";

    for (let i = 2; i < input.length; i++) {
        currentSector = input[i];
        if (currentSector == "A") {
            sectorA++;
        } else if (currentSector == "B") {
            sectorB++;
        } else if (currentSector == "V") {
            sectorV++;
        } else {
            sectorG++;
        }

    }

    console.log(((sectorA / fans) * 100).toFixed(2) + "%");
    console.log((((sectorB / fans) * 100).toFixed(2)) + "%");
    console.log((((sectorV / fans) * 100).toFixed(2)) + "%");
    console.log((((sectorG / fans) * 100).toFixed(2)) + "%");
    console.log((((fans / capacity) * 100).toFixed(2)) + "%");


}
footballLeague([76,
    10,
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"]);