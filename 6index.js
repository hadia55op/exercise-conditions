//programe about condition Lätta frågor (1 - 4)
//: 1 Hälsa användaren
let name = prompt ("Enter your name")
console.log("Hej!"   + name );
let words = prompt ( "Hej!" + name + "can you write few names of any animals seprated by commas.")
 
// jämför två ord viket som kommer först i alfbetet
console.log (words)
let array= words.split(",");
function Sort (array)
{
   return (array).sort((a,b) => a.localeCompare(b));
}
console.log(Sort(array));
// 3 är användare vuxen
let age = prompt ("hej " + name + "can you write your age?")
if (age > 18){
console.log("You are en adult.")
}
else if (age < 18){
console.log("You are not en adult.")

}
// 4: Gissa djur
let guess;
let attempts = 0;
let running = true;
while (running){
 guess = prompt ("Guess the write name of the animal")

const answer = ("cat");
if (guess != answer){
    console.log(" Guess again")
}
else if (guess = answer){
    console.log("You have guessed right")
}
}
