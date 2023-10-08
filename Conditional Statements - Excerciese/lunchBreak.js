function lunchBreak(input) {

    let movie = input[0];
    let movieLenght = Number(input[1]);
    let restLenght = Number(input[2]);

    let timeForLunch = restLenght / 8;
    let timeForRest = restLenght / 4;
    let remainingTime = restLenght - timeForLunch - timeForRest;

    if (remainingTime >= movieLenght) {
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(remainingTime - movieLenght)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(movieLenght - remainingTime)} more minutes.`)
    }

}
lunchBreak(["Game of Thrones", "60", "96"]);