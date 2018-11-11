const expresso = require('./expresso');
const mocha = require('./mocha');
const houseBlend = require('./houseBlend');

const starBuzzCoffee = () => {
  const expressoCoffee = expresso();
  console.log(`cost of expresso coffee ${expressoCoffee.cost()} ${expressoCoffee.description()}`);

  const mochaCoffee = mocha(expressoCoffee);
  console.log(`cost of mocha coffee ${mochaCoffee.cost()} ${mochaCoffee.description()}`);

  const houseBlendCoffee = houseBlend();
  console.log(`cost of house blend coffee ${houseBlendCoffee.cost()} ${houseBlendCoffee.description()}`);

  const mochaCoffeeWithHouseBlend = mocha(houseBlendCoffee);
  console.log(`cost of mocha coffee ${mochaCoffeeWithHouseBlend.cost()} ${mochaCoffeeWithHouseBlend.description()}`);
};

starBuzzCoffee();
