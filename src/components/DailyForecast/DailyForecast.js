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
    this.host.innerHTML = 'DailyForecast asd asd asd asdasdasd';
  }

  render() {
    return this.host;
  }
}

export default Search;
