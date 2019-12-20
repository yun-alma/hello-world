import * as types from './types'
import api from '../../api'

const actions= {
    getPayment({commit}){
        return api.getPayment().then(res=>{
            commit(types.PYMENT,res)
        }).catch()
    }
}