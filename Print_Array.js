/*


Print Array 
Description

You are given an array, whose size is stored in a variable of size n

The array is stored in a variable with the name,arr

You have to traverse the array, and print each element on a new line

For example, the value stored inN = 5, and the array is arr = [1 2 3 4 5]

Therefore, the required output will be

1
2
3
4
5

Input
The first First line contains N, size of array.

Next line contains N space integers, which denote the numbers present in the array


Output
Print all number of array on new line.


Sample Input 1 
5
1 2 3 4 5

Sample Output 1

1
2
3
4
5

Hint

You need to print elements of array on new line.

*/

/* FIRST METHOD FOR OF LOOP 

function printArray(N, arr) {
  //write code here
  for (let ele of arr) {
    console.log(ele);
  }
}

*/

function printArray(N, arr) {
  //write code here
  // for(let ele of arr){
  //     console.log(ele);
  // }

  for (let i = 0; i < N; i++) {
    console.log(arr[i]);
  }
}

printArray(5, [1, 2, 3, 4, 5]);
