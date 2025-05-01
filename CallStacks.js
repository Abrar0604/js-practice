/*
    Execution Context
    Java script is single threaded

    >JS Execution context<
    1. Global Execution context
    2. Function Execution context
    3. Eval Execution context( for databases )

    > Phases in JS execution <
    1. Global execution (defines this variable)
    2. Memory creation phase (
    a. assigns undefined value to all variables
    b. assigns definition to functions)
    3. Execution phase(
    a. assigns allocated values to variables 
    b. performs logical and computational operatons
    c. Inside each function a new temporary JS Execution context is created
    d. return values from functions are forwarded to Parent Execution context
    e. Temporary Execution context is deleted after execution)
*/


/* ========================================= Call stacks =========================================

Function execution uses stack data structure to execute functions

*/