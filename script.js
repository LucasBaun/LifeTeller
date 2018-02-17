
function myFunction() {
    var age = document.getElementById("number").value;
    if (!age) {
    document.getElementById('number').style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
    }
    else if ((age >= 0 ) && (age < 1)) {
      var age = ("Du är en bebis");
    } else if ((age >= 1) && (age <= 7)) {
      var age = ("Du går på Förskola");
    } else if ((age >= 17) && (age <= 19)) {
      var age =("Du borde gå i Gymnasiet");
    } else if ((age >= 8) && (age <= 16)){
      var age =("Du går i " + (age - 7) + "an");
    } else if ((age >= 20) && ( age <= 25)) {
      var age =("Du jobbar eller pluggar");
    } else if ((age >= 23) && (age < 65)) {
      var age =("Du jobbar förmodligen");
    } else if ((age >= 65) && (age <=100)) {
      var age =("Du är pensionär");
    } else if (age > 100 ) {
      var age =("Förmodligen död");
    }
    document.getElementById("result").innerHTML = age;
}


if (!age) {
   document.getElementById('number').style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
 } else {

 }
