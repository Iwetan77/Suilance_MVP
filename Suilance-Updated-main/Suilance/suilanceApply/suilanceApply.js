const leftSection = document.getElementById("left-section");
const rightSection = document.getElementById("right-section");

leftSection.addEventListener("scroll", () => {
  rightSection.style.overflowY = "hidden";
  setTimeout(() => {
    rightSection.style.overflowY = "auto";
  }, 100);
});

rightSection.addEventListener("scroll", () => {
  leftSection.style.overflowY = "hidden";
  setTimeout(() => {
    leftSection.style.overflowY = "auto";
  }, 100);
});
