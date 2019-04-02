import './Search.scss';
import { Component } from '../../Samsklepav';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: true
    };
    this.host = document.createElement('div');
    this.host.classList.add('search-container');
    this.host.addEventListener('input', this.centerInput.bind(this));
    this.host.addEventListener('keyup', this.onKeyup.bind(this));
  }

  centerInput() {
    const search = document.getElementById('search');

    if (search.value.length > 0) search.classList.add('search-not-empty');
    else search.classList.remove('search-not-empty');
  }

  onKeyup() {
    if (event.keyCode == 13) {
      const city = event.target.value.trim();
      console.log(this.props);
      if (this.isValidCityName(city)) {
        this.props.onSubmit(city);
        if (!this.state.isValid) {
          this.updateState({ isValid: true });
        }
      } else {
        this.updateState({ isValid: false });
      }
    }
  }

  isValidCityName(name) {
    return !!name && !/\d/.test(name);
  }

  render() {
    return `<input id="search" 
             name="search" type="text" 
             autocomplete="off" 
             placeholder="City, place or country...">`;
  }
}

export default Search;
