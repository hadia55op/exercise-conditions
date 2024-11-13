// 13 programe for lösenordkontroll
let passward = prompt("Please write your passward that is 8 characters long and must contain one number.")

if (passward.length > 8){
    console.log( passward + " is too long ")
}
 if (passward.length < 8){
    console.log (passward + " is too short" )
 }

 if (passward.search(!/[0-9]/ < 0) ){
    console.log("your passward must contain a number")
 }
 
if (passward.search(/[0-9]/ < 0) && (passward.length == 8)){
    console.log("your passward looks good")
}
