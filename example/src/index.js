import React, { Component ,PropTypes} from 'react';
import {render} from 'react/lib/ReactDOM';
import TreeMenu from "../../src/index.js";//联想功能组件


class App extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            expandNodes:{2:true,3:true,10014:true
            }
        };
    }

    render(){
        return(<div>
            <TreeMenu expandNodes='2,3,10014'/>
        </div>)
    }
}
render(<App/>,document.getElementById('root'));


