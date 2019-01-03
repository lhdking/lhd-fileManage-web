import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Table, Button, Input,Row,Col,Divider ,Card,Icon ,Upload,Tabs ,Modal  } from 'antd';
import styles from './DictInfo.less';
import AddDictInfo from  '@/components/DictInfo/AddDictInfo';

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
class DictInfo extends Component {
    //初始化
    constructor(props) {
        super(props);
        this.state={
        }
    }
		//新增字典
		addDictFunction=()=>{
			this.refs.addDict.showModal(1);
		}
		//修改字典
		editDictFunction=(record)=>{
			this.refs.addDict.showModal(record);
		}
		//删除字典
		delDictFunction=(record)=>{
			Modal.confirm({
				title: '提示',
				content: '确认要删除吗?',
				okText: '确认',
				cancelText: '取消',
			});
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
          				<a  onClick={() => this.editDictFunction(record.id)}><Icon type="edit" /></a>
          				<Divider type="vertical" />
          				<a  onClick={() => this.delDictFunction(record)}><Icon type="delete" /></a>
          	</span>
          )}];
          return (
          			<div>
								  <AddDictInfo name="addDict" ref="addDict"/>
          				<div className={styles.tableoperations}>
          					<Row gutter={24}>
          						<Col span={8}> 
          							<Search
          								placeholder="字典名称"
          								onSearch={value => console.log(value)}
          								/>
          						</Col>
          						<Col span={8}>
          							<Button onClick={this.addDictFunction}>新增字典</Button>
          						</Col>
          					</Row>
          				</div>
          				<Table  columns={columns}	dataSource={data}	/>
          			</div>
          );
    }

}
export default DictInfo;