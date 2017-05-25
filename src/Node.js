import React, { Component ,PropTypes} from 'react';

export default class Node extends Component{

    shouldComponentUpdate(nextProps) {
        return !(this.props.nodeContent==nextProps.nodeContent&&
        this.props.type==nextProps.type&&
        this.props.expand==nextProps.expand&&
        this.props.selected==nextProps.selected&&
        this.props.multiSelectStatus==nextProps.multiSelectStatus)
    }
    clickCallback(){
        this.props.clickCallback&&this.props.clickCallback(this.props.nodeId,this.props.type,this.props.node)
    }
    toggleCallback(){
        if(this.props.type=='branch'){
            this.props.toggleCallback(this.props.nodeId,this.props.node)
        }
    }
    //nodeId,nodeContent
    render(){
        let {type,expand,selected,multiSelectStatus}=this.props
        return (<div className={'tree-node '+type}>
                    <div className={'content '+(selected?'selected':'')}>
                        {multiSelectStatus!==undefined?(
                            <div className='multi-list-checkbox' onClick={::this.clickCallback}>
                                <b className={multiSelectStatus}></b>
                            </div>
                        ):null}
                        <span onClick={::this.toggleCallback}>
                        <i className={(expand?'expand':'')+' pre-i'}></i>
                        </span>
                        <span title={this.props.nodeContent} onClick={::this.clickCallback}>{this.props.nodeContent}</span>
                    </div>
                </div>)
    }
}