import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './Login.less';
import UpdatePassWord from '@/components/LoginInfo/UpdatePassWord'
const FormItem = Form.Item;
@connect(({ loginAction, loading }) => ({
  loginAction,
}))
@Form.create()
class Login extends Component {
	//初始化
	constructor(props) {
		super(props);
	}
	
	handleSubmit = (e) => {
		const { dispatch } = this.props;
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
			console.log('Received values of form: ', values);
			dispatch({
				type: 'loginAction/login',
				payload: values,
			})
		  }
		});
	}
	//供子组件使用
	onRef = (ref) => {
			this.updatePassWord = ref
	}
	//忘记密码
	forgetPassWord(){
		this.updatePassWord.showModal(1);
	}
	//页面内容
	render() {
		const { getFieldDecorator } = this.props.form;
		return(
		<div className={styles.main}>
		  <UpdatePassWord name="updatePassWord" onRef={this.onRef} />
			<Form onSubmit={this.handleSubmit} className={styles.loginform}>
				<FormItem>
				  {getFieldDecorator('userName', {
					rules: [{ required: true, message: 'Please input your username!' }],
				  })(
					<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
				  )}
				</FormItem>
				<FormItem>
				  {getFieldDecorator('password', {
					rules: [{ required: true, message: 'Please input your Password!' }],
				  })(
					<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
				  )}
				</FormItem>
				<FormItem>
				  {getFieldDecorator('remember', {
					valuePropName: 'checked',
					initialValue: true,
				  })(
					<Checkbox>记住我</Checkbox>
				  )}
				  <a className={styles.loginformforgot} onClick={() => this.forgetPassWord()}>忘记密码</a>
				  <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
					Log in
				  </Button>
				</FormItem>
			  </Form>
		   </div>
		);
	}
}
export default Login;