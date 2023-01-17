/*

Equal to 42 or not! Ended
Description

You are given an array of N integers. You need to printYesif 42 is present in array, else printNo.


Input
Input Format :

First line contains number of integers N present in the array.

Second line contains  N  space separated integers.

Constraints :

1 <= N <= 100


Output
Output "Yes" or "No" based on condition mentioned above.


Sample Input 1 

5
3 7 0 9 8
Sample Output 1

No
Hint

We print No as 42 is not present in array.

*/
function equalTo42(size, arr) {
  //write code here
  let count = 0;
  for (let i = 0; i < size; i++) {
    if (arr[i] === 42) {
      count = count + 1;
    }
  }
  if (count === 0) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}

equalTo42(6, [12, 13, 45, 42, 78, 98]);
