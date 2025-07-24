const userData = [
  {
    username: "9899",
    password: "abcd",
  },
  {
    username: "9890",
    password: "abc",
  },
];
const usernameEl = document.getElementById("username");

const passInput = document.getElementById("password");
const logInBtn = document.getElementById("log-in-btn");

logInBtn.addEventListener("click", () => {
  const usernameVal = usernameEl.value;
  const passwordVal = passInput.value;
  if (!usernameVal && !passwordVal) {
    alert("please inter value");
    return;
  }
  checkUser(usernameVal, passwordVal);
});
function checkUser(userInputName, userInputPassword) {
  const found = userData.find((user) => {
    return (
      user.username === userInputName && user.password === userInputPassword
    );
  });
  if (found) {
    alert("Log in user");
  } else {
    alert("user not found");
  }
}
