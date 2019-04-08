import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    //** state is an object that holds the state of the application data. **//
    loading:true,
    user: {
      username: "",
      isAuth: false,
      token: "",
    },
    objects: {},
    filter_definitions: [],
    grouplist_definitions: [],
    doc_types: [],
    hasGroup1: false,
    group_split: null,
    group1: {
      block_definitions: [],
      action_definitions: []
    },
    hasGroup2: false,
    group2: {
      block_definitions: []
    },
    //layout: 'simple-layout' FOR MULTI LAYOUTS
  }, actions: {
    ///**actions are methods used to trigger mutations and execute asynchronous code.**///
    GET_PAGE: function ({ commit }, payload) {
      axios.get('http://127.0.0.1:3001/application/get_page?path=' +payload["path"]).then((response) => {
          commit('SET_PAGE', {
            page: response.data
          })
          commit('changeLoadingState', false)
        }, (err) => {
          // @todo handle this error
        })
      },
    GET_BLOCKDATA: function ({ commit }, payload) {
      if (payload["path"].split("/")[2] == "list"){
        // for list PAGES we need a workaround for async shiat
        axios.get('http://127.0.0.1:3001/application/get_list_block_data?bduuid='+ payload["bduuid"] +'&path='+payload["path"]+'&limit=' + 20 + '&page=' + 1).then((response) => {
            commit('SET_BLOCKDATA', {
              objects: response.data
            })
            commit('changeLoadingState', false)
          }, (err) => {
            // @todo handle this error
          })
      }
      else {
        axios.get('http://127.0.0.1:3001/application/get_block_data?bduuid='+ payload["bduuid"] +'&path='+payload["path"]).then((response) => {
            commit('SET_BLOCKDATA', {
              objects: response.data
            })
            commit('changeLoadingState', false)
          }, (err) => {
            // @todo handle this error
          })
      }
    }
  },
  mutations: {
    //**mutations is also an object containing methods which affect the state**//
    /*SET_PAGE: (state, { page }) => {
      state.group1 = null;
      state.group2 = null;
      state.action_definitions = null;
      state.hasGroup1 = false;
      state.objects = {}
      state.hasGroup1 = true;
      state.group1 = page;
      //state.group1.action_definitions = page["action_definitions"];
    },
    */
    SET_BLOCKDATA: (state, { objects }) => {
      state.objects = {}
      state.objects[objects["block_data"][0]["bd"]["uuid"]] = objects["block_data"][0];
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    },
    UpdateBlockData(state, payload) {
      state.objects[payload[0]["bduuid"]]["block_data"] = payload[0]["block_data"]
    }
  },
  getters: {
    //**getters contain methods used to abstract the access to the state, and to do some preprocessing jobs, if needed (data calculating, filtering, etc.).**//
    score (state){
      return state.group1
    }
  },
  modules: {},
  methods: {
    login(updated) {
      this.user.email = updated.email;
      this.user.username = updated.user_name;
      this.user.isAuth = true;
    },
  },
   /*mutations: {
     SET_LAYOUT (state, payload) {
       state.layout = payload
     }
   },
   getters: {
     layout (state) {
       return state.layout
     }
   }
   */
})
