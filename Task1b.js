// How do I run this script? 
// node Task1b.js    

todoList = []; 
/**
 * YOUR OBJECTIVE: 
 * We do a lot in the addAndPrintTodos() funciton. It's also limited in
 * in what it can do because it takes no input.
 * Is there a way to seperate the concerns so that they could be tied to particular events
 * while also allowing us to add any todos that we want?
 *
 * Replace the "__" in each of the "__todo" function definitions to create more logical 
 * function names and define some logic to accomplish these tasks inspired by 
 * what you did in Part A. Call both function in mainTask1b().
 * 
 * In addition to updating function names, only modify the file under 
 * the "// YOUR CODE HERE" comments.
 */

function addtodo(todoString) {
    // YOUR CODE HERE
    // This function takes in a String 'todoString' and adds it to the todoList
    todoList.push(todoString);
}

function printtodo() {
    // YOUR CODE HERE
    //this function takes no input, and prints out the todolist statement
    console.log("TODOS: "); //Prints out Title: TODOS:
    for (let i=0; i < todoList.length; i++) { //for loop traversing todolist 
        console.log(todoList[i] + "\n"); //prints out todoList at index i of for loop, prints new line.
    }
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask1b() {
    // YOUR CODE HERE (simply call the functions you implemented above)
    addtodo("1. Apply to y/cs!");
    addtodo("2. Pick out my classes");
    addtodo("3. Have dinner with my suite");
    printtodo();
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask1b();
}