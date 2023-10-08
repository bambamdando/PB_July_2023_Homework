function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let index = 3;
    let command = input[index];
    let currentBoxes = Number(input[index]);

    let freeSpace = width * length * height;
    let sum = 0;

    while (true) {
        if (command == "Done" && freeSpace > sum) {
            console.log(`${freeSpace - sum} Cubic meters left.`)
            return;
        } else if (freeSpace < sum) {
            console.log(`No more free space! You need ${Math.abs(sum - freeSpace)} Cubic meters more.`)
            return;
        }
        sum += currentBoxes;
        index++
        currentBoxes = Number(input[index]);
        command = input[index];
    }

}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])