import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        num:10
    },
    mutations:{
        delNum(){
            this.state.num--
        },
        addNum(){
            this.state.num++
        }
    }
})