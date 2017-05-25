import React, { Component ,PropTypes} from 'react';
import Node from './Node.js';


export default class extends Component{
    static defaultProps={
        idKey:'typeId',
        contentKey:'typeName',
        expandNodes:''
    };

    reassign(children,resetValue){
        let {treeWeightMap,curTreeWeightMap}=this,
            {idKey}=this.props,
            _this=this;
        if(children&&children.length){
            children.forEach(node=>{
                let nodeId=node[idKey];
                if(resetValue!==undefined){
                    curTreeWeightMap[nodeId]=resetValue
                }else{
                    curTreeWeightMap[nodeId]=treeWeightMap[nodeId]
                }
                if(node.children&&node.children.length){
                    _this.reassign(node.children,resetValue)
                }
            })
        }
    }
    recalculateWeightMap(nodeId,node){
        let {pathMap,treeWeightMap,curTreeWeightMap}=this,
            isAdded=false;
        if(treeWeightMap[nodeId]>curTreeWeightMap[nodeId]){
            isAdded=true
        }
        if(isAdded){
            //计算出增加值
            let origiWeight=curTreeWeightMap[nodeId],
                fullWeight=treeWeightMap[nodeId],
                increment=fullWeight-origiWeight,
                curKey=nodeId;
            //所有父节点加上increment
            do{
                curTreeWeightMap[curKey]+=increment;
                curKey=pathMap[curKey];
            }while(curKey!=undefined)

            //当前节点和子节点直接copy treeWeightMap上的原始值
            this.reassign(node.children)
            //console.log(curTreeWeightMap)
        }else{
            //计算出减少值
            let origiWeight=curTreeWeightMap[nodeId],
                decrement=origiWeight,
                curKey=nodeId;
            //所有父节点减去decrement
            do{
                curTreeWeightMap[curKey]-=decrement;
                curKey=pathMap[curKey];
            }while(curKey!=undefined)

            //子节点为0
            this.reassign(node.children,0)
            //console.log(curTreeWeightMap)
        }
    }
    calculateTreeWeight(node,treeWeightMap){
        let {children}=node,
            _this=this,
            {idKey}=this.props;
        this.curTreeWeightMap[node[idKey]]=0;
        if(children&&children.length){
            var total=0;
            children.forEach(node=>{
                total+=_this.calculateTreeWeight(node,treeWeightMap)
            })
            treeWeightMap[node[idKey]]=total
            return total;
        }else{
            treeWeightMap[node[idKey]]=1
            return 1;
        }
    }
    constructor(props,context){
        super(props,context);
        let expandNodes=props.expandNodes||{},
            data=props.data||[],
            _this=this,
            {idKey}=this.props;
        this.state={
            expandNodes,
            clickNodeId:-1
        };
        this.pathMap={};
        this.treeWeightMap={};
        this.curTreeWeightMap={};
        this.climbTree(data,null,this.pathMap);
        data.forEach(node=>{
            _this.treeWeightMap[node[idKey]]=_this.calculateTreeWeight(node,_this.treeWeightMap)
        })
    }
    getExpandNodes(){
        return this.state.expandNodes;
    }
    getSelectedNodes(){
        let {treeWeightMap,curTreeWeightMap}=this,
            idArray=[];
        for(let key in curTreeWeightMap){
            if(curTreeWeightMap[key]==1&&treeWeightMap[key]==1){
                idArray.push(key)
            }
        }
        return idArray;
    }
    componentWillReceiveProps(nextProps) {

        let expandNodes=nextProps.expandNodes||{},
            data=nextProps.data||[],
            {pathMap}=this,
            _this=this,
            {idKey}=this.props;
        this.climbTree(data,null,pathMap);
        data.forEach(node=>{
            _this.treeWeightMap[node[idKey]]=_this.calculateTreeWeight(node,_this.treeWeightMap)
        })

        //console.log(this.treeWeightMap)
        this.setState({
            expandNodes
        });
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
        this.recalculateWeightMap(nodeId,node,false)
        this.setState({
            clickNodeId:nodeId
        })
        let {clickCallback}=this.props;
        clickCallback&&clickCallback(nodeId,type,node);
    }
    getIds(list, idArray) {
        let {idKey}=this.props,
            _this=this;
        list.forEach((item)=>{
            idArray.push(item[idKey])
            item.children&&item.children.length && _this.getIds(item.children, idArray)
        })
    }
    getChild(node) {
        let children = node.children||[],
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
            {idKey,contentKey}=self.props,
            {treeWeightMap,curTreeWeightMap}=this;
        return data.map(function(item,index){
            let children=null,
                itemKey=item[idKey],
                multiSelectStatus='';
            if(item.children&&item.children.length){
                children=self.renderNode(item.children,expandNodes);
            }
            if(treeWeightMap[itemKey]>curTreeWeightMap[itemKey]){
                if(curTreeWeightMap[itemKey]>0){
                    multiSelectStatus='part-select'
                }
            }else{
                multiSelectStatus='active'
            }
            return (<div key={'level-'+itemKey}>
                <Node toggleCallback={::self.toggleCallback}
                      clickCallback={::self.nodeClickCallback}
                      type={children?'branch':'leaf'}
                      nodeId={itemKey}
                      node={item}
                      multiSelectStatus={multiSelectStatus}
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
        return(<div className='multi-select-tree'>
            {tree}
        </div>)
    }
}
