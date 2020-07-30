document.querySelector('#addnewcolor').addEventListener('click', (e) => {
  const newColorName = document.querySelector('#newcolorname');
  if (newColorName.value) {
    document.querySelector('.colorGrid').innerHTML += `
    <div class="form-check">
      <div class="colorOption">
        <input type="checkbox" class="form-check-input color-choice-selector" id="${newColorName.value.toLowerCase()}" />
        <label class="form-check-label" for="exampleCheck1">${
          newColorName.value
        }</label>
      </div>
    </div>
  `;
  } else {
    alert('No empty colors! 🤡');
  }
  newColorName.value = '';
});

const selectColors = () => {
  let colorList = '';
  const colorBoxes = document.querySelectorAll('.color-choice-selector');
  colorBoxes.forEach((checkbox) => {
    console.log(checkbox);
    if (checkbox.checked) {
      colorList += '"' + checkbox.id + '": "Yes"\n\t';
    }
  });
  return colorList;
};

const selectWash = () => {
  let washType = '';
  if (document.querySelector('#machine-wash').checked) {
    washType = `"washType": "Machine Washable"`;
  } else if (document.querySelector('#hand-wash').checked) {
    washType = `"washType": "Hand Washable"`;
  } else {
    washType = `"washType": "Neither"`;
  }
  return washType;
};

const selectSize = () => {
  let size = '';
  if (document.querySelector('#size-up').checked) {
    size = `"size": "Size Up"`;
  } else if (document.querySelector('#size-down').checked) {
    size = `"size": "Size Down"`;
  } else {
    size = `"size": "Neither"`;
  }
  return size;
};

const selectFit = () => {
  let fit = '';
  if (document.querySelector('#narrow').checked) {
    fit = `"fit": "Narrow"`;
  } else if (document.querySelector('#wide').checked) {
    fit = `"fit": "Wide"`;
  } else {
    fit = `"fit": "Neither"`;
  }
  return fit;
};

const selectArchType = () => {
  let archType = '';
  if (document.querySelector('#low-arch').checked) {
    archType = `"archType": "Low Arch"`;
  } else if (document.querySelector('#high-arch').checked) {
    archType = `"archType": "High Arch"`;
  } else {
    archType = `"archType": "Neither"`;
  }
  return archType;
};

const selectRequirements = () => {
  let requirements = '';
  let count = 0;
  if (document.querySelector('#plantar').checked) {
    requirements += `"plantarFascitis-friendly": "Yes"`;
    count++;
  }
  if (document.querySelector('#bonespurs').checked) {
    if (count > 0) {
      requirements += `,\n\t`;
    } else {
      requirements += `\n\t`;
    }
    requirements += `"highInstep-friendly": "Yes"`;
  }
  if (document.querySelector('#bunions').checked) {
    if (count > 0) {
      requirements += `,\n\t`;
    } else {
      requirements += `\n\t`;
    }
    requirements += `"bunion-friendly": "Yes"`;
  }
  return requirements;
};

const saveFile = () => {
  if (!confirm('Are you sure the data is correct?')) {
    alert('🤡');
    return;
  }
  // Get the data from each element on the form.
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const type = document.getElementById('type').value;
  const color = selectColors();
  const washType = selectWash();
  const size = selectSize();
  const fit = selectFit();
  const archType = selectArchType();
  const requirements = selectRequirements();
  const imageLink = document.querySelector('#image-link').value;

  // This variable stores all the data.
  let data = '\r Name: ' + name.value + ' \r\n ' + 'Price: ' + price.value;

  data = `"${type}": {
    "id": "1",
    "name": "${name}",
    "price": "${price}",
    "color": {
        ${color}
    },
    "type": "${type}",
    ${washType},
    ${size},
    ${fit},
    ${archType},
    "medicalRequirements": {
        ${requirements}
    },
    "image": "${imageLink}"
  },`;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'application/json' });
  const sFileName = `${name}.json`; // The file to save the data.

  const newLink = document.createElement('a');
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = 'none';
    document.body.appendChild(newLink);
  }

  newLink.click();
  location.reload();
};
