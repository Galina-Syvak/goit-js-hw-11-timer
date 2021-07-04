import './sass/main.scss';
import { CountdownTimer } from './js/timer';

const timer = new CountdownTimer('#timer-1', new Date('Jul 17, 2021'));
timer.start();
