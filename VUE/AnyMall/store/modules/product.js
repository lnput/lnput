import config from '../../api/config'

const state={
    getProList:{list:[],"total":"","pageSize":"","pageNum":""},
    addProduct:'',
}

const mutations ={
    getProList(state,result){
     var getProList=result.data.data;
     getProList.list.forEach(element => {
         element.productInfo= JSON.parse(element.productInfo)
     });
     state.getProList=getProList

    },
    addProduct(state,result){
        state.addProduct=result.data.data;
    }

}

const actions={
       getProList({state,commit},params){
        console.log("商品列表入参",params)
        let res=  config.list(params)
        Promise.resolve(res).then(result=>{
            var [errmsg,res]=result
            console.log("商品列表出参",res)
            commit('getProList',res)
        }
           
        )
      },

      addProduct({state,commit},params){
        console.log("添加商品入参",params)
        var res=  config.add(params)
        Promise.resolve(res).then(result=>{
            var[errmsg,res]=result
            console.log("添加商品出参",res)
            commit('addProduct',res)
        }
           
        )
      },
      delete({state,commit},params){
        console.log("删除商品入参",params)
        var res= config.delete(params)  
        Promise.resolve(res).then(result=>{
            params.productId='';
            let res=  config.list(params)
            Promise.resolve(res).then(result=>{
 
            console.log("商品列表出参",result)
            commit('getProList',result)
        })
        })
      },
      update({state,commit},params){
        console.log("修改商品入参",params)
        var res= config.update(params)  
        Promise.resolve(res).then(result=>{
            params.productId='';
            params.productName='';
            let res=  config.list(params)
            Promise.resolve(res).then(result=>{
            console.log("商品列表出参",result)
            commit('getProList',result)
        })
        })
      }

}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}