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
      city: 'Kyiv', //this.state.city
      onSubmit: this.onSubmit.bind(this)
    });
    this.currentForecast = new CurrentForecast();
    this.dailyForecast = new DailyForecast();
  }
  onSubmit(city) {
    console.log('submit!');
    // getWeather(city).then((data) => {
    //     this.updateState(data, city, 'today')
    // }).catch(function(err) {
    //     alert('Something went wrong with weather server. Try again, please', err);
    // });
  }
  updateState(data, city, period) {
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
