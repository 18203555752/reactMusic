import React from 'react';
import './player.less';
import Header from '../components/header';
import Progress from '../components/progress';

let Player = React.createClass({
    getInitialState(){
        return {
            progress:"-"
        };
    },
    componentDidMount(){
        $("#player").bind($.jPlayer.event.timeupdate,(e) =>{
            this.setState({
                progress:{
                  str:Math.round(e.jPlayer.status.currentTime)+"秒",
                  abs:e.jPlayer.status.currentPercentAbsolute,
                }
            });
            this.allTime=e.jPlayer.status.duration;
        })
    },
    allTime:'',
    componentWillUnmount(){
      $("#player").unbind($.jPlayer.event.timeupdate)
    },
    progress_handle:function(son){
      $("#player").jPlayer('play',this.allTime*son)
    },
    render(){
        return(
            <div>
              <Progress progress_handle={this.progress_handle} progress={this.state.progress} aa="默默001"/>
            </div>
        )
    }

})

export default Player;
