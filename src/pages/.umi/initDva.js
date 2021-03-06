import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'dataSetManage', ...(require('D:/webWorkspace/FileBase/src/models/dataSetManage.js').default) });
app.model({ namespace: 'loginModels', ...(require('D:/webWorkspace/FileBase/src/models/loginModels.js').default) });
