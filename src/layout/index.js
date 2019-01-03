import { Component ,Fragment}from 'react';
import { Layout,Menu,Icon } from 'antd';
import Link from 'umi/link';
import { stringify } from 'querystring';
import logo from '../assets/logo.svg';
import styles from './index.less';
import BaseMenuView from '../components/SiderMenu/BaseMenuView';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const SubMenu = Menu.SubMenu;
// 初始化路由 形成菜单
function formatter(data, parentPath = '', parentAuthority, parentName) {
    return data.map(item => {
      let locale = 'menu';
      if (parentName && item.name) {
        locale = `${parentName}.${item.name}`;
      } else if (item.name) {
        locale = `menu.${item.name}`;
      } else if (parentName) {
        locale = parentName;
      }
      const result = {
        ...item,
        locale,
        authority: item.authority || parentAuthority,
      };
      if (item.routes) {
        const children = formatter(item.routes, `${parentPath}${item.path}/`, item.authority, locale);
        // Reduce memory usage
        result.children = children;
      }
      delete result.routes;
      return result;
    });
  }
class BasicLayout extends Component {
    //获取菜单数据
    getMenuData() {
        const {
          route: { routes },
        } = this.props;
        return formatter(routes);
      }

    render() {
        //获取菜单数据
        const menuData = this.getMenuData();
        return (
            <Layout>
                <Header>
                  <div className={styles.head}>
                    <div className={styles.main}>
		                <div className={styles.left}>
			                <div className={styles.logo} key="logo" id="logo">
		                        <Link to="/">
		                            <img src={logo} alt="logo" />
		                            <h1>文档管理</h1>
		                        </Link>
		                    </div>
		                    <div>
		                    	<BaseMenuView  menuData={menuData}/>
		                    </div>
		                </div>
		            </div>
	              </div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>{ this.props.children}</div>
                </Content>
                 <Footer style={{ padding: 0, textAlign: 'center' }}>
				    <Fragment>
				        Copyright <Icon type="copyright" /> 2018 互联互通-元数据-北京研发中心
				    </Fragment>
				 </Footer>
            </Layout> 
        )
    }
}

export default BasicLayout;
