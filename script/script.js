(function () {
  let input = document.getElementById("style-3");
  let buttons = document.querySelectorAll(".input");
  let reset = document.getElementById("reset");
  let equal = document.getElementById("equals");
  let operator = document.querySelectorAll(".operator");

  // Function to input numbers
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      input.value += value;
    });
  });

  operator.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      let value = e.target.dataset.num;

       // Checks if an operator already exists in the input value
      if (!input.value.includes(value)) {
        input.value += value;
      }
    });
  });

  // Calculates the values of the input
  equal.addEventListener("click", (e) => {
    if (input.value === "") {
      input.value = "";
    } else {
      let answer = eval(input.value);
      input.value = answer;
    }
    //  input.value === "" ? input.value = "" : input.value = answer;
  });

  reset.addEventListener("click", () => input.value = "");
})();