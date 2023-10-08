function cake(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);

    let cakeSize = width * length;

    let index = 2;
    let currentPieces = Number(input[index]);

    while (true) {

        cakeSize -= currentPieces;

        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            return;
        }

        index++;

        if (input[index] === "STOP") {
            console.log(`${cakeSize} pieces are left.`);
            return;
        }

        currentPieces = Number(input[index]);
    }
}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP",]);