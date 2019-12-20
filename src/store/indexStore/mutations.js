import * as types from './types'

const mutations = {
    [types.PYMENT](state,res){
        state.getPayment=res
    }
}

export default mutations