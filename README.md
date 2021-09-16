# ccUnitTesting-factorialFeature
CodeCademy project - use test-driven development to build a factorial method

Objective:
1. Use test-driven development, TDD, to build a factorial method. 
2. Use the assert module and mocha testing library to drive your development using tests that follow the phases: setup, exercise, and verification.

How To Calculate Factorial
- Take an integer and you multiply that by all the integers that are less than it.

The factorial of an integer n is denoted by an exclamation mark n!, so 5! is equal to:
 5 × 4 × 3 × 2 × 1 = 120
 
Edge Case
An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter — you can think of these as special cases that you need to account for. Based on the logic of factorials, you would expect that calculating 0! would look like this:
0 × 0 = 0
But mathematically this is not true. In this instance of a factorial method, there is an edge-case which is that 0 factorial (or 0!) is 1.
https://www.zero-factorial.com/whatis.html

Follow the red-green-refactor cycle for guidance through the process of using TDD to create a factorial method. 
The factorial method will be inside an object named Calculate. 
Implement your test code in the file index_test.js, and your implementation code in index.js.

After you complete each step, run the test suite in the terminal to test the results.
