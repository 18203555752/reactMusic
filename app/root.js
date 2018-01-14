import React from 'react';
import Header from './components/header';
import Progress from './components/progress';

let Root = React.createClass({
    getInitialState(){
        return {
            progress:"-"
        };
    },
    componentDidMount(){
        $("#player").jPlayer({
            ready:function(){
                $(this).jPlayer('setMedia',{
                    mp3:"/static/mp3/mp3.mp3"
                }).jPlayer('play');
            }
        });
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
              <Header />
              <Progress progress_handle={this.progress_handle} progress={this.state.progress} aa="默默001"/>
            </div>
        )
    }
})

export default Root;
