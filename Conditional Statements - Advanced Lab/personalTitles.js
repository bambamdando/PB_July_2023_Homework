function personalTitles(input) {

    let age = Number(input[0]);
    let gender = input[1];

    if (age < 16) {
        if (gender === "f") {
            console.log("Miss");
        } else {
            console.log("Master");
        }
    } else {
        if (gender === "m") {
            console.log("Mr.");
        } else {
            console.log("Ms.");
        }

    }


}
personalTitles(["12", "f"]);