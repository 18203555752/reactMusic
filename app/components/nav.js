import React from 'react';
import './header.less';
import './nav.less';
import {Link} from 'react-router';

var menuLis=["player","list","question","answer"];
let Nav_lis = React.createClass({
    render(){
        console.log(this.props)
        let value=this.props.name;
        let linkto=value=="player"?"/":"/"+value;
        let qqq=this.props.key;
        return(
            <li ids={qqq} className="hover" >
                    <Link to={linkto} activeClassName="qw">
                        {value}
                    </Link>
            </li>
        )
    }

})
var num=0;
let Nav_li = React.createClass({

    render(){

        return(
            <ul>
                {
                    menuLis.map(function(menuLi){
                        num++;
                        var kes="li"+num;
                        console.log(kes)
                        return  <Nav_lis key={kes} name={menuLi} />
                    })
                }
            </ul>
        )
    }

})

let Nav_ul = React.createClass({

    render(){
      return (
        <div className="header">
            <Nav_li />
        </div>
      );
    }
})

export default Nav_ul;
