import './Search.scss';
import { Component } from '../../Samsklepav';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      city: null
    };
    this.host = document.createElement('input');
    this.host.setAttribute('id', 'search');
    this.host.setAttribute('name', 'keyword');
    this.host.setAttribute('type', 'text');
    this.host.setAttribute('autocomplete', 'off');
    this.host.setAttribute('placeholder', 'City, place or country...');
    this.host.addEventListener('input', this.centerInput.bind(this));
    this.host.addEventListener('keyup', this.onKeyup.bind(this));
  }

  centerInput() {
    //dom.search.classList.remove('search-active');
    //favorite.iconHide();
    if (this.host.value.length > 0) this.host.style.left = '50%';
    else this.host.style.left = 'calc(50% - 160px)';
  }

  onKeyup() {
    //console.log(this.state);
    if (event.keyCode == 13) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return this.host;
  }
}

export default Search;
