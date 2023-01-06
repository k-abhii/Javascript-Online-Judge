/*
Description

You are given a number, stored in a variable with the name num

You have to print numlines, and on each line print all the numbers from 1 to the value stored innum

For example, if the value stored innum = 5, then the required output is

1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5

Input
The first and the only line of the input contains the value stored innum


Output
Print the output as mentioned in the problem statement
4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4

In the sample test case, the value stored innum = 4

Therefore, we print 4 lines, and on each line we print all the values from[1,4]

Hence, the output will be
*/

function yourFirstNested(num) {
  // Write code here
  for (let i = 1; i <= num; i++) {
    let bag = "";
    for (let j = 1; j <= num; j++) {
      bag += j + " ";
    }
    console.log(bag);
  }
}

yourFirstNested(4);
