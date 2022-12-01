// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// declare variable to take user input
let n;
let powerOF2 = 0;

// question user to enter year
rl.question("Enter a number: ", function (string) {
  n = string;

  let i = 1;
  while(i <= n && powerOF2 >= 256)
  {
     powerOF2 = Math.pow(2, i)
     console.log('2 * %d = %d',i, powerOF2)
  }
  
  // close input stream
  rl.close();
});