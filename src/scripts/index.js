import '../scss/main.scss';
import * as bootstrap from 'bootstrap';
import './animation/animate.js';
import { swRegister } from './utils';

document.addEventListener('DOMContentLoaded', async () => {
  await swRegister();
});

