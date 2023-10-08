function workout(input) {

    const n = parseInt(input.shift());
    let firstDay = parseFloat(input.shift());

    let allKg = firstDay;
    for (let i = 0; i < n; i++) {
        let nextDay = parseFloat(input.shift());
        firstDay = firstDay + firstDay * (nextDay / 100);
        allKg += firstDay;
    }

    if (allKg >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(allKg - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - allKg)} more kilometers`);
    }
}

workout(["4", "100", "30", "50", "60", "80",]);