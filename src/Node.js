import React, { Component ,PropTypes} from 'react';

export default class Node extends Component{

    shouldComponentUpdate(nextProps) {
        return !(this.props.content==nextProps.content&&
        this.props.type==nextProps.type&&
        this.props.expand==nextProps.expand&&
        this.props.selected==nextProps.selected)
    }
    clickCallback(){
        this.props.clickCallback&&this.props.clickCallback(this.props.nodeId,this.props.type)
    }
    toggleCallback(){
        if(this.props.type=='branch'){
            this.props.toggleCallback(this.props.nodeId)
        }
    }
    //nodeId,nodeContent
    render(){
        let {type,expand,selected}=this.props;
        return (<div className={'tree-node '+type}>
                    <div className={'content '+(selected?'selected':'')}>
                        <span onClick={::this.toggleCallback}>
                        <i className={(expand?'expand':'')+' pre-i'}></i>
                        </span>
                        <span title={this.props.nodeContent} onClick={::this.clickCallback}>{this.props.nodeContent}</span>
                    </div>
                </div>)
    }
}