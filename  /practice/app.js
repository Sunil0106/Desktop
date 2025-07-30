function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch (error) {
    document.getElementById("demo").innerHTML = error;
  }
}

function showPosition() {
  document.getElementById("demo").innerHTML =
    "latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
