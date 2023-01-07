for (let father = 1; father <= 10; father++) {
  let bag = "";
  for (let son = 1; son <= father; son++) {
    bag += son + " ";
  }
  console.log(bag);
}
/*

1 
1 2 
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10

*/