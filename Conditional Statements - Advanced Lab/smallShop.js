function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee": price = quantity * 0.50; break;
                case "water": price = quantity * 0.80; break;
                case "beer": price = quantity * 1.20; break;
                case "sweets": price = quantity * 1.45; break;
                default: price = quantity * 1.60; break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee": price = quantity * 0.40; break;
                case "water": price = quantity * 0.70; break;
                case "beer": price = quantity * 1.15; break;
                case "sweets": price = quantity * 1.30; break;
                default: price = quantity * 1.50; break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee": price = quantity * 0.45; break;
                case "water": price = quantity * 0.70; break;
                case "beer": price = quantity * 1.10; break;
                case "sweets": price = quantity * 1.35; break;
                default: price = quantity * 1.55; break;
            }
            break;
    }

    /* if (town === "Sofia") {
         if (product === "coffee") {
             price = quantity * 0.50;
         } else if (product === "water") {
             price = quantity * 0.80;
         } else if (product === "beer") {
             price = quantity * 1.20;
         } else if (product === "sweets") {
             price = quantity * 1.45;
         } else {
             price = quantity * 1.60;
         }
     } else if (town === "Plovdiv") {
         if (product === "coffee") {
             price = quantity * 0.40;
         } else if (product === "water") {
             price = quantity * 0.70;
         } else if (product === "beer") {
             price = quantity * 1.15;
         } else if (product === "sweets") {
             price = quantity * 1.30;
         } else {
             price = quantity * 1.50;
         }
     } else {
         if (product === "coffee") {
             price = quantity * 0.45;
         } else if (product === "water") {
             price = quantity * 0.70;
         } else if (product === "beer") {
             price = quantity * 1.10;
         } else if (product === "sweets") {
             price = quantity * 1.35;
         } else {
             price = quantity * 1.55;
         }
 
     }
 */
    console.log(price);
}
smallShop(["beer", "Sofia", "2"]);