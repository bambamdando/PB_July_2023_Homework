function sumAndProduct(n_number) {
    let number_reach = false;
    let count = 0;

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let num_sum = a + b + c + d;
                    let num_mult = a * b * c * d;

                    if (num_sum === num_mult && n_number % 10 === 5) {
                        count++;
                        console.log(`${a}${b}${c}${d}`);
                        number_reach = true;
                        break;
                    } else if (Math.floor(num_mult / num_sum) === 3 && n_number % 3 === 0) {
                        count++;
                        console.log(`${d}${c}${b}${a}`);
                        number_reach = true;
                        break;
                    }
                }
                if (number_reach) {
                    break;
                }
            }
            if (number_reach) {
                break;
            }
        }
        if (number_reach) {
            break;
        }
    }

    if (count === 0) {
        console.log("Nothing found");
    }
}
sumAndProduct(123);