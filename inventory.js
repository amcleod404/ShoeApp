import { writeFile } from "fs";

var shoeObject = {};

const submitData = (name, price) => {
  shoeObject = {
    name: name,
    price: price,
  };

  writeFile("db.json", JSON.stringify(shoeObject, null, 4), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been modified");
  });
};
