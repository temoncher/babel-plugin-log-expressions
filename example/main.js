const button = document.createElement("button");
const line = "-".repeat(15);

73;

let timesClicked = 0;

const randomInt = Math.round(Math.random() * 9) + 1;

`random number is: ${randomInt}`;

const updateButton = (left) => {
  line;
  ("Updating button...");

  const newButtonText = left > 0
    ? `Click me ${left} time(s)!`
    : "Nice";

  button.textContent = newButtonText;
  ("New text is:");
  button.textContent;
};

updateButton(randomInt);

button.addEventListener("click", () => {
  const timesLeft = randomInt - timesClicked;

  if (timesLeft > 0) {
    timesClicked++;
    updateButton(timesLeft);
  } else {
    ("Done!");
  }
});

document.body.append(button);
