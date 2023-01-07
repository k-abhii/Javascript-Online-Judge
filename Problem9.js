for (let father = 1; father <= 10; father++) {
  let bag = "";
  for (let son = 1; son <= father; son++) {
    bag += "* ";
  }
  console.log(bag);
}

for (let f = 10; f >= 1; f--) {
  let jhola = "";
  for (let s = 1; s <= f; s++) {
    jhola += "* ";
  }
  console.log(jhola);
}

/*

* 
* * 
* * *
* * * *
* * * * * *
* * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * *
* * * * * * *
* * * * * *
* * * * *
* * * *
* * *
* *
*

*/
