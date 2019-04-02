import './DailyForecast.scss';
import { Component } from '../../Samsklepav';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true
    };
    this.host = document.createElement('div');
    this.host.setAttribute('class', 'daily-forecast');
  }

  render(host) {
    this.host.innerHTML = `<button class="daily-forecast-button">
                            <div class="daily-forecast-day">tuesday</div>
                            <div class="daily-forecast-col">
                              <div class="daily-forecast-humidity">icon 57%</div>
                              <div class="daily-forecast-precip">icon 0mm</div>
                            </div>
                            <div class="daily-forecast-col">
                              <div class="daily-forecast-wind-icon">icon</div>
                              <div class="daily-forecast-wind">3<span>m/s</span></div>
                            </div>
                            <div class="daily-forecast-col">
                              <div class="daily-forecast-weather-icon">icon</div>
                              <div class="daily-forecast-temperature">17</div>
                            </div>
                          </button>`;
    host.appendChild(this.host);
  }
}

export default Search;
