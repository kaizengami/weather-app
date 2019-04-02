import './scss/index.scss';
import App from './components/App';

const host = document.getElementById('main');

const app = new App(host);

app.init(host);
