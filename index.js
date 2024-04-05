#!/usr/bin/evn node
import inquirer from "inquirer";
let todos = [];
let condtition = true;
while (condtition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos ?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more ?",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condtition = addTask.addmore;
    console.log(todos);
}
