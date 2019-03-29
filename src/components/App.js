import { Component } from '../Samsklepav';
import { getForecast } from '../utils/api';
import { AppBackground } from './AppBackground/';
import { Search } from './Search/';
import { CurrentForecast } from './CurrentForecast/';
import { DailyForecast } from './DailyForecast/';

class App extends Component {
  constructor(host) {
    super(host);
    this.state = {
      data: null,
      city: null
    };
    this.host = host;
    this.appBackground = new AppBackground({
      day: true
    });
    this.search = new Search({
      onSubmit: this.onSubmit.bind(this)
    });
    this.currentForecast = new CurrentForecast();
    this.dailyForecast = new DailyForecast();
  }
  async onSubmit(city) {
    let weather = await getForecast(city);
    this.updateState(city, weather);
    console.log(weather);
  }
  updateState(city, data) {
    this.state.city = city;
    this.state.data = data;
    console.log(this.state);
    this.render();
  }

  render() {}

  init(host) {
    let fragment = document.createDocumentFragment();
    fragment.appendChild(this.appBackground.render());
    fragment.appendChild(this.search.render());
    fragment.appendChild(this.currentForecast.render());
    fragment.appendChild(this.dailyForecast.render());
    host.appendChild(fragment);

    //host.innerHTML = this.appBackground.render() + this.search.render();
  }
}

export default App;
