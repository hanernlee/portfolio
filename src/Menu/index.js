import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { Motion, spring } from 'react-motion';
import { NavLink, withRouter } from 'react-router-dom';

import { styles } from './styles';

const config = { stiffness: 200, damping: 10 };
const toCSS = (translationX, translationY, scale) => ({
  transform: `translate(${translationX}px, ${translationY}px) scale3d(${scale}, ${scale}, ${scale}`,
});

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleMenuState = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        isOpen: false,
      });
    }
  }

  renderHamburger() {
    const { classes } = this.props;
    const { isOpen } = this.state;
    const burgTop = isOpen ? classes.burgerTop: '';
    const burgMid = isOpen ? classes.burgerMiddle: '';
    const burgBot = isOpen ? classes.burgerBottom: '';

    return (
      <div className={classNames(classes.plus, 'menu')}>
        <div className={classNames(classes.burger, burgTop)}></div>
        <div className={classNames(classes.burger, burgMid)}></div>
        <div className={classNames(classes.burger, burgBot)}></div>
      </div>
    );
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={classes.base} ref={this.setWrapperRef} onClick={this.handleMenuState}>
        {this.renderHamburger()}
        <Motion
           defaultStyle={{ translateX: 0, scale: 0 }}
           style={{ translateX: spring(isOpen ? -150 : 0, config), scale: isOpen ? spring(1) : spring(0) }}
        >
          {
            (value) =>
              <NavLink exact to="/" activeClassName={classes.active} className={classes.firstOpt} style={toCSS(value.translateX, 0, value.scale)}>
                <i className="fa fa-home fa-2x"/>
              </NavLink>
          }
        </Motion>
        <Motion
           defaultStyle={{ translate: 0, scale: 0 }}
           style={{ translate: spring(isOpen ? -100 : 0, config), scale: isOpen ? spring(1) : spring(0) }}
        >
          {
            (value) =>
              <NavLink exact to="/work" activeClassName={classes.active} className={classes.firstOpt} style={toCSS(value.translate, value.translate, value.scale)}>
                <i className="fa fa-code fa-2x"/>
              </NavLink>
          }
        </Motion>
        <Motion
           defaultStyle={{ translateY: 0, scale: 0 }}
           style={{ translateY: spring(isOpen ? -150 : 0, config), scale: isOpen ? spring(1) : spring(0) }}
        >
          {
            (value) =>
            <NavLink exact to="/contact" activeClassName={classes.active} className={classes.thirdOpt} style={toCSS(0, value.translateY, value.scale)}>
              <i className="fa fa-comments fa-2x"/>
            </NavLink>
          }
        </Motion>
      </div>
    )
  }
}

export default injectSheet(styles)(withRouter(Menu));
