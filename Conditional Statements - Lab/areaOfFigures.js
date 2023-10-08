function areaOfFigures(input) {

    let type = (input[0]);
    let result = 0;

    if (type === "square") {
        let a = Number(input[1]);
        result = a * a;

    } else if (type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b;

    } else if (type === "circle") {
        let r = Number(input[1]);
        result = Math.PI * Math.pow(r, 2);

    } else {
        (type === "triangle")
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b / 2;
    }
    console.log(result.toFixed(3));

}
//areaOfFigures(["square", "5"]);
//areaOfFigures(["rectangle", "7", "2.5"])
//areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"])