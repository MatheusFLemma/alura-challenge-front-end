const colorPicker = document.getElementById("color-picker");
const codeBackground = document.querySelector(
  ".project-card__code--background"
);

colorPicker.addEventListener("input", () => {
  codeBackground.style.background = colorPicker.value;
});
