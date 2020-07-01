const submitButton = document.querySelector("#submit");

const verification = (name, pass) => {
  if (String(name) === "test" && String(pass) === "noseplug") {
    window.location.href = "inventory.html";
  }
};
