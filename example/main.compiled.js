const button = document.createElement("button");
const line = "-".repeat(15);
console.log(73);
let timesClicked = 0;
const randomInt = Math.round(Math.random() * 9) + 1;
console.log(`random number is: ${randomInt}`);
const updateButton = left => {
  console.log(line);
  console.log("Updating button...");
  const newButtonText = left > 0 ? `Click me ${left} time(s)!` : "Nice";
  button.textContent = newButtonText;
  console.log("New text is:");
  console.log(button.textContent);
};
updateButton(randomInt);
button.addEventListener("click", () => {
  const timesLeft = randomInt - timesClicked;
  if (timesLeft > 0) {
    timesClicked++;
    updateButton(timesLeft);
  } else {
    console.log("Done!");
  }
});
document.body.append(button);
