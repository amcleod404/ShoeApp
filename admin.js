const verification = (name, pass) => {
  if (String(name) === "test" && String(pass) === "noseplug") {
    window.location.href = "inventory.html";
  }
};
