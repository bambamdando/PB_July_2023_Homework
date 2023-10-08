function aquarium(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let aquariumSpace = lenght * width * height;
    let sizeInLiters = aquariumSpace / 1000;
    let busySpace = procent / 100;

    let neededLiters = sizeInLiters * (1 - busySpace);

    console.log(neededLiters);

}
aquarium(["85 ", " 75 ", " 47 ", " 17 "]);