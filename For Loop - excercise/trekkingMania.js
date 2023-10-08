function trekkingMania(input) {

    let groups = Number(input[0]);

    let musala = 0;
    let montblanc = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (index = 1; index <= groups; index++) {

        let currentGroup = Number(input[index]);

        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (currentGroup <= 12) {
            montblanc += currentGroup;
        } else if (currentGroup <= 25) {
            kilimandjaro += currentGroup;
        } else if (currentGroup <= 40) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }
    }

    let total = musala + montblanc + kilimandjaro + k2 + everest;

    console.log(`${(musala / total * 100).toFixed(2)}%`);
    console.log(`${(montblanc / total * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / total * 100).toFixed(2)}%`);
    console.log(`${(k2 / total * 100).toFixed(2)}%`);
    console.log(`${(everest / total * 100).toFixed(2)}%`);


}
trekkingMania(["10",

    "10",

    "5",

    "1",

    "100",

    "12",
    "26", "17", "37", "40", "78"])