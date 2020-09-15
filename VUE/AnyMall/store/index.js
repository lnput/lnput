import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
	},
	mutations: {
		login(state, provider) {

			state.hasLogin = true;
			state.userInfo = provider;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',  
			    data: provider  
			}) 
			console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({  
                key: 'userInfo'  
            })
		}
	},
	actions: {
	
	}
})

/**
 * 查询模块
 */
const modulesContext=require.context('@/store/modules',true,/\.js$/);

 /**
  * 创建模块
  */

createStoreModules(modulesContext);


/**
 * 创建模块函数
 */

 function createStoreModules(fileArr){
    fileArr.keys().forEach(element => {
        store.registerModule(element.replace(/(^\.\/)|(\.js$)/g,''),fileArr(element).default)
    });
 }

export default store
