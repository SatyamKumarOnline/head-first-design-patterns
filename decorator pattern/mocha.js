const mocha = (coffee) => {
  const baseCoffee = coffee;
  return {
    cost: () => baseCoffee.cost() + 1.00,
    description: () => `${baseCoffee.description()} + milk`,
  };
};

module.exports = mocha;
