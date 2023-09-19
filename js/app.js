const header = document.querySelector("header");
const sections = document.querySelectorAll("section:not(#popular)");
const bar = document.querySelector(".bar");
const menu = document.querySelector(".main-menu");
const close = document.querySelector(".close");
const body = document.querySelector("body");
// Hero Area Animation
const observer = new IntersectionObserver((e) => {
  e.forEach((item) => {
    let textWrapper = item.target.querySelector(".text-wrapper");
    let foodPlate = item.target.querySelector(".food-plate");
    let topHeader = item.target.querySelector(".top-header");
    let mainMenu = item.target.querySelector(".main-menu");
    textWrapper.classList.add("transform-0");
    foodPlate.classList.add("rotate-0");
    topHeader.classList.add("transform-0");
    mainMenu.classList.add("transform-0");
  });
});
observer.observe(header);
// All Section Title and description animation
const sectionObserver = new IntersectionObserver((e) => {
  e.forEach((e) => {
    if (e.isIntersecting) {
      const sectionTitle = e.target.querySelector(".section-title");
      const sectionDescription = e.target.querySelector(".section-description");
      sectionTitle.classList.add("transform-0");
      sectionDescription.classList.add("transform-0");
    }
  });
});

sections.forEach((item) => sectionObserver.observe(item));

// Menu open and close

bar.addEventListener("click", () => {
  menu.style.display = "flex";
  body.style.overflow = "hidden";
});
close.addEventListener("click", () => {
  menu.style.display = "none";
  body.style.overflow = "auto";
});
