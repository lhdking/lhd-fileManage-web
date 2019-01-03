import React, { Component } from 'react';
import { connect } from 'dva';
import {Input,Row,Col ,Card,Tree ,Tabs,Table,Icon  } from 'antd';
const TabPane = Tabs.TabPane;
class DepartInfo extends Component {
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
								<TabPane tab="基础信息" key="1">账号设置</TabPane>
								<TabPane tab="科室信息" key="2">科室信息</TabPane>
							</Tabs>
						</div>
			);
    }
}
export default DepartInfo;