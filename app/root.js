import React from 'react';
import Header from './components/header';
import Progress from './components/progress';
import Player from './page/player';
import List from './page/list';
import Answer from './page/answer';
import Question from './page/question';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory} from 'react-router';
let App = React.createClass({
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

    },

    render(){
        return(
            <div>
              <Header />
              {this.props.children}
            </div>
        )
    }
});

let Root = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" components={App}>
                    <IndexRoute  components={Player} />
                    <Route path="/list" components={List} />
                    <Route path="/question" components={Question} />
                    <Route path="/answer" components={Answer} />
                </Route>
            </Router>
        )
    }
})

export default Root;
