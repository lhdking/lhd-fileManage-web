import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal} from 'antd';
class AddDictInfo extends Component {
	//初始化
	constructor(props) {
		super(props);
		this.state={
			visible: false,
		}
	}
	//显示组件
	showModal = (editData) => {
		console.info(editData);
		this.setState({
			visible: true,
		});
	} 
	//隐藏models
	hideModal = () => {
		this.setState({
		  visible: false,
		});
	  }
	//页面内容
	render(){
		return(
		<div>
			<Modal
			  title="字典"
			  visible={this.state.visible}
			  onOk={this.showModal}
			  onCancel={this.hideModal}
			  okText="保存"
		      cancelText="取消"
			>
			  <p>Some contents...</p>
			  <p>Some contents...</p>
			  <p>Some contents...</p>
			</Modal>
		</div>
		)
	}
}
export default AddDictInfo;