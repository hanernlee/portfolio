import mojs from 'mo-js';
import { Color } from '../color.js';

export const swirl = new mojs.ShapeSwirl({
  fill: Color.green,
  y: { 0: 100 },
  x: { 100: -500 },
  radius: 8,
  swirlFrequency: 15,
  duration: 2000,
  repeat: 999
});

export const swirl1 = new mojs.ShapeSwirl({
  fill: Color.pink,
  y: { 0: -300 },
  x: { 100: -200 },
  radius: 8,
  swirlFrequency: 20,
  duration: 2500,
  repeat: 999
});

export const swirl3 = new mojs.ShapeSwirl({
  fill: Color.white,
  y: { 0: 250 },
  x: { 100: -250 },
  radius: 8,
  swirlFrequency: 10,
  duration: 1000,
  repeat: 999
});

export const swirl4 = new mojs.ShapeSwirl({
  fill: Color.purple,
  y: { 0: -250 },
  x: { 0: 100 },
  radius: 5,
  swirlFrequency: 10,
  duration: 2000,
  repeat: 999
});
