const saveFile = () => {
  // Get the data from each element on the form.
  const name = document.getElementById("name");
  const price = document.getElementById("price");
  const type = document.getElementById("price");
  const color = document.getElementById("price");
  const machineWash = document.getElementById("price");

  // This variable stores all the data.
  const data = "\r Name: " + name.value + " \r\n " + "Price: " + price.value;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = "formData.txt"; // The file to save the data.

  const newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};
