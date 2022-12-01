// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// declare variable to take user input
let year;

// question user to enter year
rl.question("Enter a year: ", function (string) {
  year = string;
  
  if(year % 4 == 0 )
    {
    if(year % 100 !=0)
    {
        console.log(year, ' is a leap year')
    }
    else
    {
        if(year % 400 == 0){
            console.log(year, ' is a leap year')
        }
        else
        {
            console.log(year, ' is not a leap year')
        }
    }
    
    }
    else
    {
        console.log(year, ' is not a leap year')
    }

  // close input stream
  rl.close();
});