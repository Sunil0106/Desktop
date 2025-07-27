//Javascript has three kind of popup boxes:
//1.Alert Box: often used if you want to make sure information comes through to the user
//syntax: window.alert('someText')

window.alert("I am an alert box!");

//2.Confirm box: If you want to verify or accept something.
//syntax: window.confirm('someText');
let txt;
if (confirm("Press a button!")) {
  txt = "you pressed OK!";
} else {
  txt = "you pressed Cancel!";
}
console.log(txt);

//3.Prompt Box: if you want user to input  a value before entering a page.
//syntax: window.prompt('sometext','default text')
let person = prompt("Please enter your name", "username");
let text;
if (person === null || person === "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + " ! How are you today?";
}
document.querySelector(".prompt-input-result").innerHTML = text;
