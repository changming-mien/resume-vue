import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
  isAuthoration:false,
  user:{},
  profile:{},
  profiles:Array,
  loading:false
}
const getters={
  isAuthoration:state=>state.isAuthoration,
  user:state=>state.user,
  profile:state=>state.profile,
  profiles:state=>state.profiles,
  loading:state=>state.loading
}
const mutations={
  setIsAuthenticated(state,data){
    state.isAuthoration=data
  },
  setUser(state,data){
    state.user=data
  },
  setProfile(state,data){
    state.profile=data
  },
  setProfiles(state,data){
    state.profiles=data
  },
  setLoading(state,data){
    state.loading=data
  }
}
const actions={
  setIsAuthenticated({commit},data){
    commit('setIsAuthenticated',data)
  },
  setUser({commit},data){
    commit('setUser',data)
  },
  clearUser({commit}){
    commit('setIsAuthenticated',false)
    commit('setUser',null)
    commit('setProfile',null)
  },
  setProfile({commit},data){
    commit('setProfile',data)
  },
  setProfiles({commit},data){
    commit('setProfiles',data)
  },
  setLoading({commit},data){
    commit('setLoading',data)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
