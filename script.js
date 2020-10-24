//Create an array of words
var words = [
  "cow",
  "pig",
  "chicken",
  "people",
  "zombie",
  "creeper",
  "phantom",
  "skeleton",
  "enderman",
  "zombiepig",
  "wolf",
  "babyvillager"

];

//Pick a random word
var word = words[Math.floor(Math.random()*words.length)];

//Initialize answer array answer array with -
var answerArray = [];
for(var i = 0; i < word.length; i++)
{
  answerArray[i] = "-";
}

//Initialize Remaining Letters
var remainingLetters = word.length;

//THe Game Loop
while(remainingLetters > 0)
{
   //Show the player their progress
    alert(answerArray.join(" "));

   //Take a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");

   //If Null them break
    if(guess === null)
    {
  
      break;

    }else if(guess.length !==1){

       alert("Please enter a single letter.");

    }else{
        //Update the game state with the guess

         for(var j = 0; j < word.length; j++)
         {
             if(word[j] === guess)
             {
                  answerArray[j] = guess;
                  remainingLetters--;
             }

         }

    }
   //Update answerArray and remainingLetters for every correct guess

}//End of Game Loop


alert(answerArray.join(" "));
alert("Good Job! The answer was " + word);


