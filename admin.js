const verification = (name, pass) => {
  if (String(name) === 'admin' && String(pass) === 'noseplug') {
    window.location.href = 'inventory.html';
  }
};
