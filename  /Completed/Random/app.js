const foodName = "tea";
const apiKey = " 7530d71bbc724890ac768ebb6501cb5e ";

const method = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
//then method
// fetch(url, method)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//async await
async function getDataApi(foodName) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  const response = await fetch(url, method);
  const data = await response.json();
  console.log(data);
}

getDataApi("chicken");
