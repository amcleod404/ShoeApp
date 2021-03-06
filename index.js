// UI Elements
const html = document.querySelector('#landing');
const backButton = document.querySelector('#button');
const container = document.querySelector('#media-grid');
const selectAFolder = document.querySelector('#body-text');
const byStylePage = document.querySelector('#by-style-page');
const byColorPage = document.querySelector('#by-color-page');
const byPricePage = document.querySelector('#by-price-page');
const byFitPage = document.querySelector('#by-fit-page');
const byArchTypePage = document.querySelector('#by-arch-type-page');
const bySpecialRequirementsPage = document.querySelector(
  '#by-special-requirements-page'
);
const individualShoePage = document.querySelector('#individual-shoe-page');
// const searchBar = document.querySelector('#search-bar');
// const searchPage = document.querySelector('#search-page');

let backPage = '';

// UI Animation
/** searchBar.addEventListener('keyup', async (e) => {
  e.preventDefault();
  const value = searchBar.value;
  backPage = '';
  searchPage.style.display = 'flex';
  searchPage.children[0].children[0].innerHTML = '';
  const res = await fetch('db.json');
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type } = data[item];
    searchPage.children[0].children[0].innerHTML += `
      <div class="col mb-4" style="cursor: pointer;" onclick="loadShoePage('${name}')">
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
}); */

container.addEventListener('click', (e) => {
  if (e.target.id !== 'media-grid') {
    if (e.target.id === 'by-style') {
      byStylePage.style.display = 'flex';
      loadStylePage(byStylePage);
    } else if (e.target.id === 'by-color') {
      byColorPage.style.display = 'flex';
      loadColorPage(byColorPage);
    } else if (e.target.id === 'by-special-requirements') {
      bySpecialRequirementsPage.style.display = 'flex';
      loadSpecialRequirementsPage(bySpecialRequirementsPage);
    } else if (e.target.id === 'by-price') {
      byPricePage.style.display = 'flex';
      loadPricePage(byPricePage);
    } else if (e.target.id === 'by-fit') {
      byFitPage.style.display = 'flex';
      loadFitPage(byFitPage);
    } else if (e.target.id === 'by-arch-type') {
      byArchTypePage.style.display = 'flex';
      loadArchTypePage(byArchTypePage);
    }
    container.style.display = 'none';
    selectAFolder.style.display = 'none';
    backButton.style.display = 'block';
  }
});

