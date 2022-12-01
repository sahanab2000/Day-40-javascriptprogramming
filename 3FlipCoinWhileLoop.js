let heads = 0
let tails = 0
while(heads < 11 && tails < 11)
{
    if(Math.floor(Math.random()*2))
    {
        //when random number is 0 
        console.log('Heads')
        heads++;
    }
    else
    {
        //when random number is 1
        console.log("Tails")
        tails++;
    }

}

if(heads > tails)
    console.log('heads win')
else
    console.log('tails win')