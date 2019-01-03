import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import { formatMessage } from 'umi/locale';
import pathToRegexp from 'path-to-regexp';
import { urlToList } from '../../utils/urlToList';
import styles from './BaseMenuView.less';

const { SubMenu } = Menu;
//解析菜单的Icon 图标
const getIcon = icon => {
  if (typeof icon === 'string' && icon.indexOf('http') === 0) {
    return <img src={icon} alt="icon" className={styles.icon} />;
  }
  if (typeof icon === 'string') {
    return <Icon type={icon} />;
  }
  return icon;
};

export const getMenuMatches = (flatMenuKeys, path) =>
  flatMenuKeys.filter(item => item && pathToRegexp(item).test(path));
export default class BaseMenu extends PureComponent {
	
	constructor(props) {
	    super(props);
	    //初始路由菜单数据
	    this.flatMenuKeys = this.getFlatMenuKeys(props.menuData);
	    this.state = {
	        maxWidth: window.innerWidth- 330 - 165 - 4,
	    };
	  }
	//初始路由菜单数据  
	getFlatMenuKeys(menus) {
    	let keys = [];
	    menus.forEach(item => {
	      if (item.children) {
	        keys = keys.concat(this.getFlatMenuKeys(item.children));
	      }
	      keys.push(item.path);
	    });
	    return keys;

	}
   /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
	getNavMenuItems = (menusData, parent) => {
	    if (!menusData) {
	      return [];
	    }
	    return menusData
	      .filter(item => item.name && !item.hideInMenu)
	      .map(item => {
	        // make dom
	        const ItemDom = this.getSubMenuOrItem(item, parent);
	        return ItemDom;
	      })
	      .filter(item => item);
	 };
	//获取选中的菜单
	 getSelectedMenuKeys = () => {
	    const {
	      location: { pathname },
	    } = this.props;
	    return urlToList(pathname).map(itemPath => getMenuMatches(this.flatMenuKeys, itemPath).pop());
	  };
   /**
   * 获取菜单的html
   */
	getSubMenuOrItem = item => {
	    // doc: add hideChildrenInMenu
	    if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
	      const name = formatMessage({ id: item.locale });
	      return (
	        <SubMenu
	          title={
	            item.icon ? (
	              <span>
	                {getIcon(item.icon)}
	                <span>{name}</span>
	              </span>
	            ) : (
	              name
	            )
	          }
	          key={item.path}
	        >
	          {this.getNavMenuItems(item.children)}
	        </SubMenu>
	      );
	    }
	    return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
	  }
	/**
   * 判断是否是http链接.返回 Link 或 a
   */
 	 getMenuItemPath = item => {
	    const name = formatMessage({ id: item.locale });
	    const itemPath = this.conversionPath(item.path);
	    const icon = getIcon(item.icon);
	    const { target } = item;
	    // Is it a http link
	    if (/^https?:\/\//.test(itemPath)) {
	      return (
	        <a href={itemPath} target={target}>
	          {icon}
	          <span>{name}</span>
	        </a>
	      );
	    }
	   return (
	      <Link
	        to={itemPath}
	        target={target}
	        replace={itemPath === location.pathname}
	      >
	        {icon}
	        <span>{name}</span>
	      </Link>
    	);
	      
    }
	conversionPath = path => {
	    if (path && path.indexOf('http') === 0) {
	      return path;
	    }
	    return `/${path || ''}`.replace(/\/+/g, '/');
	  };
	  ;
	render() {
		const {menuData } = this.props;
		return (
			<Menu
			    key="Menu"
		        mode="horizontal"
		        theme="dark"
		        style={{ lineHeight: '64px' ,padding: 0 ,width:this.state.maxWidth}}
		      > 
		        {this.getNavMenuItems(menuData)}
		     </Menu>
		);
	}
	
}