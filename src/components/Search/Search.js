import './Search.scss';
import { Component } from '../../Samsklepav';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: true
    };

    this.host = document.createElement('input');
    this.host.setAttribute('id', 'search');
    this.host.setAttribute('name', 'search');
    this.host.setAttribute('type', 'text');
    this.host.setAttribute('autocomplete', 'off');
    this.host.setAttribute('placeholder', 'City, place or country...');
    this.host.addEventListener('input', this.centerInput.bind(this));
    this.host.addEventListener('keyup', this.onKeyup.bind(this));
  }

  centerInput() {
    //dom.search.classList.remove('search-active');
    //favorite.iconHide();
    if (this.host.value.length > 0) this.host.classList.add('search-not-empty');//this.host.style.left = '50%';
    //else this.host.style.left = 'calc(50% - 160px)';
    else this.host.classList.remove('search-not-empty');
  }

  onKeyup() {
    //console.log(this.state);
    if (event.keyCode == 13) {
      const city = event.target.value.trim();
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
    return this.host;
  }
}

export default Search;
