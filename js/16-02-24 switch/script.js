// // var name = ["Fahad", "Saad", "Ahmad", "Ali"];
// var table = +prompt("Enter table Number", 2);

// for (var count = 1; count < 11; count++) {
//     document.write(table + " X " + count + " = "  table*count + <br/>)
// }


// let winninNumber = 19;
// let userGuess = +prompt("Guess a number");
// if (userGuess ===winninNumber){
//     console.log("Your guess is right");
// }else{
//     if(userGuess > winninNumber)
//     {console.log("Your guess is high");
// }
// else
// {console.log("Your guess low")};
// }




// let temp = +prompt('enter temp');

// if(temp < 0){
//     console.log("Freezing weather");
// }else if(temp < 10){
//     console.log("Very cold weather");
// }
// else if(temp < 20){
//     console.log("Cold weather");
// }
// else if(temp < 30){
//     console.log("Normal in temp");
// }
// else if(temp < 40){
//     console.log("Its Hot");
// }else{
//     console.log("Its very hot");
// }




let day = +prompt("Enter day");
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:-
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");

}