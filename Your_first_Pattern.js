/*
Your First Pattern Ended
Description

You are given a number stored in a variable with the namen

You have to printnlines, and on each line you have to printnstars

For example, consider the value stored inn = 4. Then, the required output will be

* * * *
* * * *
* * * *
* * * *

Input
The first and the only line of the input contains the value stored in the variablen


Output
Print the pattern as shown in the problem statement
5

* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 


*/

function yourFirstPattern(n) {
  // Write code here
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= n; j++) {
      star += "* ";
    }
    console.log(star);
  }
}

yourFirstPattern(5);
