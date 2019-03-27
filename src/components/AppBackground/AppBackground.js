import './AppBackground.scss';
import { Component } from '../../Samsklepav';

class AppBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: true
    };
    this.host = document.createElement('div');
    this.host.setAttribute('class', 'app-background');
  }
  updateState(nextState) {
    this.state = Object.assign({}, this.state, nextState);
    this.render();
  }
  render() {
    return this.host;
  }
}

export default AppBackground;
