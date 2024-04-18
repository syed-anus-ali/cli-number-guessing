#! /usr/bin/env node

import inquirer from "inquirer";

//1) computer generate a random number - doneeee

//2) user input for guessing - doneeee

//3)compare user input with computer generated number and show result - doneeee

const ramdomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answer.userguessednumber === ramdomNumber) {
    console.log("Congratulations! you guessed a right number");
}
else {
    console.log("Oopps! you guessed a wrong number");
}