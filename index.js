document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formInfo");
  const submitButton = form.querySelector("button");
  const inputs = form.querySelectorAll('input:not([type="file"]), textarea');
  const fileInput = form.querySelector('input[type="file"]');

  const checkFormValidity = () => {
    let allFilled = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });

    if (!fileInput.files.length) {
      allFilled = false;
    }

    submitButton.disabled = !allFilled;
  };

  checkFormValidity();

  inputs.forEach((input) => {
    input.addEventListener("input", checkFormValidity);
  });

  fileInput.addEventListener("change", checkFormValidity);
});
