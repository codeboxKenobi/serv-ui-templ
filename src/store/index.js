import { createStore } from 'vuex'

export default createStore({

    state: {
        auth: false
    },

    mutations: {
        SET_AUTH_STATE( state, data ) {
            state.auth = data;
        }
    },

    actions: {
    
    },

    getters: {
        GET_AUTH_STATE( state ) {
            return state.auth
        }
    }
})