import { routerRedux } from 'dva/router';
export default {
	
	namespace: 'loginAction',
	state: {
		resultData:'',
	},
	effects: {
		*login({ payload }, { put }) {
			yield put(routerRedux.push('/base/'));
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
}