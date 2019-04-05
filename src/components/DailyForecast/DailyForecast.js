import './DailyForecast.scss';
import { Component } from '../../Samsklepav';
import DailyForecastModel from './Model';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true
    };
    this.host = document.createElement('div');
    this.host.setAttribute('class', 'daily-forecast');
  }

  createModel(data) {
    const hourlyData = data[0].data;
    const dailyData = data[1].data;
    let DailyForecastData = dailyData.map(day => new DailyForecastModel(day));
    return DailyForecastData;
  }

  forecastHtml(weather) {
    console.log(weather);
    const {
      humidity,
      precip,
      windDirection,
      windSpeed,
      weatherIcon,
      tempMax,
      tempMin
    } = weather;

    return `<button class="daily-forecast-button">
              <div class="daily-forecast-day">tuesday</div>
              <div class="daily-forecast-col">
                <div class="daily-forecast-humidity">icon ${humidity}%</div>
                <div class="daily-forecast-precip">icon ${precip}mm</div>
              </div>
              <div class="daily-forecast-col">
                <div class="daily-forecast-wind-icon">icon</div>
                <div class="daily-forecast-wind">${windSpeed}<span>m/s</span></div>
              </div>
              <div class="daily-forecast-col">
                <div class="daily-forecast-weather-icon">icon</div>
                <div class="daily-forecast-temperature">${tempMax}</div>
              </div>
            </button>`;
  }

  render(host, rawData) {
    let dailyData = this.createModel(rawData);
    let dailyForecast = dailyData.map(day => this.forecastHtml(day)).join('');
    this.host.innerHTML = dailyForecast;
    host.appendChild(this.host);
  }
}

export default Search;
