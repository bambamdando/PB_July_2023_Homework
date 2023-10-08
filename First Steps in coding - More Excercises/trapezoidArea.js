function trapezoidArea(input) {

    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let faceOfTrapezoid = (b1 + b2) * h / 2;

    console.log(faceOfTrapezoid.toFixed(2));


}
trapezoidArea(["8", "13", "7"])