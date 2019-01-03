import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Table, Button, Input,Row,Col ,Card,List,Icon,Tree,Divider,Modal } from 'antd';
import styles from './FileCatalogInfo.less';
import AddFileCatalog from '@/components/FileCatalog/AddFileCatalog'
const data = [{
    key: '1',
    name: 'HDSB05.00.02',
    age: '基础_区域信息',
    address: 'JC_QYXX',
    bb:'10219'
  }, {
    key: '2',
    name: 'HDSB05.00.02',
    age: '基础_区域信息',
    address: 'JC_QYXX',
    bb:'10219'
  }, {
    key: '3',
    name: 'HDSB05.00.02',
    age: '基础_区域信息',
    address: 'JC_QYXX',
    bb:'10219'
  }, {
    key: '4',
    name: 'HDSB05.00.02',
    age: '基础_区域信息',
    address: 'JC_QYXX',
    bb:'10219'
  }, {
    key: '5',
    name: 'HDSB05.00.02',
    age: '基础_区域信息',
    address: 'JC_QYXX',
    bb:'10219'
  }];

const Search = Input.Search;
const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;
class FileCatalogInfo extends Component {
    //初始化
    constructor(props) {
        super(props);
    }
	  //新增目录
	  addCatalogFunction = ()=>{
			this.addCatalog.showModal(1);
		}
		//编辑目录
		editCatalogFunction =(record) =>{
			this.addCatalog.showModal(record);
		}
		//删除目录
		delCatalogFunction =(record)=>{
			Modal.confirm({
				title: '提示',
				content: '确认要删除吗?',
				okText: '确认',
				cancelText: '取消',
			});
		}
		//供子组件使用
		onRef = (ref) => {
        this.addCatalog = ref
    }
    //页面内容
    render(){
        const columns = [{
            title: '目录名称',
            dataIndex: 'name',
            key: 'name',
            
          }, {
            title: '目录描述',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '目录下文件数量',
            dataIndex: 'address',
            key: 'address',
          },
          {title: '操作', dataIndex: 'op', key: 'op',render:(text, record)=>(
            <span>
                 <a  onClick={() => this.editCatalogFunction(record)}><Icon type="edit" /></a>
								 <Divider type="vertical" />
								 <a  onClick={() => this.delCatalogFunction(record)}><Icon type="delete" /></a>
           </span>
         )}];
        return (
              <div>
							  <AddFileCatalog name="addCatalog" onRef={this.onRef}/>
								<div className={styles.tableoperations}>
									<Row gutter={24}>
										<Col span={8}> 
											<Search
												placeholder="文件名称"
												onSearch={value => console.log(value)}
												/>
										</Col>
										<Col span={8}>
											<Button onClick={this.addCatalogFunction}>新增目录</Button>
										</Col>
									</Row>
								</div>
								<Table  columns={columns}  dataSource={data} />
              </div>
        );
    }
}
export default FileCatalogInfo;