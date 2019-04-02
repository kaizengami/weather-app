class Component {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this.host = null;
  }

  updateState(nextState) {
    this.state = Object.assign({}, this.state, nextState);
    this._render();
  }

  update(nextProps) {
    this.props = nextProps;
    return this._render();
  }

  _render() {
    const children = this.render();
    this.host.innerHTML = '';
    console.log(typeof children);
    if (typeof children === 'string') {
      this.host.innerHTML = children;
      console.log('children === string');
    } else if (Array.isArray(children)) {
      this.host.append(...children);
      console.log('Array.isArray(children)');
    } else {
      this.host.append(children);
      console.log('this.host.append(children);');
    }
    return this.host;
  }

  render() {}
}
export default Component;
