import React, { Component ,PropTypes} from 'react';
import Node from './Node.js';


export default class extends Component{
    static defaultProps={
        idKey:'typeId',
        contentKey:'typeName',
        expandNodes:''
    };

    constructor(props,context){
        super(props,context);
        let expandNodes=props.expandNodes||{};
        this.state={
            expandNodes
        };
    }
    getExpandNodes(){
        return this.state.expandNodes;
    }
    componentWillReceiveProps(nextProps) {

        let expandNodes=nextProps.expandNodes||{};
        this.state={
            expandNodes
        };
    }
    renderTree(){
        let data=this.props.data;
        return this.renderNode(data);
    }
    nodeClickCallback(nodeId,type){
        let {clickCallback}=this.props;
        clickCallback&&clickCallback(nodeId,type);
    }
    toggleCallback(nodeId){
        let {expandNodes}=this.state;
        if(expandNodes[nodeId]){
            delete expandNodes[nodeId]
        }else{
            expandNodes[nodeId]=true;
        }
        this.setState({
            expandNodes
        })
    }
    renderNode(data){
        let self=this,
            {idKey,contentKey}=self.props,
            {expandNodes}=self.state;
        return data.map(function(item,index){
            let children=null,
                itemKey=item[idKey];
            if(item.children&&item.children.length){
                children=self.renderNode(item.children);
            }
            return (<div key={'level-'+itemKey}>
                <Node toggleCallback={::self.toggleCallback}
                      clickCallback={::self.nodeClickCallback}
                      type={children?'branch':'leaf'}
                      nodeId={itemKey}
                      expand={expandNodes[itemKey]}
                      nodeContent={item[contentKey]}
                      selected={self.props.selected==itemKey}>
                </Node>
                {expandNodes[itemKey]?(<div className={'node-container'} key={'container-'+itemKey}>
                    {children}
                </div>):null}
            </div>)
        })
    }
    render(){
        let tree=this.renderTree();
        return(<div>
            {tree}
        </div>)
    }
}
