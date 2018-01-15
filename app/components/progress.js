import React from 'react';
import './progress.less';

let Progress = React.createClass({
    getDefaultProps(){
        return {
            bacColor:"#2f9842",
        }
    },
  changeTime(e){
      var progressBar=this.refs.progressBar;
      var progressBar_ing=(e.clientX-progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
      this.props.progress_handle(progressBar_ing)
  },
  render(){
      return (
        <div className="pregress" ref="progressBar" onClick={this.changeTime}>
          <div className="clear_float pregressIng" style={{width:`${this.props.progress.abs}%`;background:`${this.props.bacColor}%`}}
            >
              <div className="pregressIng_son">{this.props.progress.str}</div>
          </div>
        </div>
      );
  }
})

export default Progress;
