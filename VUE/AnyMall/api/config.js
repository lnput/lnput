import http from './http'
export default {
    list(params){
        return http.post('/frontend/product/list',params)
    },
    add(params){
        return http.post('/backend/product/add',params)
    },
    delete(params){
        return http.post('/backend/product/delete',params)
    },
    update(params){
        return http.post('/backend/product/update',params)
    },

}