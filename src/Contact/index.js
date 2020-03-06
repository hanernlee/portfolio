import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { StaggeredMotion, Motion, spring } from 'react-motion';

import { swirl, swirl1, swirl3, swirl4 } from './animation';
import { styles } from './styles';

const config = { stiffness: 200, damping: 10 };
const toCSS = (translationY) => ({
  transform: `translateY(${translationY}px)`
});

class Contact extends Component {
  componentDidMount() {
    swirl.generate().replay();
    swirl1.generate().replay();
    swirl3.generate().replay();
    swirl4.generate().replay();
  }

  componentWillUnmount() {
    swirl.stop();
    swirl1.stop();
    swirl3.stop();
    swirl4.stop();
  }

  render() {
    const { classes } = this.props;
    const social = [
      {
        icon: 'github-alt',
        socialLink: 'https://github.com/hanernlee',
      },
      {
        icon:'linkedin',
        socialLink: 'https://linkedin.com/in/hanernlee',
      },
      {
        icon:'twitter',
        socialLink: 'https://twitter.com/hanernlee',
      },
      {
        icon:'envelope',
        socialLink: 'mailto:hanernlee@gmail.com',
      }
    ];

    return (
      <div className={classes.baseContact}>
        <Motion
           defaultStyle={{ translateY: -1000 }}
           style={{ translateY: spring(0, config) }}
        >
          {
            (value) =>
              <div className={classes.about} style={toCSS(value.translateY)}>
                <div>
                  <div className={classes.greeting}>
                    <div className={classes.profileImage}></div>
                    <div>{"Hi, I'm "}<span className={classes.green}>Chris</span>.</div>
                  </div>
                  <div className={classes.profileDesc}>
                    I am a <span className={classes.purple}>Melbourne-based</span> <span className={classes.pink}>Software Developer</span> with a huge passion for crafting responsive <span className={classes.purple}>mobile</span> & <span className={classes.purple}>web applications</span>.
                  </div>
                  <div className={classes.profileDesc}>
                    Driven by passion and curiosity, I spend most of my free time exploring <span className={classes.green}>different technologies, software engineering practices and design patterns</span>. <span className={classes.purple}>New experiences</span> & <span className={classes.purple}>challenges</span> are things I constantly look forward to. Feel free to get in touch.
                  </div>
                </div>
              </div>
          }
        </Motion>
        <StaggeredMotion
          defaultStyles={[{y: -500}, {y: -500}, {y: -500}, {y: -500}]}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              ? {y: spring(0, config)}
              : {y: spring(prevInterpolatedStyles[i - 1].y, config)}
          })}>
          {interpolatingStyles =>
            <div className={classes.socialContainer}>
              {interpolatingStyles.map((style, i) =>
                  <a target="_blank" href={social[i].socialLink} rel="noopener noreferrer" key={i} style={toCSS(style.y)} className={classes.social}>
                    <i className={`fa fa-${social[i].icon} fa-2x`} />
                  </a>
                )
              }
            </div>
          }
        </StaggeredMotion>
      </div>
    )
  }
}

export default injectSheet(styles)(Contact);
