// UI Elements
const html = document.querySelector("#landing");
const backButton = document.querySelector("#button");
const container = document.querySelector("#media-grid");
const selectAFolder = document.querySelector("#body-text");
const byStylePage = document.querySelector("#by-style-page");
const byColorPage = document.querySelector("#by-color-page");
const byPricePage = document.querySelector("#by-price-page");
const byFitPage = document.querySelector("#by-fit-page");
const byArchTypePage = document.querySelector("#by-arch-type-page");
const bySpecialRequirementsPage = document.querySelector(
  "#by-special-requirements-page"
);

let backPage = "";

// UI Animation
container.addEventListener("click", (e) => {
  if (e.target.id !== "media-grid") {
    if (e.target.id === "by-style") {
      byStylePage.style.display = "flex";
      loadStylePage(byStylePage);
    } else if (e.target.id === "by-color") {
      byColorPage.style.display = "flex";
      loadColorPage(byColorPage);
    } else if (e.target.id === "by-special-requirements") {
      bySpecialRequirementsPage.style.display = "flex";
      loadSpecialRequirementsPage(bySpecialRequirementsPage);
    } else if (e.target.id === "by-price") {
      byPricePage.style.display = "flex";
      loadPricePage(byPricePage);
    } else if (e.target.id === "by-fit") {
      byFitPage.style.display = "flex";
      loadFitPage(byFitPage);
    } else if (e.target.id === "by-arch-type") {
      byArchTypePage.style.display = "flex";
      loadArchTypePage(byArchTypePage);
    }
    container.style.display = "none";
    selectAFolder.style.display = "none";
    backButton.style.display = "block";
  }
});

const goBack = () => {
  switch (backPage) {
    case "style":
      byStylePage.children[1].children[0].innerHTML = "";
      loadStylePage(byStylePage);
      byStylePage.children[0].innerText = "By Style";
      backPage = "";
      break;
    case "color":
      byColorPage.children[1].children[0].innerHTML = "";
      loadColorPage(byColorPage);
      byColorPage.children[0].innerText = "By Color";
      backPage = "";
      break;
    case "special-requirements":
      bySpecialRequirementsPage.children[1].children[0].innerHTML = "";
      loadSpecialRequirementsPage(bySpecialRequirementsPage);
      bySpecialRequirementsPage.children[0].innerText = "By Problem Type";
      backPage = "";
      break;
    case "price":
      byPricePage.children[1].children[0].innerHTML = "";
      loadPricePage(byPricePage);
      byPricePage.children[0].innerText = "By Price";
      backPage = "";
      break;
    case "fit":
      byFitPage.children[1].children[0].innerHTML = "";
      loadFitPage(byFitPage);
      byFitPage.children[0].innerText = "By Fit";
      backPage = "";
      break;
    case "arch-type":
      byArchTypePage.children[1].children[0].innerHTML = "";
      loadArchTypePage(byArchTypePage);
      byArchTypePage.children[0].innerText = "By Arch-Type";
      backPage = "";
      break;
    default:
      container.style.display = "grid";
      selectAFolder.style.display = "flex";
      backButton.style.display = "none";
      byStylePage.style.display = "none";
      byStylePage.children[1].children[0].innerHTML = "";
      byColorPage.style.display = "none";
      byColorPage.children[1].children[0].innerHTML = "";
      bySpecialRequirementsPage.style.display = "none";
      bySpecialRequirementsPage.children[1].children[0].innerHTML = "";
      byPricePage.style.display = "none";
      byPricePage.children[1].children[0].innerHTML = "";
      byFitPage.style.display = "none";
      byFitPage.children[1].children[0].innerHTML = "";
      byArchTypePage.style.display = "none";
      byArchTypePage.children[1].children[0].innerHTML = "";
      break;
  }
};

