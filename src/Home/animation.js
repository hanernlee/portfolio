import mojs from 'mo-js';
import { Color } from '../color.js';

export const swirl = new mojs.ShapeSwirl({
  fill: Color.green,
  top: '90%',
  left: '95%',
  y: { 0: -300 },
  x: { 0: -500 },
  radius: 8,
  swirlFrequency: 15,
  duration: 1000,
  repeat: 999
});

export const swirl1 = new mojs.ShapeSwirl({
  fill: Color.pink,
  top: '90%',
  left: '93%',
  y: { 0: -300 },
  x: { 0: -200 },
  radius: 8,
  swirlFrequency: 20,
  duration: 1500,
  repeat: 999
});

export const swirl3 = new mojs.ShapeSwirl({
  fill: Color.white,
  top: '90%',
  left: '94%',
  y: { 0: -250 },
  x: { 0: -250 },
  radius: 8,
  swirlFrequency: 10,
  duration: 1000,
  repeat: 999
});

export const swirl4 = new mojs.ShapeSwirl({
  fill: Color.purple,
  top: '90%',
  left: '95%',
  y: { 0: -250 },
  x: { 0: -250 },
  radius: 15,
  swirlFrequency: 20,
  duration: 500,
  repeat: 999
});

export const swirl5 = new mojs.ShapeSwirl({
  fill: Color.lightBlue,
  top: '90%',
  left: '95%',
  y: { 0: -300 },
  x: { 0: -500 },
  radius: 10,
  swirlFrequency: 5,
  duration: 500,
  repeat: 999
});

export const swirl6 = new mojs.ShapeSwirl({
  fill: Color.pink,
  top: '90%',
  left: '95%',
  y: { 0: -350 },
  x: { 0: -450 },
  radius: 10,
  swirlFrequency: 10,
  duration: 1000,
  repeat: 999
});
