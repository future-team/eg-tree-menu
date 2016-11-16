import React, { Component ,PropTypes} from 'react';

export default class Node extends Component{

    shouldComponentUpdate(nextProps) {
        return !(this.props.content==nextProps.content&&
        this.props.type==nextProps.type&&
        this.props.expand==nextProps.expand)
    }
    clickCallback(){
        this.props.clickCallback&&this.props.clickCallback(this.props.nodeId,this.props.type)
    }
    //nodeId,nodeContent
    render(){
        let {type,expand}=this.props;
        return (<div className={'tree-node '+type}>
                    <div className='content 'onClick={::this.clickCallback}>
                        {<i className={(expand?'expand':'')+' pre-i'}></i>}
                        {this.props.nodeContent}
                    </div>
                </div>)
    }
}