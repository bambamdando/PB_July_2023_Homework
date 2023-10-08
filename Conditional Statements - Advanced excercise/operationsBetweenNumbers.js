function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];

    let res = 0;

    if (op === "+" || op === "-" || op === "*") {
        if (op === "+") {
            res = n1 + n2;
        } else if (op === "-") {
            res = n1 - n2;
        } else {
            res = n1 * n2;
        }
        if (res % 2 === 0) {
            console.log(`${n1} ${op} ${n2} = ${res} - even`);
        } else {
            console.log(`${n1} ${op} ${n2} = ${res} - odd`)
        }
    } else if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (op === "/") {
        res = n1 / n2;
        console.log(`${n1} / ${n2} = ${res.toFixed(2)}`);
    } else {
        res = n1 % n2;
        console.log(`${n1} % ${n2} = ${res}`);
    }
}
operationsBetweenNumbers(["10", "12", "+"]);