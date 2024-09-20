import { root } from './element';
import { createEnd } from './module/endBtn';
import { createStart } from './module/startBtn';

document.addEventListener('DOMContentLoaded', (): void => {
  root.appendChild(createStart());
  root.appendChild(createEnd());
});
