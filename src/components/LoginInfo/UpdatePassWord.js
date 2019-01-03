import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal,Form, Input,} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
@connect(({ template, loading }) => ({
  template,
}))
@Form.create()
class UpdatePassWord extends Component {
	//初始化
	constructor(props) {
		super(props);
		this.state={
			visible: false,
		}
	}
	//子组件为了让父组件调用
	 componentDidMount(){
			this.props.onRef(this)
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
	handleSubmit = e => {
		const { dispatch, form } = this.props;
		e.preventDefault();
		form.validateFieldsAndScroll((err, values) => {
		console.log("服务器端values:--->"+JSON.stringify(values));
		});
	  };
	//页面内容
	render(){
		const {
			form: { getFieldDecorator, getFieldValue },
		} = this.props;
	
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 7 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 12 },
				md: { span: 10 },
			},
		};
		return(
		<div>
			<Modal title="忘记密码"  visible={this.state.visible}
			  onOk={this.handleSubmit}
			  onCancel={this.hideModal}
			  okText="发送给管理员" cancelText="取消"	>
			 <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
					<FormItem {...formItemLayout} label="用户名">
						{getFieldDecorator('userName', {
							rules: [
							{
								required: true,
								message: '请填写用户名',
							},
							],
						})(<Input placeholder="用户名" />)}
					</FormItem>
					<FormItem {...formItemLayout} label="新密码">
						{getFieldDecorator('newPassWord', {
							rules: [
							{
								required: true,
								message: '请填写新的密码',
							},
							],
						})(<Input placeholder="请输入信息密码" />)}
					</FormItem>
					<FormItem {...formItemLayout} label="确认密码">
						{getFieldDecorator('markPassWord', {
							rules: [
							{
								required: true,
								message: '请再次填写密码',
							},
							],
						})(<Input placeholder="请再填写一次新密码" />)}
					</FormItem>
					
			 </Form>
			</Modal>
		</div>
		)
	}
}
export default UpdatePassWord;