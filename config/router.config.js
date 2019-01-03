export default [
	//登录页面
	{
		path: '/login',
		component: '../layout/LoginLayout',
		routes: [
			{ path: '/login', component: './Login' },
		],
	},
    //配置布局 容器组件
    {
        path: '/',
        //定义容器组件
        component: '../layout',    
        routes: [
            //hello 页面
            {
                path: '/',
                name: 'home',
                component: './Home'
            }, 
            //共享文档
            {
                path: '/fileManage',
                name: 'fileManage',
				routes: [
					//文件信息
					{
							path: '/fileManage/fileInfo',
							name: 'fileInfo',
							component: './FileManage/FileInfo'
					},
					//目录信息
					{
							path: '/fileManage/fileCatalog',
							name: 'fileCatalog',
							component: './FileManage/FileCatalogInfo'
					}
				]
            },  
			//系统设置
			{
				path: '/systemSet',
				name: 'systemSet',
				routes: [
					//科室管理
					{
						path: '/systemSet/departInfo',
						name: 'departInfo',
						component: './SystemSet/DepartInfo'
					},
					//字典设置
					{
						path: '/systemSet/dictInfo',
						name: 'dictInfo',
						component: './SystemSet/DictInfo'
					},
					//安全
					{
						path: '/systemSet/securityInfo',
						name: 'securityInfo',
						component: './SystemSet/SecurityInfo'
					},
					
				]
			}
        ]
    },
];
