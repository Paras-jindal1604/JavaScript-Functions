
//? Functions in JavaScript

// function is a block of code designed to perform a specific task.
// it is executed when something "invokes it(calls it)"
// function is defined with "function" keyword, followed by name and parenthesis "()" and then curly brackets"{}".

// The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)
// The code to be executed, by the function, is placed inside curly brackets: {}

// Function parameters are listed inside the parentheses () in the function definition.
// Function arguments are the values received by the function when it is invoked.


//? Function Invocation
// The code inside the function will execute when "something" invokes (calls) the function:

// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)


//? Function Return
// When JavaScript reaches a return statement, the function will stop executing.
// Functions often compute a return value. The return value is "returned" back to the "caller"


//? The () Operator - The () operator invokes (calls) the function

//? Local Variables - Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.



function greet(){                                   // function declaration
    console.log("BATMAN");                          // body of function
    console.log("The Dark Knight");
};

greet();
// function calling




function sum(num1, num2){                     // num1, num2 are function parameters
    console.log(num1 + num2);
}

sum(4,5);                                   // 4,5 are arguments passed during function call






function multiply(num1, num2){
    return num1 * num2;
}

console.log(multiply(4,5));                                 // 4*5  will be return to function call from its body.

// we can also store the value returned by a function in a variable.

let result = multiply(8,9);
console.log(result);



// NOTE - 

const fun = function(){
    console.log("hello");
}

console.log(fun);
// [Function: fun]


console.log(fun());
// hello                        // from function body statement
// undefined                   // because of no return statement


