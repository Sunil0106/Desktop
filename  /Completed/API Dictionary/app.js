// fetch(URL)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });
const userInputElement = document.getElementById("user-input-word");
function clearPage() {
  document.getElementById("word").innerHTML = "";
  document.getElementById("phonetic").innerHTML = "";
  document.querySelector(".define").innerHTML = "";
  document.querySelector(".showSynonyms").innerHTML = "";
}
async function apiData(word) {
  try {
    clearPage();
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Word not found (${response.status})`);
    }
    const data = await response.json();
    const userWord = data[0].word;
    const phonetic = data[0].phonetic;
    const meaning = data[0].meanings[0];
    if (!userWord || !meaning) {
      return;
    }

    document.getElementById("word").innerHTML = userWord;
    if (phonetic) {
      document.getElementById("phonetic").innerHTML = phonetic;
    }

    document.getElementById("part-of-speech").innerHTML = meaning.partOfSpeech;

    const defination = meaning.definitions;
    for (let i = 0; i < defination.length; i++) {
      const wordDefine = defination[i].definition;

      const showDefinition = document.createElement("p");

      showDefinition.innerHTML = `${i + 1}. ${wordDefine}`;
      document.querySelector(".define").appendChild(showDefinition);
    }

    const wordSynonyms = meaning.synonyms;

    for (let i = 0; i < wordSynonyms.length; i++) {
      const synonym = wordSynonyms[i];

      const showSynonyms = document.createElement("span");
      showSynonyms.innerHTML = `${synonym} `;

      document.querySelector(".showSynonyms").appendChild(showSynonyms);
    }
  } catch (error) {
    if (error) {
      document.querySelector(".error").innerHTML = error;
    }
  }
}

document.getElementById("search").addEventListener("click", () => {
  searchWord();
});

userInputElement.addEventListener("keydown", (e) => {
  if (e.key) {
    document.querySelector(".api-data").classList.add("hide");
    document.querySelector(".error").innerHTML = "";
  }
  if (e.key === "Enter") {
    searchWord();
  }
});

function searchWord() {
  const userWord = userInputElement.value.trim();
  if (!userWord) return;
  document.querySelector(".api-data").classList.remove("hide");
  apiData(userWord);
  userInputElement.value = "";
}
