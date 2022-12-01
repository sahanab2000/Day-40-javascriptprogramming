let randomNum = new Array()
let sumOfValues = 0

for(let i = 0; i < 5; i++)
{    
    randomNum.push(Math.floor(Math.random()*90)+10)
}

//Print the array in the console.
console.log("The 5 random 2 digits values are: ")
console.log(randomNum);

for(let i = 0; i < 5; i++)
{    
    sumOfValues += randomNum[i]
}

console.log('The sum of 5 random 2 digits values is: ' + sumOfValues)

let averageOfValues = sumOfValues / 5.0

console.log('The average of 5 random 2 digits values is: ' + averageOfValues)


/*
Sample output:
$ node 4ReadRandomSumAverage
The 5 random 2 digits values are:
[ 82, 92, 26, 73, 17 ]
The sum of 5 random 2 digits values is: 290
The average of 5 random 2 digits values is: 58
*/