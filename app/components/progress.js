import React from 'react';
import './progress.less';

let Progress = React.createClass({
  changeTime(e){

      var progressBar=this.refs.progressBar;
      var progressBar_ing=(e.clientX-progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
      
      this.props.progress_handle(progressBar_ing)
  },
  render(){
      return (
        <div className="pregress" ref="progressBar" onClick={this.changeTime}>
          <div className="clear_float pregressIng" style={{width:`${this.props.progress.abs}%`}}
            >
              <div className="pregressIng_son">{this.props.progress.str}</div>
          </div>
        </div>
      );
  }
})

export default Progress;
