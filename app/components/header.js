import React from 'react';
import './header.less';

let Header = React.createClass({
  render(){
      return (
        <div className="header">
          <div className="clear_float">
              <img src="/static/images/logo.png" width="40px" />
              <span>wjp的音乐盒子！(～￣▽￣)～</span>
          </div>
        </div>
      );
  }
})

export default Header;
