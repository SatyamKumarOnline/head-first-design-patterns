// JS does not have interfaces. Instead what is use is duck typing.
// Instead we have these individual methodsthat we can use to compose the type of duck we want.

const duck = () => ({
  // Here duck is using a module pattern.
  // This of this as a "base class" where all the common methods can be defined
  swim: () => {
    console.log('i can swim');
  },
  display: () => {
    console.log('i am a basic duck');
  },
});

// below are the implementation details of duck behavior. Any new behavior can come at any time
// without affecting anything

const flyWithWings = () => {
  console.log('i fly with wings');
};

const flyNoWay = () => {
  console.log('i cannot fly');
};

const quack = () => {
  console.log('i quack');
};

const muteQuack = () => {
  console.log(' i cannot quack');
};

// This is object composition. mallardDuck is composed by individually selecting its properties.
// see how we can easily override the display method.

const mallardDuck = Object.assign({}, { ...duck() }, { speak: quack }, { fly: flyWithWings }, { display: () => { console.log('i am a mallard duck'); } });

mallardDuck.display();
mallardDuck.speak();
mallardDuck.swim();
mallardDuck.fly();


// We can do dynamic assignement at any given ponint of time.
mallardDuck.fly = flyNoWay;
mallardDuck.fly();

// Another example

const modelDuck = Object.assign({}, { duck }, { speak: muteQuack }, { fly: flyNoWay }, { display: () => { console.log('i am a model duck'); } });

modelDuck.display();
modelDuck.speak();
modelDuck.duck().swim();
modelDuck.fly();