/***** SELECTION PAGE FUNCTIONS *****/
const loadStylePage = (page) => {
  page.children[1].children[0].innerHTML += `
    <div class="col mb-4 style-tile" onclick="loadStyledShoes('Sandal')">
      <div class="card h-100">
        <img
          src="./images/atlantic.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Sandals</h5>
          <p class="card-text">
            For sandal lovers
          </p>
        </div>
      </div>
    </div>

    <div class="col mb-4 style-tile" onclick="loadStyledShoes('Wedge')">
      <div class="card h-100">
        <img
          src="./images/balboa.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Wedges</h5>
          <p class="card-text">
            For short kings
          </p>
        </div>
      </div>
    </div>

    <div class="col mb-4 style-tile" onclick="loadStyledShoes('Cocktail')">
      <div class="card h-100">
        <img
          src="./images/fairchild.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Cocktails</h5>
          <p class="card-text">
            For cock lovers
          </p>
        </div>
      </div>
    </div>

    <div class="col mb-4 style-tile" onclick="loadStyledShoes('Closed-Toe')">
      <div class="card h-100">
        <img
          src="./images/murray.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Closed Toe</h5>
          <p class="card-text">
            For cold feet
          </p>
        </div>
      </div>
    </div>

    <div class="col mb-4 style-tile" onclick="loadStyledShoes('Boot')">
    <div class="card h-100">
      <img
        src="./images/federal.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Boots</h5>
        <p class="card-text">
          For beados
        </p>
      </div>
    </div>
  </div>
  `;
};

const loadColorPage = (page) => {
  const colors = [
    "black",
    "white",
    "coral",
    "tobacco",
    "red",
    "navy",
    "denim",
    "silver",
    "gold",
    "pink",
    "orange",
    "turquoise",
    "lime",
    "fuchsia",
    "pearla",
  ];

  colors.forEach((color) => {
    page.children[1].children[0].innerHTML += `
    <div class="col mb-4 style-tile" onclick="loadColoredShoes('${color}')">
      <div class="card h-100">
        <img
          src="./images/${color}.jpg"
          class="card-img-top"
          alt="${color}"
        />
        <div class="card-body">
          <h5 class="card-title">${
            color.charAt(0).toUpperCase() + color.slice(1)
          }</h5>
        </div>
      </div>
    </div>
    `;
  });
};

const loadSpecialRequirementsPage = (page) => {
  page.children[1].children[0].innerHTML += `
  <div class="col mb-4 style-tile" onclick="loadSpecialRequirementShoes('plantarFascitis-friendly')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Plantar Fascitis</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadSpecialRequirementShoes('highInstep-friendly')">
    <div class="card h-100">
      <img
        src="./images/atlantic.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Bone Spur</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadSpecialRequirementShoes('bunion-friendly')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Bunion</h5>
      </div>
    </div>
  </div>
  `;
};

const loadPricePage = (page) => {
  page.children[1].children[0].innerHTML += `
  <div class="col mb-4 style-tile" onclick="loadPriceShoes('50to100')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$50 - $100</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadPriceShoes('100to125')">
    <div class="card h-100">
      <img
        src="./images/atlantic.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$101 - $125</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadPriceShoes('125to150')">
    <div class="card h-100">
      <img
        src="./images/forsyth.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$125 - $150</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadPriceShoes('150to200')">
    <div class="card h-100">
      <img
        src="./images/cannon-two-tone.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$150 - $200</h5>
      </div>
    </div>
  </div>
  `;
};

const loadFitPage = (page) => {
  page.children[1].children[0].innerHTML += `
  <div class="col mb-4 style-tile" onclick="loadFits('narrow')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Narrow</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadFits('wide')">
    <div class="card h-100">
      <img
        src="./images/atlantic.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Wide</h5>
      </div>
    </div>
  </div>
  `;
};

const loadArchTypePage = (page) => {
  page.children[1].children[0].innerHTML += `
  <div class="col mb-4 style-tile" onclick="loadArchTypes('high arch')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">High</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadArchTypes('low arch')">
    <div class="card h-100">
      <img
        src="./images/atlantic.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Low</h5>
      </div>
    </div>
  </div>
  `;
};

/***** END SELECTION PAGE FUNCTIONS *****/

/***** FILTER PAGE FUNCTIONS *****/

const loadStyledShoes = async (style) => {
  backPage = "style";
  byStylePage.children[1].children[0].innerHTML = "";
  byStylePage.children[0].innerText = style;
  const res = await fetch("db.json");
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type } = data[item];
    if (type === style) {
      byStylePage.children[1].children[0].innerHTML += `
      <div class="col mb-4">
        <div class="card h-100">
          <img
            src="${image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              $${price}
            </p>
          </div>
        </div>
      </div>
    `;
    }
  }
};

