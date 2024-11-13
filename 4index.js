// 15 : programm besluttagande Använd confirm

function myFunction() {
    let messege;
    if (confirm("Vill du gå ut?!") == true) {
      messege = "OK, you kan gå ut.";
    } else {
      messege = "Du har inte valt att gå ut";
    }
    document.getElementById("demo").innerHTML = messege;
  }