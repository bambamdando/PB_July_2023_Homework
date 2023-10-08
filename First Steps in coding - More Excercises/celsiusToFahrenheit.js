function celsiusToFahrenheit(input) {

    let celsius = Number(input[0]);

    let convertToFahrenheit = celsius * 1.8 + 32;

    console.log(convertToFahrenheit.toFixed(2));


}
celsiusToFahrenheit(["25"]);

// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.