const goBack = () => {
  switch (backPage) {
    // Selection Pages
    case 'style':
      individualShoePage.innerHTML = '';
      byStylePage.style.display = 'flex';
      byStylePage.children[1].children[0].innerHTML = '';
      loadStylePage(byStylePage);
      byStylePage.children[0].innerText = 'By Style';
      backPage = '';
      break;
    case 'color':
      individualShoePage.innerHTML = '';
      byColorPage.style.display = 'flex';
      byColorPage.children[1].children[0].innerHTML = '';
      loadColorPage(byColorPage);
      byColorPage.children[0].innerText = 'By Color';
      backPage = '';
      break;
    case 'special-requirements':
      individualShoePage.innerHTML = '';
      bySpecialRequirementsPage.style.display = 'flex';
      bySpecialRequirementsPage.children[1].children[0].innerHTML = '';
      loadSpecialRequirementsPage(bySpecialRequirementsPage);
      bySpecialRequirementsPage.children[0].innerText = 'By Problem Type';
      backPage = '';
      break;
    case 'price':
      individualShoePage.innerHTML = '';
      byPricePage.style.display = 'flex';
      byPricePage.children[1].children[0].innerHTML = '';
      loadPricePage(byPricePage);
      byPricePage.children[0].innerText = 'By Price';
      backPage = '';
      break;
    case 'fit':
      individualShoePage.innerHTML = '';
      byFitPage.style.display = 'flex';
      byFitPage.children[1].children[0].innerHTML = '';
      loadFitPage(byFitPage);
      byFitPage.children[0].innerText = 'By Fit';
      backPage = '';
      break;
    case 'arch-type':
      individualShoePage.innerHTML = '';
      byArchTypePage.style.display = 'flex';
      byArchTypePage.children[1].children[0].innerHTML = '';
      loadArchTypePage(byArchTypePage);
      byArchTypePage.children[0].innerText = 'By Arch-Type';
      backPage = '';
      break;
    //
    default:
      container.style.display = 'grid';
      selectAFolder.style.display = 'flex';
      backButton.style.display = 'none';
      byStylePage.style.display = 'none';
      byStylePage.children[1].children[0].innerHTML = '';
      byColorPage.style.display = 'none';
      byColorPage.children[1].children[0].innerHTML = '';
      bySpecialRequirementsPage.style.display = 'none';
      bySpecialRequirementsPage.children[1].children[0].innerHTML = '';
      byPricePage.style.display = 'none';
      byPricePage.children[1].children[0].innerHTML = '';
      byFitPage.style.display = 'none';
      byFitPage.children[1].children[0].innerHTML = '';
      byArchTypePage.style.display = 'none';
      byArchTypePage.children[1].children[0].innerHTML = '';
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
      </div>
    </div>
  </div>
  `;
};

const loadColorPage = (page) => {
  const colors = [
    'black',
    'white',
    'coral',
    'tobacco',
    'red',
    'navy',
    'denim',
    'linen',
    'silver',
    'gold',
    'stripe',
    'pink',
    'orange',
    'turquoise',
    'lime',
    'fuchsia',
    'pearla',
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
        <h5 class="card-title">Plantar Fascitis </h5>
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
        src="./images/cecilia.jpg"
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
        src="./images/gigi.jpg"
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
        src="./images/backless-cannon.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$126 - $150</h5>
      </div>
    </div>
  </div>
  <div class="col mb-4 style-tile" onclick="loadPriceShoes('150to200')">
    <div class="card h-100">
      <img
        src="./images/aiken.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">$151 - $200</h5>
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
        src="./images/benjamin.jpg"
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
        src="./images/kaylee.jpg"
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
        src="./images/collins.jpeg"
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
        src="./images/med.jpg"
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
  backPage = 'style';
  byStylePage.children[1].children[0].innerHTML = '';
  byStylePage.children[0].innerText = style + 's';
  const res = await fetch('db.json');
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type } = data[item];
    if (type.includes(style)) {
      byStylePage.children[1].children[0].innerHTML += `
      <div class="col mb-4" style="cursor: pointer;" onclick="loadShoePage('${name}')">
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
  backPage = 'color';
  byColorPage.children[1].children[0].innerHTML = '';
  byColorPage.children[0].innerText =
    searchedColor.charAt(0).toUpperCase() + searchedColor.slice(1);
  const res = await fetch('db.json');
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color } = data[item];
    if (JSON.stringify(color).includes(searchedColor.toLowerCase())) {
      byColorPage.children[1].children[0].innerHTML += `
      <div class="col mb-4" style="cursor: pointer;" onclick="loadShoePage('${name}')">
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
  backPage = 'special-requirements';
  let title = '';
  switch (requirement) {
    case 'highInstep-friendly':
      title = 'Bone Spur';
      break;
    case 'plantarFascitis-friendly':
      title = 'Plantar Fascitis';
      break;
    case 'bunion-friendly':
      title = 'Bunion';
      break;
    default:
      break;
  }
  bySpecialRequirementsPage.children[1].children[0].innerHTML = '';
  bySpecialRequirementsPage.children[0].innerText = title;
  const res = await fetch('db.json');
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color, medicalRequirements } = data[item];
    if (requirement in medicalRequirements) {
      bySpecialRequirementsPage.children[1].children[0].innerHTML += `
      <div class="col mb-4" style="cursor: pointer;" onclick="loadShoePage('${name}')">
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
  backPage = 'price';
  let minPrice = 50;
  let maxPrice = 100;
  let title = '';
  switch (price) {
    case '50to100':
      title = '$50 - $100';
      break;
    case '100to125':
      title = '$101 - $125';
      minPrice = 101;
      maxPrice = 125;
      break;
    case '125to150':
      title = '$126 - $150';
      minPrice = 126;
      maxPrice = 150;
      break;
    case '150to200':
      title = '$151 - $200';
      minPrice = 151;
      maxPrice = 200;
      break;
    default:
      break;
  }
  byPricePage.children[1].children[0].innerHTML = '';
  byPricePage.children[0].innerText = title;
  const res = await fetch('db.json');
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color, medicalRequirements } = data[item];
    if (parseInt(price) <= maxPrice && parseInt(price) >= minPrice) {
      byPricePage.children[1].children[0].innerHTML += `
      <div class="col mb-4" style="cursor: pointer;" onclick="loadShoePage('${name}')">
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
  backPage = 'fit';
  let title = '';
  switch (searchedFit) {
    case 'narrow':
      title = 'Narrow';
      break;
    case 'wide':
      title = 'Wide';
      break;
    case 'neither':
      title = 'Neither Wide Nor Narrow';
      break;
    default:
      break;
  }
  byFitPage.children[1].children[0].innerHTML = '';
  byFitPage.children[0].innerText = title;
  const res = await fetch('db.json');
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color, fit } = data[item];
    if (fit.toLowerCase() === searchedFit) {
      byFitPage.children[1].children[0].innerHTML += `
      <div class="col mb-4" style="cursor: pointer;" onclick="loadShoePage('${name}')">
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
  backPage = 'arch-type';
  let title = '';
  switch (searchedArchType) {
    case 'high arch':
      title = 'High';
      break;
    case 'low arch':
      title = 'Low';
      break;
    default:
      break;
  }
  byArchTypePage.children[1].children[0].innerHTML = '';
  byArchTypePage.children[0].innerText = title;
  const res = await fetch('db.json');
  const data = await res.json();
  for (const item in data) {
    const { name, price, image, type, color, fit, archType } = data[item];
    if (archType.toLowerCase() === searchedArchType) {
      byArchTypePage.children[1].children[0].innerHTML += `
      <div class="col mb-4" style="cursor: pointer;" onclick="loadShoePage('${name}')">
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

/***** INDIVIDUAL SHOE PAGE FUNCTIONS *****/

const loadShoePage = async (searchedName) => {
  const lowerCaseName = searchedName.toLowerCase();

  // Clear the page
  byStylePage.style.display = 'none';
  byStylePage.children[1].children[0].innerHTML = '';
  byColorPage.style.display = 'none';
  byColorPage.children[1].children[0].innerHTML = '';
  bySpecialRequirementsPage.style.display = 'none';
  bySpecialRequirementsPage.children[1].children[0].innerHTML = '';
  byPricePage.style.display = 'none';
  byPricePage.children[1].children[0].innerHTML = '';
  byFitPage.style.display = 'none';
  byFitPage.children[1].children[0].innerHTML = '';
  byArchTypePage.style.display = 'none';
  byArchTypePage.children[1].children[0].innerHTML = '';

  individualShoePage.style.display = 'flex';

  const res = await fetch('db.json');
  const data = await res.json();
  for (const item in data) {
    const {
      name,
      price,
      image,
      type,
      color,
      medicalRequirements,
      washType,
      fit,
      size,
    } = data[item];
    let colorList = '<ul class="text-muted">';
    for (let item in color) {
      item = '' + item;
      while (item.includes('-')) {
        item = item.replace('-', ' ');
      }

      item = item
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      item = item
        .split('/')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('/');

      colorList += `<li>${item.charAt(0).toUpperCase() + item.slice(1)}</li>`;
    }
    colorList += '</ul>';
    let specialReqList = '<p class="card-text">';
    for (let req in medicalRequirements) {
      if (req === 'plantarFascitis-friendly') {
        specialReqList += `<span class="badge badge-primary" style="margin-right: 10px;">Plantar Fascitis Friendly</span>`;
      }
      if (req === 'bunion-friendly') {
        specialReqList += `<span class="badge badge-success" style="margin-right: 10px;">Bunion Friendly</span>`;
      }
      if (req === 'highInstep-friendly') {
        specialReqList += `<span class="badge badge-info" style="margin-right: 10px;">Bone Spur Friendly</span>`;
      }
    }

    if (washType) {
      specialReqList += `<span class="badge badge-danger" style="margin-right: 10px;">${washType}</span>`;
    }
    if (size.toLowerCase() !== 'neither') {
      specialReqList += `<span class="badge badge-warning" style="margin-right: 10px;">${size}</span>`;
    }
    if (fit.toLowerCase() !== 'neither') {
      specialReqList += `<span class="badge badge-dark" style="margin-right: 10px;">${fit}</span>`;
    }

    specialReqList += '</p>';
    if (lowerCaseName === name.toLowerCase()) {
      individualShoePage.innerHTML += `
      <div class="card mb-3" style="max-width: 65%;">
        <img src="${image}" class="card-img-top" alt="..." style="border-bottom: 1px solid lightgrey;">
        <div class="card-body">
          <h3 class="card-title">${name}</h5>
          <h5 class="card-title">$${price}</h5>
          <p class="card-text">
            Current color options:
            ${colorList}
          </p>
          ${specialReqList}
        </div>
      </div>
    `;
    }
  }
};

/***** END INDIVIDUAL SHOE PAGE FUNCTIONS *****/
