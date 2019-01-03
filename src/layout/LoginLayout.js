import React, { Fragment } from 'react';
import Link from 'umi/link';
import { Icon } from 'antd';
import styles from './LoginLayout.less';
import logo from '../assets/logo.svg';
import classNames from 'classnames';
const links = [
  {
    key: 'help',
    title: '帮助',
    href: '',
  },
  {
    key: 'privacy',
    title: '隐私',
    href: '',
  },
  {
    key: 'terms',
    title: '条款',
    href: '',
  },
];
//版权
const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 海东工作室出品
  </Fragment>
);

class LoginLayout extends React.PureComponent {
	render() {
		const { children } = this.props;
		const clsString = classNames(styles.globalFooter);
		return(
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.top}>
					<div className={styles.header}>
						<img alt="logo" className={styles.logo} src={logo} />
						<span className={styles.title}>File-System</span>
					</div>
				</div>
				<div className={styles.childrenContent}>
						{children}
				</div>
			</div>
			<div className={clsString}>
				{links && (
					<div className={styles.links}>
						{links.map(link => (
							<a
								key={link.key}
								title={link.key}
								target={link.blankTarget ? '_blank' : '_self'}
								href={link.href}
							>
								{link.title}
							</a>
						))}
					</div>
				)}
				{copyright && <div className={styles.copyright}>{copyright}</div>}
			</div>
		</div>
		);
	}
}
export default LoginLayout;