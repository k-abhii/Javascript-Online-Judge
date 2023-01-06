/*
git remote add origin https://github.com/kabhimanyu656/Javascript-Online-Judge.git
git branch -M main
git push -u origin main


Pattern Printing 
Description

You are given a number, stored in a variable with the nameN

Print the pattern as shown below.

If the value stored inN = 4, then the pattern required will be

*
**
***
****

Input
The first and the only line of each test case contains the value stored in the variableN


Output
Print the pattern as shown in the problem statement

2

*
**


1

*

HINT 

In the first sample test case, the value stored in N = 2

Therefore, as shown in the problem statement, the required pattern will be

*
**
In the second sample test case, the value stored in N = 1

Therefore, as shown in the problem statement, the required pattern will be

*



*/

function patternPrinting(N) {
  // Write code here
  for (let i = 1; i <= N; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

patternPrinting(5);
