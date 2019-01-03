import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal,Form, Input,} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
@connect(({ template, loading }) => ({
  template,
}))
@Form.create()
class AddFileCatalog extends Component {
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
			<Modal title="新增目录"  visible={this.state.visible}
			  onOk={this.handleSubmit}
			  onCancel={this.hideModal}
			  okText="保存" cancelText="取消"	>
			 <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
					<FormItem {...formItemLayout} label="目录名称">
					{getFieldDecorator('name', {
						rules: [
						{
							required: true,
							message: '请输入模板名称',
						},
						],
					})(<Input placeholder="目录名称" />)}
					</FormItem>
					<FormItem {...formItemLayout} label="目标描述">
					{getFieldDecorator('describe', {
						rules: [
						{
							required: true,
							message: '请输入目标描述',
						},
						],
					})(
						<TextArea
						style={{ minHeight: 32 }}
						placeholder="请输入你的描述"
						rows={4}
						/>
					)}
					</FormItem>
			 </Form>
			</Modal>
		</div>
		)
	}
}
export default AddFileCatalog;