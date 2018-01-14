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
        })
    },

    render(){
        return(
            <div>
              <Header />
              <Progress aa="默默001"/>
            </div>
        )
    }
})

export default Root;
