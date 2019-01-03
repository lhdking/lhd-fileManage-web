import React, { Component } from 'react';
import { connect } from 'dva';
import {Input,Row,Col ,Card,Tabs,Table,Icon  } from 'antd';
const TabPane = Tabs.TabPane;
class CreatCDA extends Component {
    //初始化
    constructor(props) {
        super(props);
        this.state={
        }
    }
    //页面内容
    render(){
        return (
					<div>
						<Tabs
							defaultActiveKey="1"
							tabPosition="left"
						>
							<TabPane tab="密码设置" key="1">账号设置</TabPane>
							<TabPane tab="个人基础信息" key="2">个人基本信息</TabPane>
							<TabPane tab="权限设置" key="3">权限设置</TabPane>
						</Tabs>
					</div>
        );
    }
}
export default CreatCDA;