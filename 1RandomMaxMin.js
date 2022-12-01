let randomNum = new Array()

for(let i = 0; i < 5; i++)
{    
    randomNum.push(Math.floor(Math.random()*900)+100)
}

let maxValue = randomNum[0];
let minValue = randomNum[0];

for(let i =1; i < 4; i++ )
{
    if(maxValue < randomNum[i])
    {
        maxValue = randomNum[i];
    }

    if(minValue > randomNum[i])
    {
        minValue = randomNum[i];
    }
}

console.log('The Maximum value is: ', maxValue)
console.log('The Minimum value is: ', minValue)