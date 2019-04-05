class DailyForecast {
  constructor(data) {
    //this.dayOfWeek = dayOfWeek(data.datetime);
    //this.dayOfMonth = dayOfMonth(data.datetime);
    this.humidity = Math.round(data.rh);
    this.precip = Math.round(data.precip);
    this.windDirection = data.wind_dir;
    this.windSpeed = Math.round(data.wind_spd);
    this.weatherIcon = this.weatherIcon(data);
    this.tempMax = Math.round(data.max_temp);
    this.tempMin = Math.round(data.min_temp);
  }
  dayOfWeek(datetime) {}
  dayOfMonth(datetime) {}
  weatherIcon(icon) {
    let time;
    if (icon.pod) time = icon.pod == 'd' ? 'day' : 'night';
    else time = 'day';
    switch (icon.weather.code.toString()) {
      case '200':
        return 'wi-' + time + '-storm-showers'; //Thunderstorm with light rain
      case '201':
        return 'wi-' + time + '-storm-showers'; //Thunderstorm with rain
      case '202':
        return 'wi-' + time + '-thunderstorm'; //Thunderstorm with heavy rain
      case '230':
        return 'wi-' + time + '-lightning'; //Thunderstorm with light drizzle
      case '231':
        return 'wi-lightning'; //Thunderstorm with light drizzle
      case '232':
        return 'wi-lightning'; //Thunderstorm with heavy drizzle
      case '233':
        return 'wi-lightning'; //Thunderstorm with Hail
      case '300':
        return 'wi-' + time + '-showers'; //Light Drizzle
      case '301':
        return 'wi-' + time + '-showers'; //Drizzle
      case '302':
        return 'wi-' + time + '-showers'; //Heavy Drizzle
      case '500':
        return 'wi-' + time + '-rain'; //Light Rain
      case '501':
        return 'wi-' + time + '-rain'; //Moderate Rain
      case '502':
        return 'wi-rain'; //Heavy Rain
      case '511':
        return 'wi-rain'; //Freezing rain
      case '520':
        return 'wi-' + time + '-showers'; //Light shower rain
      case '521':
        return 'wi-' + time + '-showers'; //Shower rain
      case '522':
        return 'wi-showers'; //Heavy shower rain
      case '600':
        return 'wi-' + time + '-snow'; //Light snow
      case '601':
        return 'wi-snow'; //Snow
      case '602':
        return 'wi-snowflake-cold'; //Heavy Snow
      case '610':
        return 'wi-' + time + '-sleet'; //Mix snow/rain
      case '611':
        return 'wi-sleet'; //Sleet
      case '612':
        return 'wi-sleet'; //Heavy sleet
      case '621':
        return 'wi-' + time + '-sleet'; //Snow shower
      case '622':
        return 'wi-snowflake-cold'; //Heavy snow shower
      case '623':
        return 'wi-snow-wind'; //Flurries
      case '700':
        return 'wi-' + time + '-fog'; //Mist
      case '711':
        return 'wi-smog'; //Smoke
      case '721':
        return 'wi-' + time + '-fog'; //Haze
      case '731':
        return 'wi-dust'; //Sand/dust
      case '741':
        return 'wi-' + time + '-fog'; //Fog
      case '751':
        return 'wi-' + time + '-fog'; //Freezing Fog
      case '800':
        if (time == 'day') return 'wi-day-sunny';
        //Clear sky
        else return 'wi-night-clear'; //Clear sky
      case '801':
        return 'wi-' + time + '-cloudy'; //Few clouds
      case '802':
        return 'wi-' + time + '-cloudy'; //Scattered clouds
      case '803':
        return 'wi-' + time + '-cloudy'; //Broken clouds
      case '804':
        return 'wi-cloudy'; //Overcast clouds
      case '900':
        return 'wi-na'; //Unknown Precipitation
      default:
        return 'na'; //icon code not found
    }
  }
}

export default DailyForecast;
