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
      city: 'Kyiv, UA'
    };
    this.host = host;
    this.appBackground = new AppBackground({
      day: true
    });
    this.search = new Search();
    this.currentForecast = new CurrentForecast();
    this.dailyForecast = new DailyForecast();
  }

  async onSubmit(city) {
    let data = await getForecast(city);
    this.updateState(city, data);
    console.log(this.state);
  }

  updateState(city, data) {
    this.state.city = city;
    this.state.data = data;
    this.render();
  }

  render() {
    this.currentForecast.render(this.host, this.state.data);
    this.dailyForecast.render(this.host, this.state.data);
  }

  init() {
    let fragment = document.createDocumentFragment();
    fragment.appendChild(this.appBackground.render());
    fragment.appendChild(
      this.search.update({ onSubmit: this.onSubmit.bind(this) })
    );
    //fragment.appendChild(this.currentForecast.render());
    //fragment.appendChild(this.dailyForecast.render());
    this.host.appendChild(fragment);
  }
}

export default App;
