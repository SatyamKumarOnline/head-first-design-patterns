const WeatherData = () => {
  let temprature;
  let humidity;
  let pressure;
  const observers = [];

  const notifyObserver = () => {
    for (let i = 0; i < observers.length; i += 1) {
      observers[i].update(temprature, humidity, pressure);
    }
  };
  return {
    registerObserver: (observer) => {
      observers.push(observer);
    },
    deregisterObserver: (observer) => {
      const index = observers.findIndex(observer);
      if (index > -1) {
        observers.splice(index, 1);
      }
    },
    setMeasurement: (newTemprature, newHumidity, newPressure) => {
      temprature = newTemprature;
      humidity = newHumidity;
      pressure = newPressure;
      notifyObserver();
    },
  };
};


const TempratureObserver = () => {
  let temprature;
  const display = () => {
    console.log('temprature is: ', temprature);
  };
  return {
    update: (newTemprature) => {
      temprature = newTemprature;
      display();
    },
  };
};

const HumidityObserver = () => {
  let humidity;
  const display = () => {
    console.log('humidity is: ', humidity);
  };
  return {
    update: (newTemprature, newHumidity) => {
      humidity = newHumidity;
      display();
    },
  };
};

const weatherData = WeatherData();
const tempratureObserver = TempratureObserver();
const humidityObserver = HumidityObserver();
weatherData.registerObserver(tempratureObserver);
weatherData.registerObserver(humidityObserver);
weatherData.setMeasurement(10, 30, 40);
