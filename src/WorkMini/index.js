import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { styles } from './styles';

class WorkMini extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    }
  }

  handleClick = (work) => {
    this.props.showWork(work);
  }

  render() {
    const { classes, work } = this.props;
    const { title, meta, icon } = this.props.work;

    return (
      <div className={classes.baseWorkMini} onClick={this.handleClick.bind(this, work)}>
        <div className={classes.info}>
          <div className={classes.titleContainer}>
            <div className={classes.miniTitle}>{title}</div>
            <div className={classes.miniMeta}>{meta}</div>
          </div>
          <div className={classes.iconContainer}>
            <i className={`fa fa-${icon} fa-2x`}/>
          </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(WorkMini);
