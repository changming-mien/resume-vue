<template>
  <div id="app">
    <NavBar/>
    <keep-alive><router-view/></keep-alive>
    <Footer/>
    <Loading v-if="loading"/>
  </div>
</template>
<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Loading from './components/Loading'
import jwt_decode from 'jwt-decode'
export default {
  components:{
    NavBar,
    Footer,
    Loading
  },
  computed:{
    loading(){
      return this.$store.getters.loading
    }
  },
  created(){
    if(localStorage.ele_login){
      const decode=jwt_decode(localStorage.ele_login)
      const currentTime=Date.now()/1000
      if(decode.exp<currentTime){
        this.$store.dispatch('clearUser')
        localStorage.removeItem('ele_login')
        this.$router.push('/login')
      }else{
        this.$store.dispatch('setIsAuthenticated',!this.isEmpty(decode))
        this.$store.dispatch('setUser',decode)
      }
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      );
    }
  }
}
</script>
<style>
</style>
