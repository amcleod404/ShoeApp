// UI Elements
const container = document.querySelector("#media-grid");
const selectAFolder = document.querySelector("#body-text");
const byStylePage = document.querySelector("#by-style-page");
const byColorPage = document.querySelector("#by-color-page");
const bySpecialRequirementsPage = document.querySelector(
  "#by-special-requirements-page"
);
const byPricePage = document.querySelector("#by-price-page");
const byFitPage = document.querySelector("#by-fit-page");
const byArchTypePage = document.querySelector("#by-arch-type-page");

// UI Animation
container.addEventListener("click", (e) => {
  if (e.target.id !== "media-grid") {
    if (e.target.id === "by-style") {
      byStylePage.style.display = "flex";
      loadStylePage(byStylePage);
    } else if (e.target.id === "by-color") {
      byColorPage.style.display = "flex";
    } else if (e.target.id === "by-special-requirements") {
      bySpecialRequirementsPage.style.display = "flex";
    } else if (e.target.id === "by-price") {
      byPricePage.style.display = "flex";
    } else if (e.target.id === "by-fit") {
      byFitPage.style.display = "flex";
    } else if (e.target.id === "by-arch-type") {
      byArchTypePage.style.display = "flex";
    }
    container.style.display = "none";
    selectAFolder.style.display = "none";
  }
});

// Functions
const loadStylePage = async (page) => {
  const res = await fetch("db.json");
  const data = await res.json();
  page.children[1].innerHTML = `
    <h4>${data.defaultShoeId.name}</h4>
    <p>Size ${data.defaultShoeId.size}</p>
    <p>Style ${data.defaultShoeId.type}</p>
    <p>$${data.defaultShoeId.price}</p>
  `;
};
