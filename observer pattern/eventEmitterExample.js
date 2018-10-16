const EventEmitter = require('events');

class WeatherData extends EventEmitter {
  constructor(temprature, humidity, pressure) {
    super();
    this.temprature = temprature;
    this.humidity = humidity;
    this.pressure = pressure;
  }

  setMeasurement(newTemprature, newHumidity, newPressure) {
    this.temprature = newTemprature;
    this.humidity = newHumidity;
    this.pressure = newPressure;
    this.emit('update', { temprature: this.temprature, humidity: this.humidity, pressur: this.pressure });
  }
}

class TempratureObserver {
  constructor() {
    this.temprature = null;
  }

  display() {
    console.log('temprature is: ', this.temprature);
  }

  update(newTemprature) {
    this.temprature = newTemprature;
    this.display();
  }
}

class HumidityObserver {
  constructor() {
    this.humidity = null;
  }

  display() {
    console.log('humidity is: ', this.humidity);
  }

  update(newhumidity) {
    this.humidity = newhumidity;
    this.display();
  }
}

const weatherData = new WeatherData(10, 20, 30);
const tempratureObserver = new TempratureObserver();
const humidityObserver = new HumidityObserver();
weatherData.on('update', (response) => {
  tempratureObserver.update(response.temprature);
  humidityObserver.update(response.humidity);
});
weatherData.setMeasurement(20, 30, 40);
weatherData.setMeasurement(30, 40, 50);
