const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
