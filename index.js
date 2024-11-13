//Medelsvåra
// 6 :programe Godkänd eller inte:
const marks = prompt ("Please enter your obtained marks:(0-100)")
let grade ;
if (marks  >=50 && marks<= 100){
    grade = "Pass"

}
else if (marks < 50 ){
    grade = "Fail"
}

console.log(" Acccording to your obtained marks you are:" , grade)
 