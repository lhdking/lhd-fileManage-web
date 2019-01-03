import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import router from 'umi/router';
import {Row, Col, Icon,  Card,Tag,Tooltip, Avatar,Divider} from 'antd';
import Bar from '@/components/HomeCom/Bar';
import Pie from '@/components/HomeCom/Pie';
const { Meta } = Card;
//首页页面
@connect(({ dataSetManage  }) => ({
    dataSetManage ,
  }))
class HomePage extends Component {
    //初始化
    constructor(props) {
        super(props);
        this.init();
    }
    //初始化请求后台数据
    init=()=>{
        const { dispatch } = this.props;
        dispatch({
            type: 'dataSetManage/query',
            payload: {},
            callback:(res)=>{
               console.info("1111");
            }
          });
    }

    //tabs切换
    callback=(key)=> {
        console.log(key);
    }

    //页面内容
    render() {
        return (
				 <div>
						<Row gutter={8}>
								<Col span={6}>
									 <Card>
										<Meta
											avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
											title="文件总数"
											description="1000个"
												/>
									</Card>
									</Col>
										<Col span={6}>
											<Card>
												<Meta
													avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
													title="有效文件"
													description="9000个"
												/>
											</Card>
										</Col>
										<Col span={6}>
											<Card>
												<Meta
													avatar={<Avatar src="../assets/files.jpg" />}
													title="失效文件"
													description="10000个"
												/>
											</Card> 
										</Col>
										<Col span={6}>
											<Card>
												<Meta
													avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
													title="用户访问量"
													description="1000次"
												/>
											</Card>
										</Col>
														</Row>
									<Divider orientation="left">文件统计图</Divider>
									<Row gutter={8}>
										<Col span={16}>
											 <Card>
											<Bar/>
										 </Card>
										</Col>
										<Col span={8}>
											<Card>
											<img src="../assets/files.jpg" />
											<Pie/>
											</Card>
										</Col>
							</Row>
	</div>
        )
    }
}
export default HomePage;

  