import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Motion, spring } from 'react-motion';

import { swirl, swirl1, swirl3, swirl4 , swirl5, swirl6 } from './animation';
import { styles } from './styles';

const config = { stiffness: 200, damping: 6 };
const toCSS = (translationY) => ({
  transform: `translate(-50%, ${translationY}%)`,
});

class Home extends Component {
  componentDidMount() {
    swirl.generate().replay();
    swirl1.generate().replay();
    swirl3.generate().replay();
    swirl4.generate().replay();
    swirl5.generate().replay();
    swirl6.generate().replay();
  }

  componentWillUnmount() {
    swirl.stop();
    swirl1.stop();
    swirl3.stop();
    swirl4.stop();
    swirl5.stop();
    swirl6.stop();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Motion
           defaultStyle={{ translateY: -300 }}
           style={{ translateY: spring(-50, config) }}
        >
          {
            (value) =>
              <div className={classes.title} style={toCSS(value.translateY)}>
                <span id="title">Christopher Lee</span>
                <span id="headline" className={classes.headline}>Software Developer</span>
              </div>
          }
        </Motion>
      </div>
    )
  }
}

export default injectSheet(styles)(Home);
