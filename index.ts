#! /usr/bin/env node
import todoOperations from './todoOperation.js';
import welcomeAnimation from './sleep.js';


// Main function to run the program
async function main(){
    await welcomeAnimation();
    do{
        await todoOperations();
    }while(true);
}
main();