// UI Elements
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
  }
});

// Functions
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
  `;
};

const loadColorPage = (page) => {
  page.children[1].children[0].innerHTML += `
  <div class="col mb-4 style-tile" onclick="loadColoredShoes('Black')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Black</h5>
      </div>
    </div>
  </div>
  `;
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
        <h5 class="card-title">Plantar Fascitis Friendly</h5>
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
        <h5 class="card-title">High Instep</h5>
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
        <h5 class="card-title">Bunion Friendly</h5>
      </div>
    </div>
  </div>
  `;
};

const loadPricePage = (page) => {
  page.children[1].children[0].innerHTML += `
  <div class="col mb-4 style-tile" onclick="loadPriceShoes('0to50')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$0 - $50</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadPriceShoes('51to100')">
    <div class="card h-100">
      <img
        src="./images/atlantic.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$51 - $100</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadPriceShoes('101to150')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$101 - $150</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadPriceShoes('151to200')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$151 - 200</h5>
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
  <div class="col mb-4 style-tile" onclick="loadFits('neither')">
    <div class="card h-100">
      <img
        src="./images/gaillard.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Neither Wide Nor Narrow</h5>
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

const loadStyledShoes = async (style) => {
  byStylePage.children[1].children[0].innerHTML = "";
  byStylePage.children[0].innerText = "Sandals";
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
  byColorPage.children[1].children[0].innerHTML = "";
  byColorPage.children[0].innerText = "Black";
  const res = await fetch("db.json");
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color } = data[item];
    if (searchedColor.toLowerCase() in color) {
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
  let minPrice = 0;
  let maxPrice = 50;
  let title = "";
  switch (price) {
    case "0to50":
      title = "$0 - $50";
      break;
    case "51to100":
      title = "$51 - $100";
      minPrice = 51;
      maxPrice = 100;
      break;
    case "101to150":
      title = "$101 - $150";
      minPrice = 101;
      maxPrice = 150;
      break;
    case "151to200":
      title = "$151 - $200";
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

// Back Button
