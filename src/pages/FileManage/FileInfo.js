import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Table, Button, Input,Row,Col ,Card,List,Icon,Tree ,Divider ,Modal } from 'antd';
import styles from './FileInfo.less';
import AddFileCatalog from '@/components/FileCatalog/AddFileCatalog';
import AddFileInfo from '@/components/FileInfo/AddFileInfo';
const data = [{
    key: '1',
    name: '医务人员血液体液暴露监测结果',
    age: 'HDSD00_0201_YWRYJCJG',
    address: '医务人员血液体液暴露监测结果',
    bb:'2.3.0.0'
  }, {
    key: '2',
    name: '医务人员血液体液暴露监测结果',
    age:  'HDSD00_0201_YWRYJCJG',
    address: '医务人员血液体液暴露监测结果',
    bb:'2.3.0.0'
  }, {
    key: '3',
    name: '医务人员血液体液暴露监测结果',
    age:  'HDSD00_0201_YWRYJCJG',
    address: '医务人员血液体液暴露监测结果',
    bb:'2.3.0.0'
  }, {
    key: '4',
    name: '医务人员血液体液暴露监测结果',
    age:  'HDSD00_0201_YWRYJCJG',
    address: '医务人员血液体液暴露监测结果',
    bb:'2.3.0.0'
  }];


const Search = Input.Search;
const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;
class FileInfo extends Component {
    //初始化
    constructor(props) {
        super(props);
    }
		//新增目录
		addCatalogFunction = ()=>{
			this.addCatalog.showModal(1);
		}
		//新增文件
		addFileFunction =()=>{
			this.addFile.showModal(1);
		}
		//修改文件信息
		editFIleFunction =(record)=>{
			this.addFile.showModal(1);
		}
		//删除文件信息
		delFileInfoFunction =(record)=>{
			Modal.confirm({
				title: '提示',
				content: '确认要删除吗?',
				okText: '确认',
				cancelText: '取消',
			});
		}
		//文件预览
		showFileView=(record)=>{
			alert("文件预览");
		}
		//文件下载
		downFile=()=>{
			alert("文件下载");
		}
		//供子组件使用
		onRef = (ref) => {
			this.addCatalog = ref;
		}
		refAddFile = (ref)=>{
			this.addFile = ref;
		}
    //页面内容
    render(){
        const columns = [{
            title: '文件名称',
            dataIndex: 'name',
            key: 'name',
            
          },{
            title: '文件类型',
            dataIndex: 'age',
            key: 'age',
          }
					, {
            title: '状态',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '操作人',
            dataIndex: 'bb',
            key: 'bb',
          },{title: '操作', dataIndex: 'op', key: 'op',render:(text, record)=>(
            <span>
                 <a  onClick={() => this.showFileView(record)}><Icon type="eye" /></a>
								 <Divider type="vertical" />
								 <a  onClick={() => this.editFIleFunction(record)}><Icon type="edit" /></a>
								 <Divider type="vertical" />
								 <a  onClick={() => this.delFileInfoFunction(record)}><Icon type="delete" /></a>
								 <Divider type="vertical" />
								 <a  onClick={() => this.downFile(record)}><Icon type="download" /></a>
           </span>
         )}
        ];
        return (
						
						<div>
							  <AddFileCatalog name="addCatalog" onRef={this.onRef}/>
								<AddFileInfo name="addFile" refAddFile={this.refAddFile}/>
								<Row  gutter={8}>
								<Col lg={6} md={24}>
										<Card  title="文件目录"  style={{ marginBottom: 24}} extra={<a onClick={this.addCatalogFunction} >新增目录</a>}>
											<DirectoryTree
													multiple
													defaultExpandAll
												>
													<TreeNode title="公司基础版本" key="0-0">
														<TreeNode title="2.3.0.0" key="0-0-0" isLeaf />
														<TreeNode title="2.1.0.0" key="0-0-1" isLeaf />
														<TreeNode title="2.0.0.0" key="0-0-2" isLeaf />
													</TreeNode>
													<TreeNode title="廊坊中医院" key="0-1">
														<TreeNode title="1.0.0.0" key="0-1-0" isLeaf />
														<TreeNode title="1.1.0.0" key="0-1-1" isLeaf />
													</TreeNode>
												</DirectoryTree>
										</Card>
									</Col>
									<Col lg={18} md={24}>
										 <Card>
												<div className={styles.tableoperations}>
													<Row gutter={24}>
														<Col span={8}> 
															 <Search
																placeholder="文件名称"
																onSearch={value => console.log(value)}
																/>
														</Col>
														<Col span={8}>
															<Button onClick={this.addFileFunction}>新增文件</Button>
														</Col>
													</Row>
												</div>
												<Row>
														<Table columns={columns} dataSource={data}  />
												</Row>
										 </Card>
									</Col>
								</Row>
						</div>
        );
    }
}
export default FileInfo;