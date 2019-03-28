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
    this.host.innerHTML = `<div class="current-forecast-temperature">26</div>
                           <div class="current-forecast-day">monday</div>`;
  }

  render() {
    return this.host;
  }
}

export default Search;
