// How do I run this script? 
// node Task2.js    

todoList = [
    "Apply to y/cs!",
    "Pick out my classes",
    "Have dinner with my suite"
];
 
/**
 * YOUR OBJECTIVE
 * Write a function that takes in an index of the todoList array 
 * and deletes the corresponding string (assume 0-indexing).
 * 
 * Only modify the file under the "// YOUR CODE HERE" comments.
 * 
 * Ex: 
 * todoList[0] = "Apply to y/cs!", and after deleteTodo(0) has been ran
 * the todoList array should look like this:
 * 
 * const todoList = [
    "Pick out my classes",
    "Have dinner with my suite"
];
 */
function deleteTodo(index) {
    console.log("Before: " + todoList)
    // YOUR CODE HERE
    if (index >= 0 && index < todoList.length) { //makes sure that the index is in the domain of todoList
        const firstHalf = todoList.splice(index, 1) //Goes to value at the index of the array, and removes 1 value
    }
    console.log("After:" + todoList)
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask2() {
    deleteTodo(0);
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask2();
}
