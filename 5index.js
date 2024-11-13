// Svåra frågor(condidtions)
// 11 :programe (sifra eller bokstav)
let answer = prompt ( "Du kan skriva ett tecken här:");
let regex1= /[a-zA-Z]/;

if (regex1.test(answer)){
     console.log( "Det finns bokstaver ");
}
let regex2 = /[0-9]/;
if(regex2.test(answer)){

    console.log( "Det finns sifror");
}







