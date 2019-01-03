import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'D:/webWorkspace/FileBase/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/login",
    "component": dynamic({ loader: () => import('../../layout/LoginLayout'), loading: require('D:/webWorkspace/FileBase/src/components/PageLoading/index').default }),
    "routes": [
      {
        "path": "/login",
        "component": dynamic({ loader: () => import('../Login'), loading: require('D:/webWorkspace/FileBase/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/webWorkspace/FileBase/node_modules/_umi-build-dev@1.2.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layout'), loading: require('D:/webWorkspace/FileBase/src/components/PageLoading/index').default }),
    "routes": [
      {
        "path": "/",
        "name": "home",
        "component": dynamic({ loader: () => import('../Home'), loading: require('D:/webWorkspace/FileBase/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/fileManage",
        "name": "fileManage",
        "routes": [
          {
            "path": "/fileManage/fileInfo",
            "name": "fileInfo",
            "component": dynamic({ loader: () => import('../FileManage/FileInfo'), loading: require('D:/webWorkspace/FileBase/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/fileManage/fileCatalog",
            "name": "fileCatalog",
            "component": dynamic({ loader: () => import('../FileManage/FileCatalogInfo'), loading: require('D:/webWorkspace/FileBase/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/webWorkspace/FileBase/node_modules/_umi-build-dev@1.2.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/systemSet",
        "name": "systemSet",
        "routes": [
          {
            "path": "/systemSet/departInfo",
            "name": "departInfo",
            "component": dynamic({ loader: () => import('../SystemSet/DepartInfo'), loading: require('D:/webWorkspace/FileBase/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/systemSet/dictInfo",
            "name": "dictInfo",
            "component": dynamic({ loader: () => import('../SystemSet/DictInfo'), loading: require('D:/webWorkspace/FileBase/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/systemSet/securityInfo",
            "name": "securityInfo",
            "component": dynamic({ loader: () => import('../SystemSet/SecurityInfo'), loading: require('D:/webWorkspace/FileBase/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/webWorkspace/FileBase/node_modules/_umi-build-dev@1.2.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('D:/webWorkspace/FileBase/node_modules/_umi-build-dev@1.2.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('D:/webWorkspace/FileBase/node_modules/_umi-build-dev@1.2.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
