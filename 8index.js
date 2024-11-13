// 14 :programe för ålderskategåri
let ålder = prompt ("Ange ditt ålder: ")
if (ålder >= 20 && ålder <=64){
    console.log(" Du tiilhör ålderskatogeri vuxen");
   
} 
if (ålder >= 0 && ålder <=12){
    console.log(" Du tiilhör ålderskatogeri barn");
}
if (ålder >= 13 && ålder <=19){
    console.log(" Du tiilhör ålderskatogeri tonåring");
}
if (ålder >= 65){
    console.log(" Du tiilhör ålderskatogeri pensionär");
}
else{
    console.log("Ange rätt ålder");
}