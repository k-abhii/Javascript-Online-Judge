for (let father = 10; father >= 1; father--) {
  let bag = "";
  for (let son = 1; son <= father; son++) {
    bag += father + " ";
  }
  console.log(bag);
}

/*
10 10 10 10 10 10 10 10 10 10 
9 9 9 9 9 9 9 9 9 
8 8 8 8 8 8 8 8
7 7 7 7 7 7 7
6 6 6 6 6 6
5 5 5 5 5
4 4 4 4
3 3 3
2 2
1

*/
