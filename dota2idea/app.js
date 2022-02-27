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
function noString() {
  if (searchBox == `^[A-Za-z]*, $`) {
    prompt("steamID only ");
  }
}
//functions for API query
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBox.value);
  }
}

//Pull API Data
function getResults(query) {
  fetch(`https://api.opendota.com/api/players/${query}`)
    .then((profileurl) => {
      return profileurl.json();
    })
    .then(displayResults);
}

//Display JSON Data into appropriate DOM slots
function displayResults(profileurl) {
  let profile = document.querySelector(".profile-url .profile");
  profile.innerText = `${profileurl}`;
  console.log(profileurl);
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
