var shoeObject = {};
const http = new easyHTTP();

const submitData = (name, price) => {
  shoeObject = {
    name: name,
    price: price,
  };

  console.log(shoeObject);

  http.post('deleteshit.json', shoeObject, function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  });
};

const post = (url, data) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