const loadColoredShoes = async (searchedColor) => {
  backPage = "color";
  byColorPage.children[1].children[0].innerHTML = "";
  byColorPage.children[0].innerText =
    searchedColor.charAt(0).toUpperCase() + searchedColor.slice(1);
  const res = await fetch("db.json");
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color } = data[item];
    console.log(searchedColor.toLowerCase());
    if (JSON.stringify(color).includes(searchedColor.toLowerCase())) {
      console.log(searchedColor.toLowerCase());
      byColorPage.children[1].children[0].innerHTML += `
      <div class="col mb-4">
        <div class="card h-100">
          <img
            src="${image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              $${price}
            </p>
          </div>
        </div>
      </div>
    `;
    }
  }
};

const loadSpecialRequirementShoes = async (requirement) => {
  backPage = "special-requirements";
  let title = "";
  switch (requirement) {
    case "highInstep-friendly":
      title = "High Instep Friendly";
      break;
    case "plantarFascitis-friendly":
      title = "Plantar Fascitis Friendly";
      break;
    case "bunion-friendly":
      title = "Bunion Friendly";
      break;
    default:
      break;
  }
  bySpecialRequirementsPage.children[1].children[0].innerHTML = "";
  bySpecialRequirementsPage.children[0].innerText = title;
  const res = await fetch("db.json");
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color, medicalRequirements } = data[item];
    if (requirement in medicalRequirements) {
      bySpecialRequirementsPage.children[1].children[0].innerHTML += `
      <div class="col mb-4">
        <div class="card h-100">
          <img
            src="${image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              $${price}
            </p>
          </div>
        </div>
      </div>
    `;
    }
  }
};

const loadPriceShoes = async (price) => {
  backPage = "price";
  let minPrice = 50;
  let maxPrice = 100;
  let title = "";
  switch (price) {
    case "50to100":
      title = "$50 - $100";
      break;
    case "100to125":
      title = "$100 - $125";
      minPrice = 101;
      maxPrice = 125;
      break;
    case "125to150":
      title = "$125 - $150";
      minPrice = 126;
      maxPrice = 150;
      break;
    case "150to200":
      title = "$150 - $200";
      minPrice = 151;
      maxPrice = 200;
      break;
    default:
      break;
  }
  byPricePage.children[1].children[0].innerHTML = "";
  byPricePage.children[0].innerText = title;
  const res = await fetch("db.json");
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color, medicalRequirements } = data[item];
    if (parseInt(price) <= maxPrice && parseInt(price) >= minPrice) {
      byPricePage.children[1].children[0].innerHTML += `
      <div class="col mb-4">
        <div class="card h-100">
          <img
            src="${image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              $${price}
            </p>
          </div>
        </div>
      </div>
    `;
    }
  }
};

const loadFits = async (searchedFit) => {
  backPage = "fit";
  let title = "";
  switch (searchedFit) {
    case "narrow":
      title = "Narrow";
      break;
    case "wide":
      title = "Wide";
      break;
    case "neither":
      title = "Neither Wide Nor Narrow";
      break;
    default:
      break;
  }
  byFitPage.children[1].children[0].innerHTML = "";
  byFitPage.children[0].innerText = title;
  const res = await fetch("db.json");
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color, fit } = data[item];
    if (fit.toLowerCase() === searchedFit) {
      byFitPage.children[1].children[0].innerHTML += `
      <div class="col mb-4">
        <div class="card h-100">
          <img
            src="${image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              $${price}
            </p>
          </div>
        </div>
      </div>
    `;
    }
  }
};

const loadArchTypes = async (searchedArchType) => {
  backPage = "arch-type";
  let title = "";
  switch (searchedArchType) {
    case "high arch":
      title = "High";
      break;
    case "low arch":
      title = "Low";
      break;
    default:
      break;
  }
  byArchTypePage.children[1].children[0].innerHTML = "";
  byArchTypePage.children[0].innerText = title;
  const res = await fetch("db.json");
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color, fit, archType } = data[item];
    if (archType.toLowerCase() === searchedArchType) {
      byArchTypePage.children[1].children[0].innerHTML += `
      <div class="col mb-4">
        <div class="card h-100">
          <img
            src="${image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              $${price}
            </p>
          </div>
        </div>
      </div>
    `;
    }
  }
};

/***** END FILTER PAGE FUNCTIONS *****/
