function characterSequence(input) {

    let text = input[0];

    for (i = 0; i < text.length; i++) {
        let letter = text[i]; // let letter = (text.charAt(1)); alternative for work with charAt method
        console.log(letter);
    }

}
characterSequence(["softuni"]);