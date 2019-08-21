
// User's introduce
alert("Hi there from JS FILE!");
var userName    = prompt("What is your name?");
var userSurname = prompt("What is your surname?");
var userAge     = prompt("How old are you?");
alert("Nice to meet you, " + userName);
alert("You full name is: " + userName + " " + userSurname);
console.log("Also great to meet with you " + userName);
console.log("And I know your age. You are: " + userAge + " years old!");

// Age Calculator
alert("You are alive in a planet: " + userAge*365.25 +" days!");

//Guess Game
var guessNumber = 30;
var enterNumber = Number(prompt("Guess Number: "));
while(guessNumber !== enterNumber)
{
    if(isNaN(enterNumber))
    {
        enterNumber = Number(prompt("Please enter NUMBER only: "));
    }
    else if (enterNumber < guessNumber)
    {
        enterNumber = Number(prompt("Your number is less than ours. Please, guess Number again: "));
    }
    else
    {
        enterNumber = Number(prompt("Your number is larger than ours. Please, guess Number again: "));
    }
}