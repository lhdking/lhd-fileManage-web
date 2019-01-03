import {queryTest} from '../services/dataSetService'
// import {format}  from '/xml-formatter';

export default {
    namespace: 'dataSetManage',
  
    state: {
        resultData:'',
    },
  
    effects: {
        *query({ payload,callback }, { call, put }) {
					
            console.info("到了models");
            // const response = yield call(queryTest, payload);
            // yield put({
            //   type: 'save',
            //   payload: response,
            // });
            // if(callback) callback(response);
            // console.info(response.data)
        },
    },
  
    reducers: {
      save(state, action) {
        return {
          ...state,
          resultData: "111",
        };
      },
    },
  };