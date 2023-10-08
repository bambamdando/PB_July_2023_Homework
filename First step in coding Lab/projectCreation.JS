function project(input) {

    let name = (input[0]);
    let projectCount = Number(input[1]);
    let neededHours = projectCount * 3;

    console.log(`The architect ${name} will need ${neededHours} hours to complete ${projectCount} project/s.`);

}
project(["George", "4 "]);