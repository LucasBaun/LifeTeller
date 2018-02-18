
function myFunction() {
    var age = 2018 - document.getElementById("number").value;
    var d = new Date();
    var month = d.getMonth();

    if (month < 7) {
      if (!age) {
      document.getElementById('number').style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
      }
      else if ((age >= 0 ) && (age < 2)) {
        var age = ("Du är en bebis");
      } else if ((age >= 2) && (age <= 7)) {
        var age = ("Du går på Förskola");
      } else if ((age >= 8) && (age <= 16)){
        var age =("Du går i " + (age - 7) + "an");
      } else if ((age >= 17) && (age <= 19)) {
        var age =("Du borde gå i Gymnasiet");
      } else if ((age >= 20) && ( age <= 25)) {
        var age =("Du jobbar eller pluggar");
      } else if ((age >= 23) && (age < 65)) {
        var age =("Du jobbar förmodligen");
      } else if ((age >= 65) && (age <=100)) {
        var age =("Du är pensionär");
      } else if (age > 100 ) {
        var age =("Förmodligen död");
      }
    } else {
      if (!age) {
      document.getElementById('number').style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
      }
      else if ((age >= 0 ) && (age < 1)) {
        var age = ("Du är en bebis");
      } else if ((age >= 1) && (age <= 7)) {
        var age = ("Du går på Förskola");
      } else if ((age >= 8) && (age <= 16)){
        var age =("Du går i " + (age - 6) + "an");
      } else if ((age >= 17) && (age <= 20)) {
        var age =("Du borde gå i Gymnasiet");
      } else if ((age >= 21) && ( age <= 26)) {
        var age =("Du jobbar eller pluggar");
      } else if ((age >= 26) && (age < 65)) {
        var age =("Du jobbar förmodligen");
      } else if ((age >= 65) && (age <=99)) {
        var age =("Du är pensionär");
      } else if (age > 99 ) {
        var age =("Förmodligen död");
      }
    }
    document.getElementById("result").innerHTML = age;
}


if (!age) {
   document.getElementById('number').style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
 } else {

 }
