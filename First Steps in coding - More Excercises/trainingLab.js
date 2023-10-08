function trainingLab(input) {

    let hOfRoom = Number(input[0]);
    let wOfRoom = Number(input[1]);

    let hOfAPiece = 70;
    let wOfAPiece = 120;
    let hOfCorridor = 100;

    let wRoomWithoutCorridor = (wOfRoom * 100) - hOfCorridor;
    let wRoomPieces = Math.floor(wRoomWithoutCorridor / hOfAPiece);
    let hRoomPieces = Math.floor((hOfRoom * 100) / wOfAPiece);

    console.log((wRoomPieces * hRoomPieces) - 3);
}
trainingLab(["15", "8.9"]);