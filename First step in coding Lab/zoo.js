function zoo(input) {

    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let dogFoodPrice = dogFood * 2.50;
    let catFoodPrice = catFood * 4;

    let finalSum = dogFoodPrice + catFoodPrice;

    console.log(`${finalSum}  lv`);

}
zoo(["5", "4"]);