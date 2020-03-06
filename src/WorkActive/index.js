import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { StaggeredMotion, Motion, spring } from 'react-motion';

import { styles } from './styles';

const config = { stiffness: 200, damping: 10 };
const toCSS = (scale) => ({
  transform: `scale3d(${scale}, ${scale}, ${scale}) translate(-50%, -50%)`,
});

const toLinkCSS = (translationY) => ({
  transform: `translateY(${translationY}px)`,
});

class WorkMini extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleWorkActiveClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleWorkActiveClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleExit = () => {
    this.props.removeWork();
  }

  handleWorkActiveClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.removeWork();
    }
  }

  render() {
    const { classes, work } = this.props;
    const workLink = work ? [work.demo, work.github] : [];

    return (
      <Motion
         defaultStyle={{ scale: 0 }}
         style={{ scale: work ? spring(1, config) : spring(0) }}
      >
        {
          (value) =>
            <div className={classes.baseModal} style={toCSS(value.scale)}>
              {work &&
                (
                  <div className={classes.modal} ref={this.setWrapperRef}>
                    <div className={classes.exit} onClick={this.handleExit}>
                      <i className='icon fa fa-times fa-2x' />
                    </div>
                    <div className={classes.workContainer}>
                      <div className={classes.descContainer}>
                        <div className={classes.title}>{work.title}</div>
                        <div className={classes.description}>{work.description}</div>
                        <div className={classes.miniImage}></div>
                        <StaggeredMotion
                          defaultStyles={[{y: -500}, {y: -500}]}
                          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                            return i === 0
                              ? {y: spring(0, config)}
                              : {y: spring(prevInterpolatedStyles[i - 1].y, config)}
                          })}>
                          {interpolatingStyles =>
                            <div className={classes.workLink}>
                              {interpolatingStyles.map((style, i) => {
                                return i === 0
                                  ? <a target="_blank" href={workLink[i]} rel="noopener noreferrer" key={i} style={toLinkCSS(style.y)} className={classes.workLinkTag}><i className="fa fa-link fa-2x"/></a>
                                  : <a target="_blank" href={workLink[i]} rel="noopener noreferrer" key={i} style={toLinkCSS(style.y)} className={classes.workLinkTag}><i className="fa fa-github-alt fa-2x"/></a>
                                })
                              }
                              <i className={`icon fa fa-${work.icon} fa-2x`} />
                            </div>
                          }
                        </StaggeredMotion>
                      </div>
                      <div className={classes.image}></div>
                    </div>
                  </div>
                )
              }
            </div>
        }
      </Motion>
    )
  }
}

export default injectSheet(styles)(WorkMini);
