function bikeRace(input) {

    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trackType = input[2];

    let tax = 0;

    if (trackType === "trail") {
        tax = (juniors * 5.50) + (seniors * 7);
    } else if (trackType === "cross-country") {
        tax = (juniors * 8) + (seniors * 9.50);
    } else if (trackType === "downhill") {
        tax = (juniors * 12.25) + (seniors * 13.75);
    } else if (trackType === "road") {
        tax = (juniors * 20) + (seniors * 21.50);
    }

    if (trackType === "cross-country" && juniors + seniors >= 50) {
        tax *= 0.75;
    }

    let totalRaised = tax * 0.95;

    console.log(totalRaised.toFixed(2))

}
bikeRace(["10", "20", "trail"]);