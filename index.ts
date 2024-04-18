#! /usr/bin/env node

import inquirer from "inquirer"

const Q1 :{sentence:string} = await inquirer.prompt ({
    type: "input",
    name: "sentence",
    message: "Enter a sentence"
})


const words = Q1.sentence.trim().split("  ");

console.log(words);

console.log("There are" , words.length , "words in you sentence.");
