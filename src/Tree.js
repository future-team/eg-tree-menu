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
        let expandNodes=props.expandNodes||{},
            data=props.data||[];
        this.state={
            expandNodes
        };
        this.pathMap={};
        this.climbTree(data,null,this.pathMap);
    }
    getExpandNodes(){
        return this.state.expandNodes;
    }
    componentWillReceiveProps(nextProps) {

        let expandNodes=nextProps.expandNodes||{},
            data=nextProps.data||[],
            {pathMap}=this;
        this.climbTree(data,null,pathMap);
        this.state={
            expandNodes
        };
    }
    climbTree(nodes,parent,pathMap){
        let _this=this,
            {idKey}=this.props;
        nodes.forEach((node)=>{
            let nodeId=node[idKey],
                children=node.children;
            if(parent){
                pathMap[nodeId]=parent[idKey];
            }
            if(children&&children.length){
                _this.climbTree(children,node,pathMap)
            }
        })
    }
    renderTree(){
        let data=this.props.data,
            expandNodes=this.recalculateExpands(this.state.expandNodes||{});
        return this.renderNode(data,expandNodes);
    }
    nodeClickCallback(nodeId,type,node){
        let {clickCallback}=this.props;
        clickCallback&&clickCallback(nodeId,type,node);
    }
    getIds(obj, arry) {
        for (let item in obj) {
            let items = obj[item]
            arry.push(items.typeId)
            items.children.length > 0 && this.getIds(items.children, arry)
        }
    }
    getChild(node) {
        let children = node.children,
            idArray = []
        this.getIds(children,idArray)
        return idArray;
    }
    toggleCallback(nodeId,node){
        let {expandNodes}=this.state;
        if(expandNodes[nodeId]){
            let childIds = this.getChild(node);
            delete expandNodes[nodeId]
            // 同时删除该节点children的nodeId对应元素
            for(let item in expandNodes){
                childIds.indexOf(parseInt(item))>=0 && delete expandNodes[item]
            }
        }else{
            expandNodes[nodeId]=true;
        }
        this.setState({
            expandNodes
        })
    }
    recalculateExpands(expandNodes){
        let result={},
            {pathMap}=this;
        for(let key in expandNodes){
            let curKey=key;
            do{
                result[curKey]=true;
                curKey=pathMap[curKey];
            }while(curKey!=undefined)
        }
        return result;
    }
    renderNode(data,expandNodes){
        let self=this,
            {idKey,contentKey}=self.props;
        return data.map(function(item,index){
            let children=null,
                itemKey=item[idKey];
            if(item.children&&item.children.length){
                children=self.renderNode(item.children,expandNodes);
            }
            return (<div key={'level-'+itemKey}>
                <Node toggleCallback={::self.toggleCallback}
                      clickCallback={::self.nodeClickCallback}
                      type={children?'branch':'leaf'}
                      nodeId={itemKey}
                      node={item}
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
