#!  /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generates a number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a number between 1 to 5 =",
    },
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("CONGRATULATION YOUR ARE RIGHT");
}
else if (answer.userGussedNumber === 1) {
    console.log("so close but wrong answer");
}
else if (answer.userGussedNumber === 2) {
    console.log("so close but wrong answer");
}
else if (answer.userGussedNumber === 3) {
    console.log("so close but wrong answer");
}
else if (answer.userGussedNumber === 4) {
    console.log("so close but wrong answer");
}
else if (answer.userGussedNumber === 5) {
    console.log("so close but wrong answer");
}
else {
    console.log("wrong answer");
}
