import 'zone.js';
import { mount } from './mount';

const rootElement = document.getElementById('root');
if (rootElement) {
  mount(rootElement);
}
