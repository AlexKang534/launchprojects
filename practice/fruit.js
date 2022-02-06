let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
  tomato: "Fruit",
};
function selectFruits(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === "Fruit") {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}

console.log(selectFruits(produce)); // => {apple: "Fruit", pear: "Fruit"}
