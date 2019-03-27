import { Component } from '../Samsklepav';
import { AppBackground } from './AppBackground/';
import { Search } from './Search/';
import { CurrentForecast } from './CurrentForecast/';
import { DailyForecast } from './DailyForecast/';

class App extends Component {
  constructor(host) {
    super(host);
    this.state = {
      city: null
    };
    this.host = host;
    this.appBackground = new AppBackground({
      day: true
    });
    this.search = new Search({
      city: 'Kyiv' //this.state.city
    });
    this.currentForecast = new CurrentForecast();
    this.dailyForecast = new DailyForecast();
  }
  onSearchSubmit(coord, city) {
    getWeather(coord[0], coord[1])
      .then(weather => {
        city = weather.city_name;
        this.updateState({
          weather,
          coord,
          city
        });
        window.history.pushState(null, null, `?city=${weather.city_name}`);
        swapFC();
      })
      .catch(error => {
        console.log(error);
      });
  }
  updateState(data, city, period) {
    this.render();
  }

  render() {}

  init(host) {
    console.log(this.search);
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
