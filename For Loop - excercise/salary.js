function salary(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);


    for (let index = 2; index <= input.length; index++) {

        let currentWebsite = input[index];

        if (currentWebsite === "Facebook") {
            salary -= 150;
        } else if (currentWebsite === "Instagram") {
            salary -= 100;
        } else if (currentWebsite === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;

        }
    }
    if (salary > 0) {
        console.log(salary)
    }
}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);