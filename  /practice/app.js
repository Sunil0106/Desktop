// function getLocation() {
//   try {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } catch (error) {
//     document.getElementById("demo").innerHTML = error;
//   }
// }

// function showPosition() {
//   document.getElementById("demo").innerHTML =
//     "latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
// }

//JavaScript Validation API
//Constrainnt validation dom Methods

//1.checkValidity():returns true if an input element contains valid data
function myFunction() {
  const inpObj = document.querySelector("#id1");
  if (!inpObj.checkValidity()) {
    document.querySelector("#demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  }
}
