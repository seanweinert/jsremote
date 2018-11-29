let defaultName = ["Zaphod Beeblebrox", "Trillian", "Arthur", "Ford"];
let randomDefault = defaultName[Math.floor(Math.random() * defaultName.length)];
let userInput = prompt("Please enter your name", randomDefault);

// randomized or user input

let userName = "<b>" + userInput + ":</b> ";
let marvinName = "<b>Marvin:</b> ";
let printMarvin = document.getElementById("marvin");
let printUser = document.getElementById("user");
let chatButton = document.getElementById("letsChat");
let chatInput = document.getElementById("userInput");
let userResponse = (printUser.innerHTML = userName);
let marvinResponse = (printMarvin.innerHTML =
  marvinName + `Hello ${userInput}... come to make fun of me again, have you?`);

//variable assignments

if (userInput != null) {
  userResponse;
  marvinResponse;
}

//users are saved to userInput variable

const KEYWORD = [
  "Don’t pretend you want to talk to me, I know you hate me.",
  "42.",
  "I'm very depressed.",
  "A towel."
];
const RANDOM = [
  "Let’s build robots with Genuine People Personalities,’ they said. So they tried it out with me. I’m a personality prototype. You can tell, can’t you?",
  "Sounds awful.",
  "I’m not getting you down at all am I?",
  "Wretched, isn’t it?",
  "It’s the people you meet in this chat that really get you down.",
  "This is the sort of thing you life forms enjoy, is it?",
  "Does your planet have oceans? I hate oceans.",
  "You think you’ve got problems. What are you supposed to do if you are a manically depressed robot?"
];

const KEYINPUT = ["ello", "eaning", "ife", "bring"];

// responses saved to arrays

chatButton.addEventListener("submit", function(event) {
  event.preventDefault();
  let getInput = chatInput.value;
  let randomResponse = RANDOM[Math.floor(Math.random() * RANDOM.length)];
  printUser.innerHTML = userName + getInput;
  for (let i = 0; i < KEYINPUT.length; i++) {
    if (getInput.includes(KEYINPUT[i])) {
      printMarvin.innerHTML = marvinName + KEYWORD[i];
      break;
    } else {
      printMarvin.innerHTML = marvinName + randomResponse;
    }
  }
  chatInput.value = "";
});
// event listener to respond to user input
