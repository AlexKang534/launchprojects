//Checklist
//Pull API Data
//Process API Data
//Respond with HERO + BKB Buying %

//Variables DOM
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
//Textbox DOM
const searchBox = document.querySelector(".steamID");
searchBox.addEventListener("keypress", setQuery);

//Function to remove string(?)
// function noString(searchBox) {
//   console.log(searchBox);
// }
//functions for API query
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBox.value);
    console.log("entered");
  }
}

//Pull API Data
function getResults(query) {
  fetch(`https://api.opendota.com/api/players/${query}`)
    .then((profile) => {
      return profile.json();
    })
    .then(displayResults)
    .catch(function (err) {
      console.log("something wrong with API function");
    });
}

//Display JSON Data into appropriate DOM slots
function displayResults(profile) {
  let profileInformation = document.querySelector(".profile-url .profile");
  profileInformation.innerText = JSON.stringify(`${profile}`);
  console.log(profile);
}

//Event Listeners for Yes/No
yesBtn.addEventListener("click", function () {
  alert("Good Job");
  console.log(yesBtn);
});
noBtn.addEventListener("click", function () {
  alert("Buy one idiot");
  console.log(noBtn);
});
