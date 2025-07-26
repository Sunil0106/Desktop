// //window.location:Can be used  to get the current page address (URL) and to redirect   the browser to a new page

// //1.window.location.href: returns the url of the current page
// document.getElementById("demo").innerHTML =
//   "copy address: " + window.location.href;
// console.log(window.location.href);

// //2.window.location.hostname: returns the name of the internet host of the current  page

// document.getElementById("demo1").innerHTML =
//   "HostName: " + window.location.hostname;

// //3.window.location.pathname: return path name of the current page
// document.getElementById("demo2").innerHTML =
//   "Path name: " + window.location.pathname;

// //window.location.protocal:return web protocal
// document.getElementById("demo3").innerHTML =
//   "Protocal: " + window.location.protocol;

// //Window.location.port: return number of the internet host port of the current page
// document.getElementById("demo4").innerHTML =
//   "host port: " + window.location.port;

// //Window.location.assign(): method loads a new document

// function newDoc() {
//   window.location.assign("https:/www.w3schools.com");
// }

//window.history: contains the browsers history
//1.window.history back
// //-Loads the previous URL in the history list.
// function goBack() {
//   window.history.back();
// }
// document.getElementById("his-back").addEventListener("click", goBack);

//// The Navigator Object
//-The navigator object contains information about the visitor's browser
// window.navigator or navigator

//Browswer Cookies: returns true if cookies are enabled, othewise false

document.querySelector(".cookies").innerHTML =
  "Navigator: " + navigator.cookieEnabled;

//The browser language;
document.getElementById("nav-lang").innerHTML = navigator.language;

//is the browser online
document.getElementById("nav-online").innerHTML = navigator.onLine;

//Browser Application name;
document.getElementById("nav-app").innerHTML = navigator.appName;

//browser application code name
document.getElementById("nav-app-code-name").innerHTML = navigator.appCodeName;

//The Browser engine
document.getElementById("nav-bro-engine-product").innerHTML = navigator.product;

//The browser version
document.geteElementById("nav-browser-version").innerHTML =
  navigator.appVersion;

// //The browser agent
// document.getElementById("nav-browser-agent").innerHTML = navigator.userAgent;

//is java inabled;

document.getElementById("nav-browser-agent").innerHTML =
  navigator.javaEnabled();
