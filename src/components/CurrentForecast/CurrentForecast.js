import './CurrentForecast.scss';
import { Component } from '../../Samsklepav';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true
    };
    this.host = document.createElement('div');
    this.host.setAttribute('class', 'current-forecast');
  }

  render(host, data) {
    this.host.innerHTML = `<div class="current-forecast-temperature">${
      data[0].data[0].app_temp
    }</div>
                           <div class="current-forecast-day">monday</div>`;
    host.appendChild(this.host);
  }
}

export default Search;
