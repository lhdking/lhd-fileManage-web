import React from 'react';
import { Spin } from 'antd';


//初始化路由是 显示加载过程
export default () => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" />
  </div>
);
