#! /usr/bin/env node 

import inquirer from "inquirer";

const answar = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

// conditional Statment
if (answar.operator === "Addition") {
  console.log(answar.firstNumber + answar.secondNumber);
} else if (answar.operator === "Substraction") {
  console.log(answar.firstNumber - answar.secondNumber);
} else if (answar.operator === "Multiplication") {
  console.log(answar.firstNumber * answar.secondNumber);
} 
else if (answar.operator === "Division") {
  console.log(answar.firstNumber / answar.secondNumber);
} else {
    console.log("Please select valid operator")
}
