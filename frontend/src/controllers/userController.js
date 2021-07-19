import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: "Luan andrade (Controller)",
        email: "luanandradeti10@gmail.com(Controller)",
    },
    mutations: {
        login (state, {name, email}) {
            state.name = name;
            state.email = email;
        },
        logout (state) {
            state.name = "";
            state.email = "";
        },
    },
});

export {store};