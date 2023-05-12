let value = "";

function handleActive(event) {
  const ratingButtons = document.querySelectorAll(".rating-button");
  value = event.target.value;

  ratingButtons.forEach((element) => {
    element.classList.remove("active");
  });

  event.target.classList.add("active");
}

function handleValueRating() {
  const htmlValue = document.getElementById("option-value");

  htmlValue.innerText = value;
}

function handleSubmit(event) {
  event.preventDefault();

  const screen1 = document.getElementById("submitForm");
  const screen2 = document.getElementById("submitDone");

  handleValueRating();

  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
}
