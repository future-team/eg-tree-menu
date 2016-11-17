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
        let {expandNodes}=this.state,
            {clickCallback}=this.props;
        if(type=='branch'){
            if(expandNodes[nodeId]){
                delete expandNodes[nodeId]
            }else{
                expandNodes[nodeId]=true;
            }
            clickCallback&&clickCallback(nodeId,type,expandNodes);
            this.setState({
                expandNodes
            })
        }else{
            clickCallback&&clickCallback(nodeId,type);
        }
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
                <Node clickCallback={::self.nodeClickCallback}
                      type={children?'branch':'leaf'}
                      nodeId={itemKey}
                      expand={expandNodes[itemKey]}
                      nodeContent={item[contentKey]}>
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
