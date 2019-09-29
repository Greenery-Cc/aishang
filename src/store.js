import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        curList: [],
        AllPrice: null
    },
    mutations: {
        changes(state, inner) {
            var curIs = state.curList.find((item, index) => {
                return item.id == inner.id
            })
            if (!curIs) {
                Vue.set(inner, 'count', 1)
                state.curList.push(inner)
            } else {
                inner.count++
            }
        },
        sub(state, id) {
            state.curList.map((item, index) => {
                if (item.id === id) {
                    if (item.count > 1) {
                        item.count--
                    } else {
                        item.count = 1
                    }

                }
            })
        },
        add(state, id) {
            state.curList.map((item, index) => {
                if (item.id === id) {
                    if (item.count >= 5) {
                        item.count = 5
                    } else {
                        item.count++
                    }

                }
            })
        }
    },
    actions: {

    }
})