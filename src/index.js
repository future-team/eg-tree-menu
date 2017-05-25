import '../css/index.less';

import SingleTreeMenu from './Tree';
import MultiTreeMenu from './MultiTree';
import React, { Component } from 'react';


class TreeMenu extends Component{
    static defaultProps={
        multiSelect:false
    };
    getSelectedNodes(...args){
        return this.refs.treeMenu.getSelectedNodes(...args)
    }
    getExpandNodes(...args){
        return this.refs.treeMenu.getExpandNodes(...args)
    }
    render(){
        let {multiSelect}=this.props;
        if(multiSelect){
          return   <MultiTreeMenu ref='treeMenu' {...this.props} />
        }else{
            return   <SingleTreeMenu ref='treeMenu' {...this.props} />
        }
    }
}

module.exports=TreeMenu;

