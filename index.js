#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter firstnumber ", type: "number", name: "firstnumber" },
    { message: "Enter secoundnumber", type: "number", name: "secoundnumber" },
    {
        message: "Select one of the operater to perform the operation thanks ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Multiplication", "Subtraction", "Divison"],
    },
]);
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstnumber + asnwer.secoundnumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstnumber * asnwer.secoundnumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.firstnumber - asnwer.secoundnumber);
}
else if (asnwer.operator === "Divison") {
    console.log(asnwer.firstnumber / asnwer.secoundnumber);
}
else
    "please select correct operator";
