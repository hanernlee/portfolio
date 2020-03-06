import React, { Component } from 'react';
import mojs from 'mo-js';

import { Color } from '../color.js';

class Burst extends Component {
  componentDidMount() {
    this._burst = new mojs.Burst({
      parent: this.root,
      count: 15,
      angle: { 0: 360 },
      children: {
        shape: 'circle',
        fill: [Color.pink, Color.green, Color.purple],
        radius: 10,
        strokeWidth: 5,
        duration: 1000,
        delay: 'stagger(0, 50)',
      },
      onComplete: function onComplete() {
        this.generate().replay();
      }
    });
    this._burst.tune().play();
  }

  componentWillUnmount() {
    this._burst.stop();
  }

  render() {
    return (<div></div>);
  }
}

export default Burst;
