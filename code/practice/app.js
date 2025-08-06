//method chaining (.then())
const url = "https://v2.jokeapi.dev/joke/Any";

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));

//async await
async function getApiData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.setup);
}

getApiData();
