/*

Battle of Odd & Even Ended
Description

You are given an array arr of N integers.

You need to print Odd, if th sum of all odd numbers present in the array is greater than sum of all the even numbers 
present in the array, or else print Even.


Input
Input Format :

First line contains N which is the number of elements present in the array.

Second line contains N space separated integers which are the elements of array.



Constraints :

1 <= N <= 100

1 <= arr[i] <= 100


Output
Print either "Odd" or "Even" depending upon the condition mentioned above.


Sample Input 1 

4
1 2 3 4
Sample Output 1

Even
Hint

Output Explanation :

Odd numbers present are 1 and 3, whose sum is 4

Even numbers present in array are 2 and 4, whose sum is 6

Since 6>4, Even is the required output.



*/

function battleOfOddAndEven(n, arr) {
  //write code here
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  if (sumOdd > sumEven) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}

battleOfOddAndEven(4, [1, 2, 3, 4]);
