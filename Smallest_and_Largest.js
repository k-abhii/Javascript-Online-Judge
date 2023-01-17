/*

Smallest and Largest of all 
Description

Given an array,arr which has N integers.

You need to print the smallest and largest element present in the array each on new lines.


Input
Input Format

The first line contains an integerN.

The second line contains N space separated integers, which are integers of array arr.

Constraints

1 <= N <= 100


Output
Output Format

One first line, print minimum of all elements.

On the second line, print the maximum of all elements.


Sample Input 1 

4
-2 0 8 4
Sample Output 1

-2
8
Hint

Integers in array are:-[-2, 0, 8, 4]

Minimum integer in array[-2, 0, 8, 4]is-2

Maximum integer in array[-2, 0, 8, 4]is-8


*/

function smallestAndLargestOfAll(n, arr) {
  //write code here
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(min);
  console.log(max);
}

smallestAndLargestOfAll(4, [-2, 0, 8, 4]);
/* node Smallest_and_largest.js
-2
8
*/
