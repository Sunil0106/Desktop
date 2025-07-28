//Timing Event
//The window object allows execution of code at specified time interval.These time intervals are called timing events
//1.setTimeout(function, milliseconds)
function hello() {
  console.log("hello! khnana khais");
}
//* window.clearTimeout()
//2.setInterval(function, milliseconds):repeats a given function at every given time-interval
setInterval(timer, 1000);
function timer() {
  const d = new Date();
  document.getElementById("date").innerHTML = d;
}
