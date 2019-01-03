import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'D:/webWorkspace/elementData/src/pages/.umi-production/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import('../../layout'),
  LoadingComponent: require('D:/webWorkspace/elementData/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/",
        "name": "home",
        "component": _dvaDynamic({
  
  component: () => import('../Home'),
  LoadingComponent: require('D:/webWorkspace/elementData/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/datSet",
        "name": "datSet",
        "component": _dvaDynamic({
  
  component: () => import('../DataSetManage/DataSetInfo'),
  LoadingComponent: require('D:/webWorkspace/elementData/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/dataElement",
        "name": "dataElement",
        "component": _dvaDynamic({
  
  component: () => import('../DataElementManage/DataElementInfo'),
  LoadingComponent: require('D:/webWorkspace/elementData/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/dataDict",
        "name": "dataDict",
        "component": _dvaDynamic({
  
  component: () => import('../DataDictManage/DataDictInfo'),
  LoadingComponent: require('D:/webWorkspace/elementData/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/cdrManage",
        "name": "cdrManage",
        "component": _dvaDynamic({
  
  component: () => import('../CDRManage/CDRInfo'),
  LoadingComponent: require('D:/webWorkspace/elementData/src/components/PageLoading/index').default,
}),
        "exact": true
      }
    ]
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
