import React from 'react';
import './progress.less';

let Progress = React.createClass({
  render(){
      return (
        <div className="pregress">
          <div className="clear_float">
              <img src="/static/images/logo.png" width="40px" />
              <span>{this.props.aa}</span>
          </div>
        </div>
      );
  }
})

export default Progress;
