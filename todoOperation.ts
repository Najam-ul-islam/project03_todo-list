import chalk from 'chalk';
import inquirer from 'inquirer';

// Todo tasks array
let todo_tasks: string[] = [];
// Todo operations function
async function todoOperations(){
    // console.log(chalk.green('Todo operations'));
    let operations = await inquirer.prompt([
        {
            type: 'list', 
            name: 'operation', 
            message: 'Select your TODO operation:', 
            choices: ['Add Task', 'Delete Task', 'Edit Task','Show Todo-List', 'Exit']
        }]);
    switch(operations.operation){
        case 'Add Task':
            console.log('Add');
            let todo_input =  await inquirer.prompt([
                {type: 'input', name: 'todo', message: 'Enter your todo task'}]);
            todo_tasks.push(todo_input.todo);
            console.log(todo_tasks);
            break;
        case 'Delete Task':
            let index_of_task = await inquirer.prompt([{
                type: 'input', name: 'index', message: 'Enter tasks index: '
            }]);
            // get the index of an element
            let index = todo_tasks.indexOf(index_of_task.index);
            todo_tasks.splice(index,1);
            console.log(todo_tasks);
            break;
        case 'Edit Task':
            let get_index = await inquirer.prompt([
                {type: 'input', name: 'index', message: 'Enter Tasks Number: '}]);
            let update_task = await inquirer.prompt([
                {type: 'input', name: 'task', message: 'Edit Task: '}]);
            todo_tasks[get_index.index] = update_task.task;
            if(todo_tasks[get_index.index] == update_task.task){
                todo_tasks.forEach((task, index) => {
                    console.log(chalk.blue(`[${index}]`)+" - "+chalk.blue(`${task}`));
                });
                console.log(chalk.green('Task updated successfully!!!'));
            }else{
                console.log(chalk.red('Task not updated'));
            }
            break;
        case 'Show Todo-List':
            if(todo_tasks.length == 0){
                console.log(chalk.red('No tasks to show'));
            }else{
                console.clear();
                console.log(chalk.redBright('+--------------------------------------------+'));
                console.log(chalk.blueBright('|\t          Todo Tasks                 |'));
                console.log(chalk.redBright('+--------------------------------------------+'));
                console.log(`${chalk.blueBright('Total tasks:')} ${chalk.blueBright(todo_tasks.length)}`);
                console.log(chalk.redBright('+--------------------------------------------+'));
                todo_tasks.forEach((task, index) => {
                    console.log(chalk.yellowBright(`[${index}]`)+" - "+chalk.green(`${task}`));
                });
                console.log(chalk.redBright('+--------------------------------------------+'));
                console.log("\n");
            }
            break;
        case 'Exit':
            console.log(chalk.red('Exiting...'));
            process.exit(0);
    }

}

export default todoOperations;