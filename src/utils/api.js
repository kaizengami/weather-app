const api = {
  key: '&key=4e4006dc280346f9ab2a2471ffc67574',
  //currentWeatherLink : 'https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=',
  two_day_hourly_link: 'https://api.weatherbit.io/v2.0/forecast/hourly?city=',
  five_day_link: 'https://api.weatherbit.io/v2.0/forecast/3hourly?city=',
  daily_link: 'https://api.weatherbit.io/v2.0/forecast/daily?city=', // 16 Day Forecast
  metric: '&units=M',
  fahrenheit: '&units=I',
  scientific: '&units=S'
};

let settings = {
  temperature: api.metric,
  weather_link: api.two_day_hourly_link,
  wind: 'm/s',
  temp_units: '°C',
  fahrenheit: '°F',
  celsius: '°C'
};

const search = () => {
  fetch(
    settings.weather_link + this.user_search + settings.temperature + api.key
  )
    .then(x => {
      if (x.status === 204) errors.notFound();
      else if (x.status === 429) errors.apiLimit();
      else return x.json();
    })
    .then(weather => {
      if (!weather) return;
      else {
        this.data = weather;
        this.render(weather);
        favorite.checkCityInList();
        favorite.checkEmptyList();
      }
    })
    .catch(err => console.log('Fetch Error :', err));
};
