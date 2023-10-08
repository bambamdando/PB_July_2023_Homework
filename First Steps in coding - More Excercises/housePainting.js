function housePainting(input) {

    let heightOfHouse = Number(input[0]);
    let lenghtOfSideWall = Number(input[1]);
    let heightOfTriangleWallOnTheRoof = Number(input[2]);

    let sideArea = heightOfHouse * lenghtOfSideWall;
    let windowArea = 1.5 * 1.5;
    let twoSidesTotalArea = 2 * sideArea - 2 * windowArea;
    let backWall = heightOfHouse * heightOfHouse
    let entrance = 1.2 * 2;
    let totalFrontAndBackArea = 2 * backWall - entrance;

    let grandAreaWalls = twoSidesTotalArea + totalFrontAndBackArea;
    let greenPaintNeeded = grandAreaWalls / 3.4;



    let roofRectangles = 2 * (heightOfHouse * lenghtOfSideWall)
    let roofTriangles = 2 * (heightOfHouse * heightOfTriangleWallOnTheRoof / 2)

    let grandAreaRoof = roofRectangles + roofTriangles;
    let redPaintNeeded = grandAreaRoof / 4.3;

    console.log(greenPaintNeeded.toFixed(2));
    console.log(redPaintNeeded.toFixed(2));

}
housePainting(["6", "10", "5.2"]);